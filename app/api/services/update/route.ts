import { getServerSession } from 'next-auth';
import Services from '../../../../models/Services';
import { authOptions } from '@/lib/auth';
import { connectToDatabase } from '@/lib/db';

export const POST = async (req: any) => {
  const session : any = await getServerSession(authOptions);

  try {
    await connectToDatabase();

    const data = await req.json();

    if (!session || session.user?.role !== "admin") {
      return new Response('Unauthorized', {
        status: 401,
      });
    }

    const newService = await Services.findByIdAndUpdate(
      data.serviceId,
      {
        $set: {
          name: data.name,
          price: data.price,
          description: data.description,
          duration: data.duration,
          serviceType: data.serviceType,
          eventType: data.eventType,
        },
      },
      { new: true }
    );

    await newService.save();

    return new Response(JSON.stringify(newService), {
      status: 200,
    });

  } catch (error) {
    console.log('Error updating services:', error);
    return new Response('Error updating services', {
      status: 500,
    });
  }
};