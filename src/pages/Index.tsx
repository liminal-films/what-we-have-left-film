import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";
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
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [customAmount, setCustomAmount] = useState("");
  const [showCustomAmount, setShowCustomAmount] = useState(false);
  const [isRecurring, setIsRecurring] = useState(false);
  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  const [storyRef, storyInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  const [partnersRef, partnersInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  const partners = [{
    name: "Liminal Films",
    logo: "/lovable-uploads/90b95407-95dc-4f1d-8a1c-5ec6fce32544.png"
  }, {
    name: "Liverpool FC",
    logo: "/lovable-uploads/585a9cdb-524f-47c2-86e7-ca55714a2907.png"
  }, {
    name: "St Louis City",
    logo: "/lovable-uploads/238f9fa1-46ef-40f6-829d-dd7b76d1d515.png"
  }, {
    name: "Rinascita Refugees",
    logo: "/lovable-uploads/07b7ddbb-c212-4d3f-9a29-90a917d885f6.png"
  }, {
    name: "Open Road",
    logo: "/lovable-uploads/dbc858a8-0130-4422-9735-fcde12b228f6.png"
  }, {
    name: "Adobo",
    logo: "/lovable-uploads/3f92a478-efa5-4e8a-9203-873e7921bd4c.png"
  }];

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('success')) {
      toast({
        title: "Thank you for your donation!",
        description: "Your support means the world to us.",
        className: "bg-white text-black border border-gray-200"
      });
      window.history.replaceState({}, document.title, window.location.pathname);
    } else if (urlParams.get('canceled')) {
      toast({
        title: "Donation canceled",
        description: "No worries! You can try again whenever you're ready.",
        variant: "destructive",
        className: "bg-white text-black border border-gray-200"
      });
      window.history.replaceState({}, document.title, window.location.pathname);
    }
  }, [toast]);

  const handleDonation = async (amount: number, priceId: string) => {
    try {
      setIsProcessing(true);
      const {
        data,
        error
      } = await supabase.functions.invoke('create-checkout', {
        body: {
          priceId,
          email,
          name,
          successUrl: `${window.location.origin}?success=true`,
          cancelUrl: `${window.location.origin}?canceled=true`
        }
      });
      if (error) throw error;
      if (data.sessionUrl) {
        window.location.href = data.sessionUrl;
      }
    } catch (error) {
      console.error('Error:', error);
      toast({
        title: "Error",
        description: "There was a problem processing your donation. Please try again.",
        variant: "destructive",
        className: "bg-white text-black border border-gray-200"
      });
    } finally {
      setIsProcessing(false);
    }
  };

  return <div className="overflow-x-hidden">
      <section ref={heroRef} className="relative min-h-screen">
        <div className="relative grid grid-cols-1 lg:grid-cols-2 min-h-screen after:absolute after:inset-[30px] after:border-[3px] after:border-white/20">
          <h2 className="absolute top-10 w-full text-center z-10 text-white md:text-2xl font-light tracking-[0.2em] uppercase mb-4 text-base">
            A LIMINAL FILMS PRODUCTION
          </h2>
          <motion.div 
            initial={{ scale: 1.1 }} 
            animate={heroInView ? { scale: 1 } : {}} 
            transition={{ duration: 1.5 }}
            className="relative h-[50vh] lg:h-screen"
          >
            <img 
              src="/lovable-uploads/f1501e1d-7f1d-4327-91d8-7384f4e6e868.png" 
              alt="Player with medal in room" 
              className="absolute inset-0 w-full h-full object-cover" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent lg:hidden" />
          </motion.div>

          <div className="relative bg-black min-h-[50vh] lg:min-h-screen flex items-center justify-center px-8 lg:px-12">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-left space-y-8 max-w-xl"
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
              </div>
            </motion.div>
          </div>
        </div>
      </section>

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
        }} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">The Story</h2>
              <p className="text-lg leading-relaxed">
                In Carmiano, southern Italy, a remarkable team of young asylum seekers 
                has emerged. The Rinascita Refugees, composed of players from Guinea, 
                Senegal, Gambia, Nigeria, and Mali, represents more than just a {/^America|Canada|Honolulu|Anchorage|Adak|Phoenix|Chicago|New_York/.test(Intl.DateTimeFormat().resolvedOptions().timeZone) ? "soccer" : "football"} team – it's a symbol of hope and resilience.
              </p>
              <p className="text-lg leading-relaxed">
                This feature-length documentary, created by Academy Award-winning 
                professionals, tells their extraordinary journey from West Africa 
                to becoming one of Puglia's top {/^America|Canada|Honolulu|Anchorage|Adak|Phoenix|Chicago|New_York/.test(Intl.DateTimeFormat().resolvedOptions().timeZone) ? "soccer" : "football"} teams.
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
                <img src="/lovable-uploads/8074a65f-87a5-436a-af92-a0957fca2845.png" alt="Team member in red jersey" className="w-full h-full object-cover" />
              </div>
              <div className="bg-black/5 p-6 rounded-lg">
                <p className="text-lg leading-relaxed">
                  Through {/^America|Canada|Honolulu|Anchorage|Adak|Phoenix|Chicago|New_York/.test(Intl.DateTimeFormat().resolvedOptions().timeZone) ? "soccer" : "football"}, these young men have found not just a team, but a family. 
                  Their story is one of perseverance, unity, and the transformative power of sport.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section ref={partnersRef} className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{
          y: 30,
          opacity: 0
        }} animate={partnersInView ? {
          y: 0,
          opacity: 1
        } : {}} transition={{
          duration: 0.8
        }} className="text-center space-y-12">
            <h2 className="text-3xl md:text-4xl font-bold">Our Partners</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-8 md:gap-12 items-center justify-items-center">
              {partners.map((partner, index) => <motion.div key={partner.name} initial={{
              y: 20,
              opacity: 0
            }} animate={partnersInView ? {
              y: 0,
              opacity: 1
            } : {}} transition={{
              duration: 0.5,
              delay: index * 0.1
            }} className={`flex items-center justify-center p-4 ${partner.name === "Liminal Films" ? "w-32 h-24 scale-130" : "w-32 h-24"}`}>
                  <img src={partner.logo} alt={partner.name} className={`object-contain filter grayscale hover:grayscale-0 transition-all duration-300 ${partner.name === "Liminal Films" ? "max-h-20" : "max-h-20"}`} />
                </motion.div>)}
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
            <div className="flex justify-center mb-6">
              <div className="inline-flex items-center bg-gray-100 rounded-full p-1">
                <button className={`px-4 py-2 rounded-full transition-all ${!isRecurring ? 'bg-white shadow-md' : ''}`} onClick={() => setIsRecurring(false)}>
                  One-time
                </button>
                <button className={`px-4 py-2 rounded-full transition-all ${isRecurring ? 'bg-white shadow-md' : ''}`} onClick={() => setIsRecurring(true)}>
                  Monthly
                </button>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[25, 100, 250].map(amount => <button key={amount} className={`px-8 py-3 bg-[#ea384c] text-white rounded-full font-semibold 
                           shadow-lg shadow-[#ea384c]/20
                           hover:bg-[#ea384c]/90 hover:shadow-[#ea384c]/30
                           transition-all duration-300 
                           transform hover:scale-105
                           disabled:opacity-50 disabled:cursor-not-allowed`} onClick={() => handleDonation(amount, isRecurring ? recurringPriceIds[amount] : oneTimePriceIds[amount])} disabled={isProcessing}>
                  ${amount}{isRecurring ? '/month' : ''}
                </button>)}
            </div>
            {!isRecurring && <div className="space-y-4">
                {showCustomAmount ? <div className="space-y-4">
                    <input type="number" min="1" placeholder="Enter amount in USD" value={customAmount} onChange={e => setCustomAmount(e.target.value)} className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#ea384c]" />
                    <button className={`px-8 py-3 bg-[#ea384c] text-white rounded-full font-semibold 
                               shadow-lg shadow-[#ea384c]/20
                               hover:bg-[#ea384c]/90 hover:shadow-[#ea384c]/30
                               transition-all duration-300 
                               transform hover:scale-105
                               w-full
                               disabled:opacity-50 disabled:cursor-not-allowed`} onClick={() => handleDonation(Number(customAmount), 'price_1Qsf4IIoUqNIiEfRUD67iqzk')} disabled={isProcessing || !customAmount || Number(customAmount) < 1}>
                      Donate ${customAmount}
                    </button>
                    <button className="text-gray-600 underline" onClick={() => {
                setShowCustomAmount(false);
                setCustomAmount("");
              }}>
                      Cancel
                    </button>
                  </div> : <button className={`px-8 py-3 bg-[#ea384c] text-white rounded-full font-semibold 
                             shadow-lg shadow-[#ea384c]/20
                             hover:bg-[#ea384c]/90 hover:shadow-[#ea384c]/30
                             transition-all duration-300 
                             transform hover:scale-105
                             w-full
                             disabled:opacity-50 disabled:cursor-not-allowed`} onClick={() => setShowCustomAmount(true)} disabled={isProcessing}>
                    Custom Amount
                  </button>}
              </div>}
            <div className="flex items-center justify-center space-x-8 mt-12">
              <img src="/lovable-uploads/d84235fe-12e4-4130-8f69-9c5b452446a5.png" alt="Payment methods: Mastercard, Visa, Google Pay, Apple Pay" className="max-h-12 object-contain" />
            </div>
            <div className="flex items-center justify-center mt-8">
              <img src="/lovable-uploads/bc68834e-d708-47c0-bab5-f80bec59bd27.png" alt="Powered by Stripe" className="h-8 object-contain" />
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-[#1A1F2C] text-white/80">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div className="space-y-4">
              <h3 className="text-white font-semibold text-lg">About the Film</h3>
              <p className="text-sm leading-relaxed">
                What We Have Left tells the inspiring story of hope and resilience 
                through {/^America|Canada|Honolulu|Anchorage|Adak|Phoenix|Chicago|New_York/.test(Intl.DateTimeFormat().resolvedOptions().timeZone) ? "soccer" : "football"}. Join us in bringing this remarkable documentary to screens worldwide.
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
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-sm">
                © {new Date().getFullYear()} What We Have Left. All rights reserved.
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
    </div>;
};

export default Index;
