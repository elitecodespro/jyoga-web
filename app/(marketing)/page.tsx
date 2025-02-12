import About from "@/components/About/About";
import AppStoreBanner from "@/components/AppStoreBanner/AppStoreBanner";
import Banner2 from "@/components/Banner2/Banner2";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";
import Hero from "@/components/Hero/Hero";
import Navbar from "@/components/Navbar/Navbar";
import Services from "@/components/Services/Services";
import YogaTypes from "@/components/YogaTypes";

export default async function Home() {
  let settings = null;

  try {
    const result = await fetch(process.env.URL! + '/api/settings/get', {
      method: 'POST',
      body: JSON.stringify({
        settingId: '67a9c48f5df4c549d6d5b296',
      }),
      cache: 'no-store',
    });
    const data = await result.json();
    settings = data[0];
    
  } catch (error) {
    settings = { title: 'Failed to load listing' };
  }

  return (
    <>
      <Navbar setting={settings} />
      <Hero setting={settings} />
      <About />
      <Banner2 />
      <YogaTypes />
      <Contact />
      <Services />
      <AppStoreBanner />
      <Footer setting={settings} />
    </>
  );
}
