import Yogas from '../../../../models/Yogas';
import { connectToDatabase } from '@/lib/db';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';

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

        const newYoga = await Yogas.findByIdAndUpdate(
            data.yogaId,
            {
              $set: {
                name: data.name,
                description: data.description,
                photo: data.photo,
              },
            },
            { new: true }
        );

        await newYoga.save();

        return new Response(JSON.stringify(newYoga), {
            status: 200,
        });

    } catch (error) {
        console.log('Error updating yoga:', error);
        return new Response('Error updating yoga', {
          status: 500,
        });
    }
}