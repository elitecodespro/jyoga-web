import { authOptions } from '@/lib/auth';
import Settings from '../../../../models/Settings';
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

        const newSetting = await Settings.findByIdAndUpdate(
            data.settingId,
            {
              $set: {
                lightLogo: data.lightLogo,
                darkLogo: data.darkLogo,
                heroTitle: data.heroTitle,
                heroSubTitle: data.heroSubTitle,
                heroBackgroundPhoto: data.heroBackgroundPhoto,
                contactPhoneNumber: data.contactPhoneNumber,
                contactEmail: data.contactEmail,
                insatagramLink: data.insatagramLink,
                facebookLink: data.facebookLink,
                linkedInLink: data.linkedInLink,
              },
            },
            { new: true }
        );

        await newSetting.save();

        return new Response(JSON.stringify(newSetting), {
            status: 200,
        });

    } catch (error) {
        console.log('Error updating setting:', error);
        return new Response('Error updating setting', {
          status: 500,
        });
    }
}