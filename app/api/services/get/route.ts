import { connectToDatabase } from '@/lib/db';
import Services from '../../../../models/Services';

export const POST = async (req: any) => {
  await connectToDatabase();
  const data = await req.json();

  try {
    const startIndex = parseInt(data.startIndex) || 0;
    const limit = parseInt(data.limit) || 9;
    const sortDirection = data.order === 'asc' ? 1 : -1;

    let serviceType = data.serviceType;

    if (serviceType === undefined || serviceType === 'all') {
      serviceType = { $in: ['Online', 'Onsite'] };
    }

    let eventType = data.eventType;

    if (eventType === undefined || eventType === 'all') {
      eventType = { $in: ['Yoga Group Event', 'Individual Session'] };
    }

    const services = await Services.find({
      ...(data.serviceId && { _id: data.serviceId }),
      ...(data.searchTerm && {
        $or: [
          { name: { $regex: data.searchTerm, $options: 'i' } },
          { description: { $regex: data.searchTerm, $options: 'i' } },
        ],
      }),
      serviceType,
      eventType,
    })
      .sort({ updatedAt: sortDirection })
      .skip(startIndex)
      .limit(limit);

    return new Response(JSON.stringify(services), {
      status: 200,
    });

  } catch (error) {
    console.log('Error getting services:', error);
  }
};