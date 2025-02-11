import { authOptions } from '@/lib/auth';
import About from '../../../../models/About';
import { connectToDatabase } from '@/lib/db';
import { getServerSession } from 'next-auth';

export const POST = async (req: any) => {
    const session : any = await getServerSession(authOptions);

    try {

        if (!session || session.user?.role !== "admin") {
            return new Response('Unauthorized', {
                status: 401,
            });
        }

        await connectToDatabase();

        const data = await req.json();

        const newAbout = await About.findByIdAndUpdate(
            data.aboutId,
            {
              $set: {
                aboutUs: data.aboutUs,
                yogaMeaning: data.yogaMeaning,
                aboutPhoto: data.aboutPhoto,
                yogaPhoto: data.yogaPhoto,
              },
            },
            { new: true }
        );

        await newAbout.save();

        return new Response(JSON.stringify(newAbout), {
            status: 200,
        });

    } catch (error) {
        console.log('Error updating about us:', error);
        return new Response('Error updating about us', {
          status: 500,
        });
    }
}