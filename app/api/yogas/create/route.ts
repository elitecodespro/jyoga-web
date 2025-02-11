import Yogas from '../../../../models/Yogas';
import { getServerSession } from 'next-auth';
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

        const newYoga = await Yogas.create({
            name: data.name,
            description: data.description,
            photo: data.photo,
        });

        await newYoga.save()

        return new Response(JSON.stringify(newYoga), {
            status: 200,
        });
    } catch (error) {
        console.log('Error creating yoga:', error);
        return new Response('Error creating yoga', {
          status: 500,
        });
    }
}