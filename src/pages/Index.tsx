import { useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

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
    // Add smooth scroll behavior
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  const partners = [
    {
      name: "Rinascita Refugees",
      logo: "/lovable-uploads/1aa578f1-f9ba-47cf-b019-c2eb79b32ea1.png",
    },
    {
      name: "Legendary",
      logo: "/lovable-uploads/fdf444a8-4f38-4a63-bc03-2aa4409820a9.png",
    },
    {
      name: "Open Road",
      logo: "/lovable-uploads/3c474b81-fcee-41c9-ba26-f4b47d69653f.png",
    },
    {
      name: "Touchstone Films",
      logo: "/lovable-uploads/6ebaf91b-0323-4f0e-a6ac-d03fa206baa3.png",
    },
    {
      name: "Adobo",
      logo: "/lovable-uploads/8b6112e0-c012-4e67-86fe-fef5cc318913.png",
    },
  ];

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section ref={heroRef} className="hero-section">
        <motion.div
          initial={{ opacity: 0 }}
          animate={heroInView ? { opacity: 1 } : {}}
          transition={{ duration: 1 }}
          className="relative w-full h-screen"
        >
          <img
            src="/lovable-uploads/dba30203-495e-4415-b96f-7c5bfcc5bd8a.png"
            alt="Rinascita Refugees"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4">
            <motion.h1
              initial={{ y: 30, opacity: 0 }}
              animate={heroInView ? { y: 0, opacity: 1 } : {}}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold text-center mb-6"
            >
              Rinascita Refugees
            </motion.h1>
            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={heroInView ? { y: 0, opacity: 1 } : {}}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl md:text-2xl text-center max-w-2xl mb-8"
            >
              A story of hope, resilience, and the beautiful game
            </motion.p>
            <motion.button
              initial={{ y: 30, opacity: 0 }}
              animate={heroInView ? { y: 0, opacity: 1 } : {}}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="btn-primary"
              onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
            >
              Support the Film
            </motion.button>
          </div>
        </motion.div>
      </section>

      {/* Story Section */}
      <section ref={storyRef} className="section-padding bg-warm-gray">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={storyInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
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
            </div>
            <div className="relative h-[400px] md:h-[600px] rounded-2xl overflow-hidden">
              <img
                src="/lovable-uploads/45693f03-91dd-4146-940e-66c8d8d45230.png"
                alt="Team celebration"
                className="absolute inset-0 w-full h-full object-cover"
              />
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
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center">
              {partners.map((partner, index) => (
                <motion.div
                  key={partner.name}
                  initial={{ y: 20, opacity: 0 }}
                  animate={partnersInView ? { y: 0, opacity: 1 } : {}}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                  className="flex items-center justify-center p-4"
                >
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-h-16 md:max-h-20 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
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
    </div>
  );
};

export default Index;
