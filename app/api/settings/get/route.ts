import { connectToDatabase } from '@/lib/db';
import Settings from '../../../../models/Settings';

export const POST = async (req: any) => {
    await connectToDatabase();
    const data = await req.json();

    try {
        const startIndex = parseInt(data.startIndex) || 0;
        const limit = parseInt(data.limit) || 1;
        const sortDirection = data.order === 'asc' ? 1 : -1;

        const setting = await Settings.find({
            ...(data.settingId && { _id: data.settingId }),
        })
            .sort({ updatedAt: sortDirection })
            .skip(startIndex)
            .limit(limit);

        return new Response(JSON.stringify(setting), {
            status: 200,
        });

    } catch (error) {
        console.log('Error getting settings:', error);
    }
}