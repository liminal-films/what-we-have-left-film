import { useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";

const Index = () => {
  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [storyRef, storyInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [partnersRef, partnersInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  const partners = [
    {
      name: "Virtual",
      logo: "/lovable-uploads/455dadc0-1a69-4fe8-9df8-dc3709e93d74.png",
    },
    {
      name: "Liverpool FC",
      logo: "/lovable-uploads/585a9cdb-524f-47c2-86e7-ca55714a2907.png",
    },
    {
      name: "St Louis City",
      logo: "/lovable-uploads/238f9fa1-46ef-40f6-829d-dd7b76d1d515.png",
    },
    {
      name: "Rinascita Refugees",
      logo: "/lovable-uploads/07b7ddbb-c212-4d3f-9a29-90a917d885f6.png",
    },
    {
      name: "Open Road",
      logo: "/lovable-uploads/dbc858a8-0130-4422-9735-fcde12b228f6.png",
    },
    {
      name: "Adobo",
      logo: "/lovable-uploads/3f92a478-efa5-4e8a-9203-873e7921bd4c.png",
    }
  ];

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen p-8">
        <div className="absolute inset-8 border-[3px] border-white/30 z-10" />
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={heroInView ? { scale: 1 } : {}}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <img
            src="/lovable-uploads/45693f03-91dd-4146-940e-66c8d8d45230.png"
            alt="Team celebration"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </motion.div>
        
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/40" />
        
        <div className="relative h-screen flex flex-col items-center justify-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-center space-y-8"
          >
            <h2 className="text-white text-xl md:text-2xl font-light tracking-[0.2em] uppercase mb-4">
              A Documentary Film
            </h2>
            <h1 className="text-white text-5xl md:text-8xl font-bold tracking-wider leading-none">
              RINASCITA
              <span className="text-4xl md:text-7xl block mt-2">REFUGEES</span>
            </h1>
            <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-light">
              A story of hope, resilience, and the beautiful game
            </p>
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1.2 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="btn-primary mt-8 text-lg px-12 py-4"
              onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
            >
              Support the Film
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section ref={storyRef} className="section-padding bg-warm-gray">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={storyInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"
          >
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">The Story</h2>
              <p className="text-lg leading-relaxed">
                In Carmiano, southern Italy, a remarkable team of young asylum seekers 
                has emerged. The Rinascita Refugees, composed of players from Guinea, 
                Senegal, Gambia, Nigeria, and Mali, represents more than just a football 
                team – it's a symbol of hope and resilience.
              </p>
              <p className="text-lg leading-relaxed">
                This feature-length documentary, created by Academy Award-winning 
                professionals, tells their extraordinary journey from West Africa 
                to becoming one of Puglia's top football teams.
              </p>
              <div className="mt-8">
                <img
                  src="/lovable-uploads/ce47ea8a-92db-41b0-baaf-86b945b53654.png"
                  alt="FIGC Medal"
                  className="w-full max-w-md mx-auto rounded-lg shadow-lg"
                />
                <p className="text-sm text-gray-600 mt-3 text-center italic">
                  Recognition from the Italian Football Federation (FIGC)
                </p>
              </div>
            </div>
            <div className="space-y-8">
              <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="/lovable-uploads/8074a65f-87a5-436a-af92-a0957fca2845.png"
                  alt="Team member in red jersey"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="bg-black/5 p-6 rounded-lg">
                <p className="text-lg leading-relaxed">
                  Through football, these young men have found not just a team, but a family. 
                  Their story is one of perseverance, unity, and the transformative power of sport.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Partners Section */}
      <section ref={partnersRef} className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={partnersInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center space-y-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold">Our Partners</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-8 md:gap-12 items-center justify-items-center">
              {partners.map((partner, index) => (
                <motion.div
                  key={partner.name}
                  initial={{ y: 20, opacity: 0 }}
                  animate={partnersInView ? { y: 0, opacity: 1 } : {}}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                  className="w-32 h-24 flex items-center justify-center p-4"
                >
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-h-20 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Donation Section */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Support Our Film</h2>
          <p className="text-lg mb-8">
            Help us bring this inspiring story to screens worldwide. Your contribution 
            will support the completion of this important documentary.
          </p>
          <div className="glass-card p-8 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[25, 50, 100].map((amount) => (
                <button
                  key={amount}
                  className="btn-primary"
                  onClick={() => console.log(`Selected amount: ${amount}`)}
                >
                  ${amount}
                </button>
              ))}
            </div>
            <button className="btn-primary w-full">Custom Amount</button>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-[#1A1F2C] text-white/80">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div className="space-y-4">
              <h3 className="text-white font-semibold text-lg">About the Film</h3>
              <p className="text-sm leading-relaxed">
                Rinascita Refugees tells the inspiring story of hope and resilience 
                through football. Join us in bringing this remarkable documentary to screens worldwide.
              </p>
            </div>

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
                  <a href="mailto:info@rinascitafilm.com" className="hover:text-white transition-colors">
                    info@rinascitafilm.com
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
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-sm">
                © {new Date().getFullYear()} Rinascita Documentary. All rights reserved.
              </p>
              <div className="flex space-x-6">
                <a href="#" className="text-sm hover:text-white transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="text-sm hover:text-white transition-colors">
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
