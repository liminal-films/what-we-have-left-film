import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Facebook, Twitter, Instagram, Youtube, Video, Link, Presentation } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/components/ui/use-toast";
const oneTimePriceIds = {
  25: 'price_1Qsf4IIoUqNIiEfRO16RNdB1',
  100: 'price_1Qsf4IIoUqNIiEfR5BBdwPvL',
  250: 'price_1Qsf4IIoUqNIiEfRylxI49Rq'
};
const recurringPriceIds = {
  25: 'price_1QsfYVIoUqNIiEfRdyxxD5W3',
  100: 'price_1QsfYVIoUqNIiEfRScITTLRj',
  250: 'price_1QsfYVIoUqNIiEfRoR2oF9N7'
};
const Index = () => {
  const {
    toast
  } = useToast();
  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  const [trailerRef, trailerInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  const [storyRef, storyInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  const isUSTimeZone = /^America|Canada|Honolulu|Anchorage|Adak|Phoenix|Chicago|New_York/.test(Intl.DateTimeFormat().resolvedOptions().timeZone);
  const sportTerm = (text: string) => isUSTimeZone ? text : text.replace(/soccer/i, match => match.charAt(0) === 'S' ? 'Football' : 'football');
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);
  useEffect(() => {
    const loadWistiaScripts = async () => {
      const playerScript = document.createElement('script');
      playerScript.src = 'https://fast.wistia.com/player.js';
      playerScript.async = true;
      const embedScript = document.createElement('script');
      embedScript.src = 'https://fast.wistia.com/embed/u24yuqqkli.js';
      embedScript.async = true;
      embedScript.type = 'module';
      document.head.appendChild(playerScript);
      document.head.appendChild(embedScript);
    };
    loadWistiaScripts();
    return () => {
      const scripts = document.querySelectorAll('script[src*="wistia.com"]');
      scripts.forEach(script => script.remove());
    };
  }, []);
  return <div className="overflow-x-hidden">
      <section ref={heroRef} className="relative min-h-screen bg-white">
        <div className="relative grid grid-cols-1 lg:grid-cols-5 min-h-[85vh] lg:min-h-screen">
          <motion.div initial={{
          scale: 1.1
        }} animate={heroInView ? {
          scale: 1
        } : {}} transition={{
          duration: 1.5
        }} className="relative h-[75vh] lg:h-screen bg-white lg:col-span-3">
            <img src="/lovable-uploads/147d4822-5b81-4b2a-98bf-0065e44389b3.png" alt="Person in Rinascita Refugees jersey standing in front of a goal" className="absolute inset-0 w-full h-full object-cover lg:object-center object-[center_-80px]" loading="eager" fetchPriority="high" />
            <div className="absolute inset-0 lg:hidden" style={{
            background: 'linear-gradient(to top, rgba(255,255,255,1) 0%, rgba(255,255,255,0.97) 30%, rgba(255,255,255,0.6) 60%, transparent 100%)',
            top: 'calc(100% - 285px)'
          }} />
          </motion.div>

          <div className="relative bg-white min-h-[50vh] lg:min-h-screen flex items-center justify-center px-6 sm:px-8 lg:px-12 lg:col-span-2">
            <motion.div initial={{
            opacity: 0,
            y: 30
          }} animate={heroInView ? {
            opacity: 1,
            y: 0
          } : {}} transition={{
            duration: 0.8,
            delay: 0.8
          }} className="text-left w-full flex justify-center lg:justify-start space-y-8 -mt-[225px] lg:mt-0 relative z-10 mb-16">
              <div className="relative w-full -ml-[15px]">
                <img src="/lovable-uploads/e6c1ecdf-3d6a-46d5-80f9-e3e95aa07f52.png" alt="WHAT WE HAVE LEFT" className="w-full max-w-[500px] h-auto" />
                <p className="text-black text-lg mt-6 font-bold tracking-tight ml-5 mb-5 sm:text-lg my-[10px]">
                  Hope. Redemption. {sportTerm("Soccer")}.
                </p>
                <div className="absolute top-[calc(100%+0.5rem)] right-0">
                  <img src="/lovable-uploads/a3e69fe5-3ddf-4031-b41c-de1a715e423b.png" alt="Liminal Films Logo" className="h-14 w-auto opacity-100 object-scale-down" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="trailer" ref={trailerRef} className="bg-black section-padding pb-12">
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} animate={trailerInView ? {
        opacity: 1,
        y: 0
      } : {}} transition={{
        duration: 0.8
      }} className="max-w-5xl mx-auto">
          <div className="relative">
            <div className="mb-4 flex items-center gap-2 text-white/80 font-medium tracking-wide">
              <Video size={16} />
              RINASCITA SIZZLE
            </div>
            <style>
              {`
                wistia-player[media-id='u24yuqqkli']:not(:defined) { 
                  background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/u24yuqqkli/swatch'); 
                  display: block; 
                  filter: blur(5px); 
                  padding-top: 52.92%; 
                }
              `}
            </style>
            <wistia-player media-id="u24yuqqkli" wistia-popover="true" aspect="1.889763779527559" />
          </div>
        </motion.div>
      </section>

      <div className="bg-black section-padding pb-12">
        <div className="max-w-5xl mx-auto">
          <div className="mb-4 flex items-center gap-2 text-white/80 font-medium tracking-wide">
            <Link size={16} />
            CNN.COM ARTICLE
          </div>
          <a href="https://www.cnn.com/interactive/2024/06/sport/refugee-soccer-italy-cnnphotos/" target="_blank" rel="noopener noreferrer" className="block relative overflow-hidden group rounded-2xl">
            <img src="/lovable-uploads/894fa30b-0804-4df5-b06e-d5a6c0d0c3d8.png" alt="Players training" className="w-full h-[400px] object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/60 flex flex-col justify-end p-8">
              <h2 className="text-white text-3xl md:text-4xl font-bold mb-4 group-hover:text-[#ea384c] transition-colors py-0 px-0 mx-0 my-[8px]">
                This all-migrant soccer team is chasing a dream together
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed max-w-3xl py-[2px] my-0">
                Deep in the eighth tier of the Italian soccer league, far removed from the star-studded ranks of AC Milan and Juventus, there is an amateur team made up entirely of migrants.
              </p>
            </div>
          </a>

          <div className="mt-12">
            <div className="mb-4 flex items-center gap-2 text-white/80 font-medium tracking-wide">
              <Presentation size={16} />
              INVESTOR DECK
            </div>
            <div className="bg-black/20 p-8 rounded-2xl">
              <a href="https://www.canva.com/design/DAGfNpk33xw/S4Ot2WqfuU4Nizw3zYJ69w/view?utm_content=DAGfNpk33xw&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h06dec372c8" target="_blank" rel="noopener noreferrer" className="block w-fit">
                <Presentation size={48} className="text-white/80 hover:text-[#ea384c] transition-colors" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <section ref={storyRef} className="section-padding bg-warm-gray">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{
          y: 50,
          opacity: 0
        }} animate={storyInView ? {
          y: 0,
          opacity: 1
        } : {}} transition={{
          duration: 0.8
        }} className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">About the Film</h2>
              <p className="text-lg leading-relaxed">
                Nestled in the heart of Italy, a group of West Africans who have lost everything unite 
                to create the Rinascita Refugees {sportTerm("soccer")} team. Their shared passion for the sport becomes a vehicle to combat prejudice, 
                rebuild their lives, and discover hope and community in an unfamiliar land.
              </p>
              <p className="text-lg leading-relaxed">
                This compelling feature-length documentary captures their journeys both on and off the field, 
                showcasing the challenges, the victories, and the unwavering spirit that transform the 
                Rinascita Refugees into more than just a team—we'll watch them become a symbol of hope and 
                resilience for their countries and the world.
              </p>
              <div className="mt-8">
                <img src="/lovable-uploads/a5942f2a-89b9-4242-a14b-738c6c898940.png" alt="Coach meeting with Rinascita Refugees team" className="w-full max-w-md mx-auto rounded-lg shadow-lg" />
                <p className="text-sm text-gray-600 mt-3 text-center italic">A team huddle during a training session</p>
              </div>
            </div>
            <div className="space-y-8">
              <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-xl">
                <img src="/lovable-uploads/0cc28e08-6487-4cf3-aa6a-b0605052e4f0.png" alt="Team celebrating with trophy" className="w-full h-full object-cover" />
              </div>
              <div className="bg-black/5 p-6 rounded-lg">
                <p className="text-lg leading-relaxed">
                  These young men have found not only a team, but a family. Their story is one of perseverance, unity, and the transformative power of sport.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="support-section" className="section-padding">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Support the Making of This Film</h2>
          <p className="text-lg mb-8">
            Help us bring this inspiring story to screens worldwide. Your contribution 
            will support the completion of this important documentary.
          </p>
          <div className="glass-card p-8 space-y-6">
            <div className="text-2xl font-bold text-[#ea384c]">Coming Soon</div>
            <p className="text-lg text-gray-600">
              We're finalizing our donation platform. Check back soon to support this project.
            </p>
          </div>
        </div>
      </section>

      <footer className="bg-[#1A1F2C] text-white/80">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-4">
              <h3 className="text-white font-semibold text-lg">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="https://instagram.com/whatwehaveleft" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  <Instagram size={20} />
                </a>
                <a href="https://youtube.com/@whatwehaveleft" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  <Youtube size={20} />
                </a>
                <a href="https://facebook.com/whatwehaveleft" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  <Facebook size={20} />
                </a>
                <a href="https://twitter.com/whatwehaveleft" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  <Twitter size={20} />
                </a>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-white font-semibold text-lg">Contact</h3>
              <ul className="space-y-2">
                <li className="text-sm">
                  <a href="mailto:zachbaliva@gmail.com" className="hover:text-white transition-colors">zachbaliva@gmail.com</a>
                </li>
                <li className="text-sm">
                  <a href="tel:217-607-3276" className="hover:text-white transition-colors">217-607-3276</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-white/10">
            <div className="flex justify-center">
              <p className="text-sm">
                © {new Date().getFullYear()} What We Have Left. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>;
};
export default Index;