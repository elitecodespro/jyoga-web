import Yogas from '../../../../models/Yogas';
import { connectToDatabase } from '@/lib/db';

export const POST = async (req: any) => {
    await connectToDatabase();
    const data = await req.json();

    try {
        const startIndex = parseInt(data.startIndex) || 0;
        const limit = parseInt(data.limit) || 9;
        const sortDirection = data.order === 'asc' ? 1 : -1;

        const yogas = await Yogas.find({
            ...(data.yogaId && { _id: data.yogaId }),
        })
            .sort({ updatedAt: sortDirection })
            .skip(startIndex)
            .limit(limit);

        return new Response(JSON.stringify(yogas), {
            status: 200,
        });

    } catch (error) {
        console.log('Error getting yogas:', error);
    }
}