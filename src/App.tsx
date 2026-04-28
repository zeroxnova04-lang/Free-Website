import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ChevronRight, Star, MapPin, Search, Instagram, Twitter, Facebook, Youtube, Leaf, Heart } from 'lucide-react';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ['Home', 'Menu', 'Locations', 'Rewards', 'Catering', 'About'];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 md:px-6 flex justify-between items-center">
        <div className="flex items-center">
          <span className={`text-3xl font-black font-display text-primary-red ${isScrolled ? '' : ''}`}>
            Chick-fil-A
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link} 
              href={`#${link.toLowerCase()}`} 
              className={`font-bold transition-colors hover:text-primary-red uppercase tracking-widest text-xs ${isScrolled ? 'text-text-dark' : 'text-white'}`}
            >
              {link}
            </a>
          ))}
          <button className="bg-primary-red text-white px-6 py-2 rounded-full font-black uppercase tracking-widest text-xs hover:bg-dark-red transition-all shadow-lg hover:scale-105 active:scale-95">
            Order Now
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2" 
          onClick={() => setIsMenuOpen(true)}
        >
          <Menu className={isScrolled ? 'text-text-dark' : 'text-white'} size={28} />
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-white z-[60] flex flex-col p-6"
          >
            <div className="flex justify-between items-center mb-10">
              <span className="text-3xl font-black font-display italic text-primary-red tracking-tighter">Chick-fil-A</span>
              <button onClick={() => setIsMenuOpen(false)} className="text-text-dark p-2">
                <X size={32} />
              </button>
            </div>
            <div className="flex flex-col space-y-6">
              {navLinks.map((link) => (
                <a 
                  key={link} 
                  href={`#${link.toLowerCase()}`} 
                  onClick={() => setIsMenuOpen(false)}
                  className="text-2xl font-black text-text-dark hover:text-primary-red transition-colors uppercase tracking-tight"
                >
                  {link}
                </a>
              ))}
              <button className="bg-primary-red text-white px-8 py-4 rounded-full text-xl font-black uppercase tracking-widest w-full shadow-xl">
                Order Now
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative h-screen min-h-[768px] flex items-center px-4 md:px-16 overflow-hidden bg-warm-cream">
      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] items-center gap-12">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="hidden md:flex absolute -top-24 left-0 bg-white px-5 py-3 rounded-xl shadow-premium items-center gap-3 border-l-4 border-primary-red"
          >
            <Star className="text-yellow-400 fill-yellow-400" size={18} />
            <span className="text-text-dark text-sm font-bold tracking-tight">#1 Rated Fast Food in America</span>
          </motion.div>

          <h1 className="text-6xl md:text-[88px] font-extrabold text-text-dark leading-[1.05] tracking-tighter mb-8">
            It's More Than <br/>
            Just Chicken. <br/>
            It's a <span className="text-primary-red font-display italic font-black">Feeling.</span>
          </h1>

          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="bg-primary-red text-white px-10 py-5 rounded-full text-lg font-bold border-2 border-primary-red hover:bg-dark-red transition-all shadow-xl hover:scale-105 active:scale-95 group">
              Order Now
            </button>
            <button className="border-2 border-primary-red text-primary-red px-10 py-5 rounded-full text-lg font-bold hover:bg-primary-red hover:text-white transition-all">
              View Menu
            </button>
          </div>
          
          <div className="flex items-center gap-3 mt-12 bg-white/40 backdrop-blur-sm self-start px-4 py-2 rounded-full border border-primary-red/10">
            <span className="bg-primary-red text-white px-2 py-1 rounded-md text-[10px] font-extrabold">NEW</span>
            <span className="text-sm font-semibold text-text-dark/80">Join Chick-fil-A One® to start earning points.</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative hidden lg:flex justify-center items-center"
        >
          <div className="w-[500px] h-[500px] rounded-full hero-gradient shadow-inner flex items-center justify-center p-12">
            <img 
              src="https://images.unsplash.com/photo-1626082896592-1c6460f789d2?q=80&w=1740&auto=format&fit=crop" 
              alt="Chick-fil-A Spicy Deluxe" 
              className="w-130 max-w-none transform rotate-12 drop-shadow-[0_30px_50px_rgba(0,0,0,0.25)]"
              referrerPolicy="no-referrer"
            />
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="absolute bottom-4 -right-12 bg-white p-6 rounded-2xl shadow-xl w-60 border border-black/5"
          >
            <div className="text-[10px] text-primary-red font-black uppercase tracking-widest mb-1">Fan Favorite</div>
            <div className="font-extrabold text-xl mb-1 tracking-tight">Spicy Deluxe Sandwich</div>
            <div className="font-bold text-text-gray mb-3">$5.85</div>
            <div className="h-px bg-warm-cream mb-3"></div>
            <div className="flex justify-between items-center">
              <span className="text-xs font-bold">Customize</span>
              <span className="text-2xl font-black text-primary-red leading-none">+</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const TrustBar = () => {
  const trustPoints = [
    "200M+ Meals Served",
    "#1 Customer Satisfaction",
    "Closed Sundays — Because We Value Rest",
    "Fresh, Never Frozen Chicken",
    "Over 2,800 Locations"
  ];

  return (
    <div className="bg-white border-b border-warm-cream py-6 overflow-hidden">
      <div className="flex whitespace-nowrap">
        <motion.div 
          animate={{ x: [0, -1000] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="flex space-x-16 items-center px-12"
        >
          {[...trustPoints, ...trustPoints, ...trustPoints].map((point, i) => (
            <span key={i} className="text-text-gray font-black uppercase tracking-[0.2em] text-xs md:text-sm flex items-center">
              <span className="w-2 h-2 bg-primary-red rounded-full mr-4"></span>
              {point}
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

const MenuCard = ({ name, description, price, image, delay }: any) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      whileHover={{ y: -12 }}
      className="bg-white rounded-radius-card overflow-hidden shadow-premium hover:shadow-2xl transition-all border border-transparent hover:border-primary-red/20 group flex flex-col"
    >
      <div className="h-64 overflow-hidden relative">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-4 right-4 bg-white/95 backdrop-blur px-4 py-2 rounded-full font-black text-primary-red shadow-lg border border-primary-red/10 italic">
          {price}
        </div>
      </div>
      <div className="p-8 flex flex-col flex-grow">
        <h3 className="text-2xl font-black text-text-dark mb-3 font-display tracking-tight leading-tight">{name}</h3>
        <p className="text-text-gray text-sm mb-8 line-clamp-3 leading-relaxed font-medium">{description}</p>
        <div className="mt-auto">
          <button className="w-full bg-warm-cream text-primary-red font-black py-4 rounded-full uppercase tracking-widest text-xs hover:bg-primary-red hover:text-white transition-all transform hover:scale-[1.02] active:scale-[0.98] flex justify-center items-center shadow-sm">
            Add To Order <ChevronRight size={16} className="ml-2" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

const FeaturedMenu = () => {
  const items = [
    {
      name: "Classic Chicken Sandwich",
      description: "A boneless breast of chicken seasoned to perfection, freshly breaded, pressure cooked in 100% refined peanut oil and served on a toasted, buttered bun with dill pickle chips.",
      price: "$4.99",
      image: "https://images.unsplash.com/photo-1603903631889-b5f3ba4d5b9b?q=80&w=2069&auto=format&fit=crop"
    },
    {
      name: "Spicy Deluxe Sandwich",
      description: "A boneless breast of chicken seasoned with a spicy blend of peppers, freshly breaded, served on a toasted, buttered bun with dill pickle chips, Green Leaf lettuce, tomato and Pepper Jack Cheese.",
      price: "$5.85",
      image: "https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=2065&auto=format&fit=crop"
    },
    {
      name: "Chick-fil-A® Nuggets",
      description: "Bite-sized pieces of boneless chicken breast, seasoned to perfection, freshly breaded and pressure cooked in 100% refined peanut oil.",
      price: "$4.45",
      image: "https://images.unsplash.com/photo-1562967914-6c8273932884?q=80&w=2070&auto=format&fit=crop"
    },
    {
      name: "Waffle Potato Fries®",
      description: "Waffle-cut potatoes cooked in canola oil until crispy outside and tender inside. Canola oil with sea salt.",
      price: "$2.35",
      image: "https://images.unsplash.com/photo-1630384061514-be7430030588?q=80&w=2073&auto=format&fit=crop"
    },
    {
      name: "Peach Milkshake",
      description: "Available for a limited time! Hand-spun with our signature Icedream® dessert and real peaches.",
      price: "$4.25",
      image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?q=80&w=1974&auto=format&fit=crop"
    },
    {
      name: "Cobb Salad",
      description: "Chick-fil-A® Nuggets, pressure-cooked, sliced and served on a fresh bed of mixed greens, topped with roasted corn kernels, shredded Monterey Jack and Cheddar cheeses.",
      price: "$8.99",
      image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2070&auto=format&fit=crop"
    }
  ];

  return (
    <section id="menu" className="py-32 bg-warm-cream">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-20">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-primary-red font-black uppercase tracking-[0.3em] text-xs mb-4 italic"
          >
            Explore Our Menu
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-6xl md:text-8xl font-black text-text-dark mb-6 tracking-tighter"
          >
            Fan <span className="font-display italic text-primary-red">Favorites</span>
          </motion.h2>
          <div className="w-24 h-1.5 bg-primary-red mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {items.map((item, index) => (
            <MenuCard key={item.name} {...item} delay={index * 0.1} />
          ))}
        </div>

        <div className="mt-20 text-center">
            <button className="bg-primary-red text-white px-12 py-5 rounded-full font-black uppercase tracking-widest text-sm hover:bg-dark-red transition-all shadow-2xl hover:scale-105 active:scale-95">
                View Full Menu
            </button>
        </div>
      </div>
    </section>
  );
};

const Rewards = () => {
    return (
        <section id="rewards" className="py-32 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-20">
                <motion.div 
                    initial={{ opacity: 0, x: -60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="md:w-1/2 relative"
                >
                    <div className="absolute -top-12 -left-12 w-60 h-60 bg-primary-red/10 rounded-full blur-[100px]"></div>
                    <img 
                      src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1974&auto=format&fit=crop" 
                      alt="Chick-fil-A Rewards" 
                      className="rounded-[2.5rem] shadow-[0_32px_64px_rgba(229,22,54,0.15)] relative z-10 w-full"
                      referrerPolicy="no-referrer"
                    />
                </motion.div>
                <motion.div 
                    initial={{ opacity: 0, x: 60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="md:w-1/2"
                >
                    <motion.p 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-primary-red font-black uppercase tracking-[0.2em] text-xs mb-4 italic"
                    >
                        Member Benefits
                    </motion.p>
                    <h2 className="text-6xl md:text-[80px] font-extrabold mb-8 leading-[0.95] tracking-tighter">Every Bite <br/>Earns You <span className="text-primary-red font-display italic font-black">More</span></h2>
                    <p className="text-text-gray text-lg mb-10 leading-relaxed font-medium">
                        Join Chick-fil-A One® to start earning points for every dollar you spend. Redeem your points for rewards, receive special surprises on your birthday, and enjoy a faster ordering experience.
                    </p>
                    
                    <div className="space-y-8 mb-12">
                        {[
                            { icon: <Star className="text-primary-red" size={24} />, title: "Earn Points", text: "Receive points for every dollar you spend in-store or on the app." },
                            { icon: <Heart className="text-primary-red" size={24} />, title: "Redeem Rewards", text: "Use your points to get your favorite menu items for free." },
                            { icon: <ChevronRight className="text-primary-red" size={24} />, title: "Get Surprises", text: "Enjoy a special rewards for your birthday and seasonal bonus periods." }
                        ].map((point, i) => (
                            <div key={i} className="flex items-start group">
                                <div className="bg-primary-red/10 p-4 rounded-2xl mr-6 group-hover:bg-primary-red group-hover:text-white transition-all duration-300">
                                    {point.icon}
                                </div>
                                <div>
                                    <h4 className="font-black text-xl mb-2 tracking-tight">{point.title}</h4>
                                    <p className="text-text-gray font-medium leading-normal">{point.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    
                    <button className="bg-primary-red text-white px-12 py-5 rounded-full font-black uppercase tracking-widest text-sm hover:bg-dark-red transition-all shadow-2xl hover:scale-105 active:scale-95 shadow-primary-red/20">
                        Join Chick-fil-A One® Free
                    </button>
                </motion.div>
            </div>
        </section>
    );
};

const WhyUs = () => {
    const features = [
        { icon: <Leaf size={40} />, title: "Fresh Ingredients", text: "Real produce, delivered fresh daily to our kitchens." },
        { icon: <Heart size={40} />, title: "Hand-Breaded", text: "Our chicken is pressure cooked in 100% refined peanut oil." },
        { icon: <MapPin size={40} />, title: "Genuine Hospitality", text: "Serving our communities with a smile and a 'my pleasure'." },
        { icon: <Star size={40} />, title: "Community Focus", text: "We invest back into local neighborhoods across America." }
    ];

    return (
        <section className="py-32 bg-warm-cream">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16 text-center">
                    {features.map((f, i) => (
                        <motion.div 
                            key={i}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, type: 'spring' }}
                            className="group"
                        >
                            <div className="bg-white w-24 h-24 rounded-[2rem] shadow-premium flex items-center justify-center mx-auto mb-8 text-primary-red group-hover:bg-primary-red group-hover:text-white transition-all duration-500 transform group-hover:rotate-6">
                                {f.icon}
                            </div>
                            <h3 className="text-2xl font-black mb-4 tracking-tight">{f.title}</h3>
                            <p className="text-text-gray font-medium leading-relaxed px-4">{f.text}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const Catering = () => {
    return (
        <section id="catering" className="py-24 relative overflow-hidden bg-primary-red">
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle, white 1.5px, transparent 1.5px)', backgroundSize: '40px 40px' }}></div>
            </div>
            
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 100, repeat: Infinity, ease: 'linear' }}
              className="absolute -top-40 -right-40 w-80 h-80 border-white/10 border-[60px] rounded-full"
            ></motion.div>

            <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-5xl md:text-8xl font-black text-white font-display mb-8 tracking-tighter leading-[0.85]">Feeding a Crowd? <br/>We've Got You.</h2>
                    <p className="text-white/90 text-xl md:text-2xl max-w-3xl mx-auto mb-12 font-black italic tracking-wide uppercase">
                        From office lunches to weddings — Chick-fil-A caters it all. Your favorites, in party size.
                    </p>
                    <button className="bg-white text-primary-red px-14 py-6 rounded-full font-black text-xl hover:bg-warm-cream transition-all shadow-[0_20px_50px_rgba(0,0,0,0.2)] hover:scale-105 active:scale-95 uppercase tracking-widest underline decoration-transparent hover:decoration-primary-red/30 underline-offset-8">
                        Explore Catering Options
                    </button>
                    <p className="mt-8 text-white/60 text-sm font-bold uppercase tracking-widest italic">Order 24 hours in advance for best service</p>
                </motion.div>
            </div>
        </section>
    );
};

const Testimonials = () => {
    const reviews = [
        { name: "Sarah Jenkins", city: "Atlanta, GA", text: "The service is always top-notch, and that spicy sandwich never misses! Every bite is as good as the first one.", rating: 5 },
        { name: "Michael Davenport", city: "Dallas, TX", text: "Chick-fil-A is my go-to for family dinner. Efficient, clean, and delicious. My kids literally beg for those nuggets every Friday.", rating: 5 },
        { name: "Jessica Ramirez", city: "Chicago, IL", text: "Love the app rewards! Just got my free shake today. The hospitality here genuinely makes my day better.", rating: 5 },
        { name: "David Lawson", city: "Phoenix, AZ", text: "The waffle fries are iconic. No other fast food place comes close to the quality and consistency here. Worth every penny.", rating: 5 },
        { name: "Emily Kim", city: "Orlando, FL", text: "Always greeted with a smile and a warm 'My Pleasure'. It's refreshing to see such genuine care in a fast-food environment.", rating: 5 }
    ];

    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % reviews.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [reviews.length]);

    return (
        <section className="py-32 bg-white flex flex-col items-center overflow-hidden">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="mb-16 text-center"
            >
                <div className="inline-block px-4 py-1 bg-primary-red/5 rounded-full mb-4">
                    <span className="text-primary-red font-black uppercase tracking-[0.3em] text-[10px] md:text-xs italic">What our guests are saying</span>
                </div>
                <h2 className="text-4xl font-black uppercase tracking-widest text-text-dark font-display">A Heritage of Hospitality</h2>
            </motion.div>
            
            <div className="max-w-5xl w-full px-4 relative flex flex-col items-center">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeIndex}
                        initial={{ opacity: 0, scale: 0.95, x: 20 }}
                        animate={{ opacity: 1, scale: 1, x: 0 }}
                        exit={{ opacity: 0, scale: 1.05, x: -20 }}
                        transition={{ duration: 0.6, ease: 'circOut' }}
                        className="text-center px-4 md:px-12"
                    >
                        <div className="flex justify-center mb-10">
                            {[...Array(reviews[activeIndex].rating)].map((_, i) => (
                                <Star key={i} className="text-yellow-400 fill-yellow-400 mx-1.5 drop-shadow-md" size={28} />
                            ))}
                        </div>
                        <p className="text-3xl md:text-5xl font-display font-medium italic text-text-dark mb-10 leading-[1.1] tracking-tight">
                            "{reviews[activeIndex].text}"
                        </p>
                        <div className="flex flex-col items-center">
                            <p className="font-black text-primary-red text-2xl uppercase tracking-tighter italic">{reviews[activeIndex].name}</p>
                            <div className="w-10 h-0.5 bg-primary-red/20 my-3"></div>
                            <p className="text-text-gray uppercase tracking-[0.3em] font-bold text-xs">{reviews[activeIndex].city}</p>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
            
            <div className="flex mt-16 space-x-4">
                {reviews.map((_, i) => (
                    <button 
                        key={i} 
                        onClick={() => setActiveIndex(i)}
                        className={`transition-all duration-500 h-2 rounded-full ${activeIndex === i ? 'bg-primary-red w-12' : 'bg-primary-red/10 hover:bg-primary-red/30 w-3'}`}
                    />
                ))}
            </div>
        </section>
    );
};

const LocationFinder = () => {
    return (
        <section id="locations" className="py-32 bg-warm-cream">
            <div className="max-w-7xl mx-auto px-4">
                <div className="bg-white rounded-[3rem] shadow-[0_40px_100px_rgba(0,0,0,0.08)] overflow-hidden flex flex-col lg:row-reverse lg:flex-row border border-white/20">
                    <div className="lg:w-1/2 p-10 md:p-20">
                        <motion.h2 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="text-5xl font-black mb-8 tracking-tighter leading-none"
                        >
                            Find a Chick-fil-A <br/><span className="text-primary-red italic">Near You</span>
                        </motion.h2>
                        <div className="relative mb-12">
                            <input 
                                type="text" 
                                placeholder="Enter zip code or city..." 
                                className="w-full bg-warm-cream/50 border-3 border-transparent focus:border-primary-red focus:bg-white transition-all rounded-full py-6 px-16 text-xl outline-none font-bold placeholder:text-text-gray/50"
                            />
                            <MapPin className="absolute left-6 top-1/2 -translate-y-1/2 text-primary-red" size={24} />
                            <button className="absolute right-3 top-3 h-[calc(100%-1.5rem)] px-8 bg-primary-red text-white rounded-full font-black uppercase tracking-widest text-xs hover:bg-dark-red transition-all shadow-lg hover:scale-105 active:scale-95">
                                Search Nearby
                            </button>
                        </div>
                        
                        <div className="space-y-6">
                            {[
                                { name: "Maple Street Commons", dist: "1.2 miles", status: "Open until 10:00 PM" },
                                { name: "Highland Park North", dist: "3.5 miles", status: "Open until 10:00 PM" },
                                { name: "Downtown Grand Plaza", dist: "4.8 miles", status: "Open until 11:00 PM" }
                            ].map((loc, i) => (
                                <motion.div 
                                    key={i} 
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="flex justify-between items-center p-8 bg-warm-cream/30 rounded-[2rem] hover:bg-white hover:shadow-2xl transition-all border border-transparent hover:border-primary-red/10 cursor-pointer group"
                                >
                                    <div>
                                        <h4 className="font-black text-2xl mb-1 tracking-tight group-hover:text-primary-red transition-colors">{loc.name}</h4>
                                        <p className="text-text-gray font-bold text-sm mb-2">{loc.dist}</p>
                                        <div className="flex items-center">
                                            <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                                            <p className="text-green-600 font-black text-[10px] uppercase tracking-[0.2em]">{loc.status}</p>
                                        </div>
                                    </div>
                                    <div className="text-primary-red font-black underline text-xs uppercase tracking-widest italic decoration-2 decoration-primary-red/20 underline-offset-4 group-hover:underline-offset-8 transition-all">Get Directions</div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                    <div className="lg:w-1/2 bg-text-dark/5 h-[600px] lg:h-auto relative group overflow-hidden">
                        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2074&auto=format&fit=crop')] bg-cover bg-center opacity-90 grayscale-[20%] group-hover:scale-110 group-hover:grayscale-0 transition-all duration-1000"></div>
                        <div className="absolute inset-0 bg-primary-red/10 mix-blend-multiply transition-opacity group-hover:opacity-0"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <motion.div
                                animate={{ y: [0, -15, 0] }}
                                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                                className="bg-white/95 backdrop-blur-xl p-8 rounded-[3rem] shadow-[0_40px_80px_rgba(229,22,54,0.3)] flex flex-col items-center border border-primary-red/10"
                            >
                                <div className="bg-primary-red p-4 rounded-full mb-4 shadow-lg">
                                    <MapPin className="text-white" size={36} />
                                </div>
                                <span className="font-black text-text-dark uppercase tracking-widest text-sm mb-1 italic">You are here</span>
                                <span className="font-display font-medium text-primary-red text-2xl tracking-tighter">Chick-fil-A Maple</span>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const Footer = () => {
    return (
        <footer className="bg-white border-t-[12px] border-primary-red pt-24 pb-12">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
                    <div className="lg:col-span-1">
                        <span className="text-4xl font-black font-display text-primary-red block mb-8 tracking-tighter leading-none">Chick-fil-A</span>
                        <p className="text-text-gray font-bold text-lg leading-relaxed mb-10 italic pr-4">
                            "We Didn't Invent the Chicken, Just the Chicken Sandwich."
                        </p>
                        <div className="flex space-x-5">
                            {[Instagram, Twitter, Facebook, Youtube].map((Icon, i) => (
                                <a key={i} href="#" className="w-12 h-12 rounded-2xl bg-warm-cream/50 flex items-center justify-center text-text-dark hover:bg-primary-red hover:text-white transition-all transform hover:-translate-y-1 hover:rotate-6 shadow-sm">
                                    <Icon size={22} />
                                </a>
                            ))}
                        </div>
                    </div>
                    
                    {[
                        { title: "Menu", links: ["Breakfast", "Sandwiches", "Salads", "Sides", "Treats", "Beverages", "Dips & Sauces"] },
                        { title: "Company", links: ["About Us", "History", "Founding Family", "Quality First", "Sustainability", "Chick-fil-A Foundation"] },
                        { title: "Connect", links: ["Customer Service", "Find a Location", "Order Catering", "Gift Cards", "Merchandise", "Careers"] }
                    ].map((group, i) => (
                        <div key={i}>
                            <h4 className="font-black text-xl mb-8 uppercase tracking-[0.2em] text-text-dark italic">{group.title}</h4>
                            <ul className="space-y-5">
                                {group.links.map(link => (
                                    <li key={link}>
                                        <a href="#" className="text-text-gray hover:text-primary-red transition-all font-bold text-sm uppercase tracking-wider block hover:translate-x-1 underline decoration-transparent hover:decoration-primary-red/20 underline-offset-4">{link}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
                
                <div className="pt-12 border-t border-warm-cream flex flex-col md:flex-row justify-between items-center text-[10px] md:text-xs text-text-gray font-black uppercase tracking-[0.3em]">
                    <p>© 2026 Chick-fil-A, Inc. All rights reserved.</p>
                    <div className="flex space-x-8 mt-8 md:mt-0 italic">
                        <a href="#" className="hover:text-primary-red transition-colors decoration-slice">Privacy Policy</a>
                        <a href="#" className="hover:text-primary-red transition-colors">Terms of Use</a>
                        <a href="#" className="hover:text-primary-red transition-colors">Accessibility</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

// --- Main App Export ---

export default function App() {
  return (
    <main className="font-sans antialiased text-text-dark">
      <Navbar />
      <Hero />
      <TrustBar />
      <FeaturedMenu />
      <Rewards />
      <WhyUs />
      <Catering />
      <Testimonials />
      <LocationFinder />
      <Footer />
    </main>
  );
}
