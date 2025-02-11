import { connectToDatabase } from '@/lib/db';
import About from '../../../../models/About';

export const POST = async (req: any) => {
    await connectToDatabase();
    const data = await req.json();

    try {
        const startIndex = parseInt(data.startIndex) || 0;
        const limit = parseInt(data.limit) || 1;
        const sortDirection = data.order === 'asc' ? 1 : -1;

        const about = await About.find({
            ...(data.aboutId && { _id: data.aboutId }),
        })
            .sort({ updatedAt: sortDirection })
            .skip(startIndex)
            .limit(limit);

        return new Response(JSON.stringify(about), {
            status: 200,
        });

    } catch (error) {
        console.log('Error getting about us:', error);
    }
}