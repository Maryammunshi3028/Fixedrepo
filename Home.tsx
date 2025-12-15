import { motion, useScroll, useTransform } from 'motion/react';
import { useRef, useState } from 'react';
import {
  TrendingUp,
  Shield,
  Users,
  ArrowRight,
  CheckCircle,
  Star,
  Sparkles,
  Award,
  Lock,
  BarChart3,
  X,
  DollarSign,
  Building2,
  LineChart,
  Target,
  Zap,
  Globe,
  Brain,
  Wallet,
  Rocket,
} from 'lucide-react';
import mobileScreenImage from 'figma:asset/49d1c5c254906dd0fb5f62845e7fdaf87c1a95d9.png';
import { FeatureModal } from './FeatureModal';
import { PricingModal } from './PricingModal';

export function Home() {
  const [selectedFeature, setSelectedFeature] = useState<{ title: string; content: string } | null>(null);
  const [showPricingModal, setShowPricingModal] = useState(false);
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  const features = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Sharia-Compliant',
      description: 'All investments vetted and certified by our Sharia board',
      image: 'https://images.unsplash.com/photo-1591696331111-ef9586a5b17a?w=800&q=80',
      gradient: 'from-emerald-500 to-teal-600',
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Community-Focused',
      description: 'Built for middle-class GCC investors',
      image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&q=80',
      gradient: 'from-blue-500 to-cyan-600',
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Fractional Investing',
      description: 'Start with as little as $250',
      image: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&q=80',
      gradient: 'from-purple-500 to-pink-600',
    },
  ];

  const testimonials = [
    {
      name: 'Ahmed Al-Mansoori',
      location: 'Dubai, UAE',
      text: 'Tharwa Capital made investing accessible and ethical. Started small, now have a growing portfolio.',
      rating: 5,
      avatar: 'AM',
    },
    {
      name: 'Fatima Al-Rashid',
      location: 'Riyadh, KSA',
      text: 'Finally, a platform that aligns with my values. The transparency is incredible.',
      rating: 5,
      avatar: 'FA',
    },
    {
      name: 'Omar Al-Khalifa',
      location: 'Doha, Qatar',
      text: 'The fractional investment feature is a game-changer for diversification.',
      rating: 5,
      avatar: 'OK',
    },
  ];

  const stats = [
    { value: 'Social Investing', label: 'Community pools for collective growth', icon: <Users className="w-6 h-6" /> },
    { value: 'Micro-savings', label: 'Goal-based investing for everyone', icon: <Target className="w-6 h-6" /> },
    { value: 'AI Advisory', label: 'Halal portfolio guidance', icon: <Brain className="w-6 h-6" /> },
    { value: 'Fractional Pools', label: 'Sukuk, ETFs, tokenized property', icon: <Wallet className="w-6 h-6" /> },
    { value: 'Sharia Certified', label: 'Full compliance guarantee', icon: <Shield className="w-6 h-6" /> },
    { value: 'Portfolio Tracking', label: 'Real-time performance dashboard', icon: <BarChart3 className="w-6 h-6" /> },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Hero Section - Modern, Bold */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-[#1a1a2e] to-gray-900 overflow-hidden"
      >
        {/* Animated Background */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-1/4 -left-20 w-96 h-96 bg-[#4FAEFF] rounded-full blur-[120px] opacity-20"
            animate={{
              x: [0, 100, 0],
              y: [0, 50, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
          <motion.div
            className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-[#A6D1FF] rounded-full blur-[120px] opacity-20"
            animate={{
              x: [0, -100, 0],
              y: [0, -50, 0],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
          
          {/* Animated Wave Backgrounds */}
          <svg
            className="absolute inset-0 w-full h-full opacity-10"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
          >
            <motion.path
              fill="#4FAEFF"
              fillOpacity="0.3"
              d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,213.3C672,192,768,128,864,128C960,128,1056,192,1152,197.3C1248,203,1344,149,1392,122.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              animate={{
                d: [
                  "M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,213.3C672,192,768,128,864,128C960,128,1056,192,1152,197.3C1248,203,1344,149,1392,122.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
                  "M0,160L48,176C96,192,192,224,288,224C384,224,480,192,576,165.3C672,139,768,117,864,128C960,139,1056,181,1152,181.3C1248,181,1344,139,1392,117.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
                  "M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,213.3C672,192,768,128,864,128C960,128,1056,192,1152,197.3C1248,203,1344,149,1392,122.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
                ],
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          </svg>
          
          <svg
            className="absolute inset-0 w-full h-full opacity-10"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
            style={{ transform: 'translateY(20%)' }}
          >
            <motion.path
              fill="#A6D1FF"
              fillOpacity="0.3"
              d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,208C672,213,768,203,864,170.7C960,139,1056,85,1152,80C1248,75,1344,117,1392,138.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              animate={{
                d: [
                  "M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,208C672,213,768,203,864,170.7C960,139,1056,85,1152,80C1248,75,1344,117,1392,138.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
                  "M0,192L48,181.3C96,171,192,149,288,154.7C384,160,480,192,576,197.3C672,203,768,181,864,154.7C960,128,1056,96,1152,101.3C1248,107,1344,149,1392,170.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
                  "M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,208C672,213,768,203,864,170.7C960,139,1056,85,1152,80C1248,75,1344,117,1392,138.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
                ],
              }}
              transition={{
                duration: 18,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 1,
              }}
            />
          </svg>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              style={{ y, opacity }}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-orange-500/20 backdrop-blur-xl border border-orange-400/30 rounded-full mb-8"
              >
                <Rocket className="w-5 h-5 text-orange-400" />
                <span className="text-sm text-orange-200">
                  Acceleration Phase • Not Yet Fully Launched
                </span>
              </motion.div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl text-white mb-6 tracking-tight leading-tight">
                Ethical investing,
                <br />
                <span className="bg-gradient-to-r from-[#A6D1FF] via-[#4FAEFF] to-[#A6D1FF] bg-clip-text text-transparent">
                  made accessible
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-gray-300 mb-12 leading-relaxed">
                Join a community of middle-class investors building wealth through
                Sharia-compliant, fractional investments
              </p>

              <div className="flex flex-col sm:flex-row gap-6 mb-16">
                <motion.button
                  onClick={() => setShowPricingModal(true)}
                  whileHover={{ scale: 1.05, boxShadow: '0 20px 60px rgba(79, 174, 255, 0.4)' }}
                  whileTap={{ scale: 0.95 }}
                  className="group px-10 py-5 bg-gradient-to-r from-[#4FAEFF] to-[#A6D1FF] text-white text-lg rounded-2xl flex items-center justify-center gap-3 shadow-2xl"
                >
                  Get Started
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-5 bg-white/10 backdrop-blur-xl border-2 border-white/20 text-white text-lg rounded-2xl hover:bg-white/20 transition-all"
                >
                  Download App
                </motion.button>
              </div>
            </motion.div>

            {/* Right - Mobile Frame */}
            <motion.div
              initial={{ opacity: 0, x: 30, rotateY: -15 }}
              animate={{ opacity: 1, x: 0, rotateY: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="relative hidden lg:flex justify-center items-center"
            >
              {/* Phone Frame */}
              <div className="relative">
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#4FAEFF] to-[#A6D1FF] rounded-[3rem] blur-2xl opacity-30 scale-105" />
                
                {/* Phone Container */}
                <motion.div
                  whileHover={{ scale: 1.05, rotateY: 5 }}
                  transition={{ duration: 0.3 }}
                  className="relative bg-gray-900 rounded-[3rem] p-3 shadow-2xl border-8 border-gray-800"
                  style={{ width: '320px', height: '650px' }}
                >
                  {/* Notch */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-7 bg-gray-900 rounded-b-3xl z-10" />
                  
                  {/* Screen */}
                  <div className="relative w-full h-full bg-white rounded-[2.5rem] overflow-hidden">
                    <img
                      src={mobileScreenImage}
                      alt="Tharwa Capital Mobile App"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Buttons */}
                  <div className="absolute -right-1 top-24 w-1 h-12 bg-gray-800 rounded-l" />
                  <div className="absolute -right-1 top-40 w-1 h-16 bg-gray-800 rounded-l" />
                  <div className="absolute -left-1 top-32 w-1 h-10 bg-gray-800 rounded-r" />
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Stats Cards - Below Hero Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-20"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + index * 0.1 }}
                whileHover={{
                  y: -10,
                  rotateY: 10,
                  boxShadow: '0 20px 60px rgba(79, 174, 255, 0.3)',
                }}
                className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 text-left"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-[#4FAEFF] to-[#A6D1FF] rounded-xl flex items-center justify-center text-white mb-4">
                  {stat.icon}
                </div>
                <div className="text-4xl text-white mb-2">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-white/50 rounded-full"
            />
          </div>
        </motion.div>
      </section>

      {/* Features Section - Vibrant Cards with Images */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                whileHover={{
                  y: -20,
                  scale: 1.02,
                  boxShadow: '0 30px 80px rgba(79, 174, 255, 0.3)',
                }}
                className="group bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100 relative"
              >
                {/* Image Header */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-60 mix-blend-multiply`} />
                  
                  {/* Icon Overlay */}
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className="absolute top-6 left-6 w-16 h-16 bg-white/20 backdrop-blur-xl rounded-2xl flex items-center justify-center text-white shadow-2xl border border-white/30"
                  >
                    {feature.icon}
                  </motion.div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="text-2xl text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-lg text-gray-600 leading-relaxed mb-6">{feature.description}</p>
                  
                  <motion.button
                    whileHover={{ x: 5 }}
                    className="text-[#4FAEFF] flex items-center gap-2 group/btn"
                    onClick={() => setSelectedFeature({ title: feature.title, content: feature.description })}
                  >
                    Learn More
                    <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                  </motion.button>
                </div>

                {/* Decorative Element */}
                <div className={`absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl ${feature.gradient} opacity-10 rounded-tl-full`} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works - Visual Flow */}
      <section className="py-32 bg-gradient-to-br from-gray-50 to-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl sm:text-6xl lg:text-7xl text-gray-900 mb-6 tracking-tight">
              Start investing in
              <br />
              <span className="bg-gradient-to-r from-[#4FAEFF] to-[#A6D1FF] bg-clip-text text-transparent">
                3 simple steps
              </span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-12 relative">
            {/* Connection Lines */}
            <div className="hidden md:block absolute top-1/4 left-0 right-0 h-0.5 bg-gradient-to-r from-[#4FAEFF] via-[#A6D1FF] to-[#4FAEFF] opacity-20" />

            {[
              {
                step: '01',
                title: 'Create Account',
                description: 'Sign up in minutes with secure KYC verification',
              },
              {
                step: '02',
                title: 'Browse Opportunities',
                description: 'Explore vetted, Sharia-compliant investments',
              },
              {
                step: '03',
                title: 'Start Investing',
                description: 'Invest from $250 and track your growth',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative text-center"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  className="relative mb-8"
                >
                  <div className="text-[120px] bg-gradient-to-r from-[#4FAEFF] to-[#A6D1FF] bg-clip-text text-transparent opacity-10 leading-none">
                    {item.step}
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 bg-gradient-to-r from-[#4FAEFF] to-[#A6D1FF] rounded-2xl shadow-2xl" />
                  </div>
                </motion.div>
                <h3 className="text-2xl text-gray-900 mb-4">{item.title}</h3>
                <p className="text-lg text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials - Modern Cards */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl sm:text-6xl lg:text-7xl text-gray-900 mb-6 tracking-tight">
              Trusted by investors
              <br />
              <span className="bg-gradient-to-r from-[#4FAEFF] to-[#A6D1FF] bg-clip-text text-transparent">
                like you
              </span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                whileHover={{ y: -10, boxShadow: '0 30px 80px rgba(0,0,0,0.1)' }}
                className="bg-white rounded-3xl p-8 border border-gray-200 shadow-lg"
              >
                <div className="flex gap-2 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-lg text-gray-700 mb-8 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#4FAEFF] to-[#A6D1FF] rounded-full flex items-center justify-center text-white">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.location}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Waitlist Section */}
      <section className="py-32 bg-gradient-to-br from-white to-gray-50 relative overflow-hidden">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-block px-4 py-2 bg-[#4FAEFF]/10 rounded-full mb-6">
              <span className="text-sm text-[#4FAEFF] uppercase tracking-wider">Join Early Access</span>
            </div>
            <h2 className="text-4xl sm:text-5xl text-gray-900 mb-6 tracking-tight">
              Add yourself to our
              <br />
              <span className="bg-gradient-to-r from-[#4FAEFF] to-[#A6D1FF] bg-clip-text text-transparent">
                waitlist
              </span>
            </h2>
            <p className="text-lg text-gray-600 mb-12">
              Be among the first to access our platform when we launch. Get exclusive early bird benefits!
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-3xl shadow-2xl border border-gray-100 p-8 md:p-12"
          >
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm text-gray-700 mb-2">Full Name</label>
                  <input
                    type="text"
                    placeholder="Ahmed Al-Mansoori"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#4FAEFF] focus:border-transparent transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-700 mb-2">Email Address</label>
                  <input
                    type="email"
                    placeholder="ahmed@example.com"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#4FAEFF] focus:border-transparent transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm text-gray-700 mb-2">Country</label>
                <select className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#4FAEFF] focus:border-transparent transition-all">
                  <option>Select your country</option>
                  <option>UAE</option>
                  <option>Saudi Arabia</option>
                  <option>Qatar</option>
                  <option>Kuwait</option>
                  <option>Bahrain</option>
                  <option>Oman</option>
                </select>
              </div>

              <div>
                <label className="block text-sm text-gray-700 mb-2">Investment Interest (Optional)</label>
                <textarea
                  placeholder="Tell us what types of investments you're interested in..."
                  rows={4}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#4FAEFF] focus:border-transparent transition-all resize-none"
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02, boxShadow: '0 20px 60px rgba(79, 174, 255, 0.3)' }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 bg-gradient-to-r from-[#4FAEFF] to-[#A6D1FF] text-white text-lg rounded-xl flex items-center justify-center gap-3 shadow-xl group"
              >
                Join Waitlist
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>

              <p className="text-sm text-gray-500 text-center">
                🔒 Your information is secure and will never be shared
              </p>
            </form>
          </motion.div>
        </div>
      </section>

      {/* CTA Section - Bold */}
      <section className="py-32 bg-gradient-to-br from-gray-900 via-[#1a1a2e] to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-0 left-1/4 w-96 h-96 bg-[#4FAEFF] rounded-full blur-[120px] opacity-20"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.3, 0.2],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl sm:text-6xl lg:text-7xl text-white mb-8 tracking-tight">
              Ready to start your
              <br />
              <span className="bg-gradient-to-r from-[#A6D1FF] to-[#4FAEFF] bg-clip-text text-transparent">
                investment journey?
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Join thousands of investors building wealth the ethical way
            </p>
            <motion.button
              onClick={() => setShowPricingModal(true)}
              whileHover={{ scale: 1.05, boxShadow: '0 20px 60px rgba(79, 174, 255, 0.4)' }}
              whileTap={{ scale: 0.95 }}
              className="group px-10 py-5 bg-gradient-to-r from-[#4FAEFF] to-[#A6D1FF] text-white text-lg rounded-2xl inline-flex items-center gap-3 shadow-2xl"
            >
              Get Started Today
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Feature Modal */}
      <FeatureModal 
        isOpen={selectedFeature !== null}
        onClose={() => setSelectedFeature(null)}
        feature={selectedFeature}
      />

      {/* Pricing Modal */}
      <PricingModal
        isOpen={showPricingModal}
        onClose={() => setShowPricingModal(false)}
      />
    </div>
  );
}