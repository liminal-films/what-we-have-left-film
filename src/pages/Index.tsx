import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Facebook, Twitter, Instagram, Youtube, Play, Link, Video } from "lucide-react";
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
  const { toast } = useToast();
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

  const scrollToTrailer = () => {
    const trailerSection = document.getElementById('trailer-section');
    trailerSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return <div className="overflow-x-hidden">
      <section ref={heroRef} className="relative min-h-screen">
        <div className="relative grid grid-cols-1 lg:grid-cols-2 min-h-[85vh] lg:min-h-screen after:absolute after:inset-[30px] after:border-[3px] after:border-white/20 after:z-0">
          <h2 className="absolute top-10 w-full text-center z-10 text-white text-sm md:text-lg font-light tracking-[0.2em] uppercase mb-4 drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)]">
            A LIMINAL FILMS PRODUCTION
          </h2>
          <motion.div 
            initial={{ scale: 1.1 }} 
            animate={heroInView ? { scale: 1 } : {}} 
            transition={{ duration: 1.5 }}
            className="relative h-[75vh] lg:h-screen"
          >
            <img 
              src="/lovable-uploads/f1501e1d-7f1d-4327-91d8-7384f4e6e868.png" 
              alt="Player with medal in room" 
              className="absolute inset-0 w-full h-full object-cover" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent lg:hidden" />
          </motion.div>

          <div className="relative bg-black min-h-[50vh] lg:min-h-screen flex items-center justify-center px-8 lg:px-12">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-left space-y-8 max-w-xl -mt-20 md:mt-0 lg:mt-20 relative z-10 mb-16"
            >
              <div>
                <h1 className="text-[#EA384C] font-bold tracking-wider leading-none inline-flex flex-col items-start">
                  <span className="block text-4xl md:text-5xl">WHAT</span>
                  <span className="block text-5xl md:text-6xl">WE</span>
                  <span className="block text-6xl md:text-7xl">HAVE</span>
                  <span className="block text-7xl md:text-8xl">LEFT</span>
                </h1>
                <p className="text-white/90 text-lg md:text-xl mt-8 font-light">
                  Hope. Redemption. {/^America|Canada|Honolulu|Anchorage|Adak|Phoenix|Chicago|New_York/.test(Intl.DateTimeFormat().resolvedOptions().timeZone) ? "Soccer" : "Football"}.
                </p>
                <button 
                  onClick={scrollToTrailer}
                  className="btn-primary mt-8 inline-flex items-center gap-2"
                >
                  <Play size={20} />
                  View Trailer
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section ref={trailerRef} className="bg-black section-padding">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={trailerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          <div className="relative">
            <div className="mb-4 flex items-center gap-2 text-white/80 font-medium tracking-wide">
              <Video size={16} />
              RINASCITA SIZZLE V2
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
            <wistia-player 
              media-id="u24yuqqkli" 
              wistia-popover="true" 
              aspect="1.889763779527559"
            />
          </div>
        </motion.div>
      </section>

      <div className="bg-[#1A1F2C] pb-12">
        <div className="max-w-5xl mx-auto">
          <a 
            href="https://www.cnn.com/interactive/2024/06/sport/refugee-soccer-italy-cnnphotos/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="block relative overflow-hidden group"
          >
            <img 
              src="/lovable-uploads/894fa30b-0804-4df5-b06e-d5a6c0d0c3d8.png" 
              alt="Players training" 
              className="w-full h-[400px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/60 flex flex-col justify-end p-8">
              <div className="text-gray-300 font-medium tracking-wide mb-2 flex items-center gap-2">
                <Link size={16} />
                CNN.COM
              </div>
              <h2 className="text-white text-3xl md:text-4xl font-bold mb-4 group-hover:text-[#ea384c] transition-colors">
                This all-migrant soccer team is chasing a dream together
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed max-w-3xl">
                Deep in the eighth tier of the Italian soccer league, far removed from the star-studded ranks of AC Milan and Juventus, there is an amateur team made up entirely of migrants.
              </p>
            </div>
          </a>
        </div>
      </div>

      <section ref={storyRef} className="section-padding bg-warm-gray">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ y: 50, opacity: 0 }} 
            animate={storyInView ? { y: 0, opacity: 1 } : {}} 
            transition={{ duration: 0.8 }} 
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"
          >
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">About the Film</h2>
              <p className="text-lg leading-relaxed">
                Nestled in the heart of Italy, a group of West Africans who have lost everything unite 
                to create the Rinascita Refugees {/^America|Canada|Honolulu|Anchorage|Adak|Phoenix|Chicago|New_York/.test(Intl.DateTimeFormat().resolvedOptions().timeZone) ? "soccer" : "football"} team. Their shared passion for the sport becomes a vehicle to combat prejudice, 
                rebuild their lives, and discover hope and community in an unfamiliar land.
              </p>
              <p className="text-lg leading-relaxed">
                This compelling feature-length documentary captures their journeys both on and off the field, 
                showcasing the challenges, the victories, and the unwavering spirit that transform the 
                Rinascita Refugees into more than just a team—we'll watch them become a symbol of hope and 
                resilience for their countries and the world.
              </p>
              <div className="mt-8">
                <img src="/lovable-uploads/ce47ea8a-92db-41b0-baaf-86b945b53654.png" alt="FIGC Medal" className="w-full max-w-md mx-auto rounded-lg shadow-lg" />
                <p className="text-sm text-gray-600 mt-3 text-center italic">
                  Recognition from the Italian Football Federation (FIGC)
                </p>
              </div>
            </div>
            <div className="space-y-8">
              <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-xl">
                <img src="/lovable-uploads/87302c11-6fd1-49fc-b670-9797aed4ff52.png" alt="Team member in red Refugees jersey against fence" className="w-full h-full object-cover" />
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="space-y-4">
              <h3 className="text-white font-semibold text-lg">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-sm hover:text-white transition-colors">
                    Our Story
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm hover:text-white transition-colors">
                    Support Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm hover:text-white transition-colors">
                    Press Kit
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-white font-semibold text-lg">Contact</h3>
              <ul className="space-y-2">
                <li className="text-sm">
                  <a href="mailto:info@whatwehaveleftfilm.com" className="hover:text-white transition-colors">
                    info@whatwehaveleftfilm.com
                  </a>
                </li>
                <li className="text-sm">
                  Rome, Italy
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-white font-semibold text-lg">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-white transition-colors">
                  <Facebook size={20} />
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  <Twitter size={20} />
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  <Instagram size={20} />
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  <Youtube size={20} />
                </a>
              </div>
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
