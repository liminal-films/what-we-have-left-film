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
  ];

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen">
        <div className="absolute inset-0 grid grid-cols-2 grid-rows-2">
          <motion.div
            initial={{ opacity: 0, scale: 1.1 }}
            animate={heroInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1.2 }}
            className="relative overflow-hidden"
          >
            <img
              src="/lovable-uploads/9803f71f-6884-4f6d-9817-4737d49299ea.png"
              alt="Rinascita Team"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 1.1 }}
            animate={heroInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="relative overflow-hidden"
          >
            <img
              src="/lovable-uploads/9372e398-a96b-443e-a3f8-48216820affc.png"
              alt="Football action"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 1.1 }}
            animate={heroInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1.2, delay: 0.4 }}
            className="relative overflow-hidden"
          >
            <img
              src="/lovable-uploads/2a66fd8b-5f9e-4374-8be8-e9480d336c00.png"
              alt="Training session"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 1.1 }}
            animate={heroInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1.2, delay: 0.6 }}
            className="relative overflow-hidden"
          >
            <img
              src="/lovable-uploads/109a4b40-e99a-47b6-867d-8fa5c606924f.png"
              alt="Team spirit"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </motion.div>
        </div>
        
        <div className="absolute inset-0 bg-black/60" />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={heroInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="relative h-screen flex flex-col items-center justify-center text-white px-4 space-y-8"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-center tracking-wider">
            RINASCITA
            <br />
            REFUGEES
          </h1>
          <p className="text-xl md:text-2xl text-center max-w-2xl opacity-90">
            A story of hope, resilience, and the beautiful game
          </p>
          <button
            className="btn-primary mt-8"
            onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
          >
            Support the Film
          </button>
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
            <div className="flex flex-wrap md:flex-nowrap justify-center items-center gap-12 md:gap-16">
              {partners.map((partner, index) => (
                <motion.div
                  key={partner.name}
                  initial={{ y: 20, opacity: 0 }}
                  animate={partnersInView ? { y: 0, opacity: 1 } : {}}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                  className="w-40 h-32 flex items-center justify-center p-4"
                >
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-h-24 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
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
