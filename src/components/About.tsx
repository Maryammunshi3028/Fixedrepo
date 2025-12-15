import { motion } from 'motion/react';
import { Target, Eye, Heart, Award, Users, Globe, TrendingUp, Shield, Briefcase, Scale, BarChart, Code, DollarSign, Building2, CheckCircle2, Rocket } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import founderImage from '../assets/d6e489760bee7094d058709977f3ad2051251e86.png';
import shariaAdvisorImage from '../assets/ac24a96a1b5920ec6f9c7be32ffdfc168abaedd5.png';
import businessAnalystImage from '../assets/5f8caf64ef4b3463e5000853feaff0cc7f4d5200.png';
import engineerImage1 from '../assets/ee1013ade33029277d774c9a306bf14696c1bd06.png';
import engineerImage2 from '../assets/d451e6e49c2813b45cbb28596d902e73809e07b6.png';
import engineerImage3 from '../assets/e00a7703f818a3e3f25d26bb2d0f7622bba657fa.png';
import tractionImage from '../assets/5f8caf64ef4b3463e5000853feaff0cc7f4d5200.png';

export function About() {
  const timeline = [
    {
      year: '2020',
      title: 'Foundation',
      description: 'Tharwa Capital founded with vision to democratize ethical investing',
    },
    {
      year: '2021',
      title: 'Launch',
      description: 'Platform launched in UAE, 1,000 investors in first quarter',
    },
    {
      year: '2022',
      title: 'Expansion',
      description: 'Expanded across GCC with 5,000+ active investors',
    },
    {
      year: '2023',
      title: 'Growth',
      description: 'Surpassed $25M managed and 8,000+ investors',
    },
    {
      year: '2024',
      title: 'Innovation',
      description: 'AI-powered recommendations and mobile app launched',
    },
    {
      year: '2025',
      title: 'Today',
      description: 'Advanced Maqasid filtering and real-time impact tracking',
    },
  ];

  const values = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Sharia Compliance',
      description: 'Every investment vetted by our Sharia board',
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Community First',
      description: 'Power of community and collective growth',
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Transparency',
      description: 'Clear communication about risks and returns',
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Excellence',
      description: 'Highest standards in selection and service',
    },
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section - Mission & Vision Widgets */}
      <section className="relative py-24 bg-gradient-to-br from-gray-900 via-[#1a1a2e] to-gray-900 overflow-hidden">
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#4FAEFF] rounded-full blur-[120px] opacity-20"
            animate={{
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#A6D1FF] rounded-full blur-[120px] opacity-20"
            animate={{
              scale: [1.3, 1, 1.3],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto"
          >
            {/* Mission Widget */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              whileHover={{ 
                y: -10,
                boxShadow: '0 30px 80px rgba(79, 174, 255, 0.4)'
              }}
              className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-12 overflow-hidden group"
            >
              {/* Hover Glow Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-[#4FAEFF]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              />
              
              {/* Content */}
              <div className="relative z-10">
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className="inline-block mb-8"
                >
                  <div className="w-20 h-20 bg-gradient-to-r from-[#4FAEFF] to-[#A6D1FF] rounded-2xl flex items-center justify-center">
                    <Target className="w-10 h-10 text-white" />
                  </div>
                </motion.div>
                
                <h1 className="text-5xl sm:text-6xl lg:text-7xl text-white mb-6 tracking-tight">
                  Our
                  <br />
                  <span className="bg-gradient-to-r from-[#A6D1FF] to-[#4FAEFF] bg-clip-text text-transparent">
                    Mission
                  </span>
                </h1>
                
                <p className="text-xl text-gray-300 leading-relaxed">
                  To democratize access to premium, Sharia-compliant investment opportunities for middle-class families across the GCC, enabling sustainable wealth building through ethical means.
                </p>
              </div>
            </motion.div>

            {/* Vision Widget */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              whileHover={{ 
                y: -10,
                boxShadow: '0 30px 80px rgba(166, 209, 255, 0.4)'
              }}
              className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-12 overflow-hidden group"
            >
              {/* Hover Glow Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-[#A6D1FF]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              />
              
              {/* Content */}
              <div className="relative z-10">
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className="inline-block mb-8"
                >
                  <div className="w-20 h-20 bg-gradient-to-r from-[#A6D1FF] to-[#4FAEFF] rounded-2xl flex items-center justify-center">
                    <Eye className="w-10 h-10 text-white" />
                  </div>
                </motion.div>
                
                <h1 className="text-5xl sm:text-6xl lg:text-7xl text-white mb-6 tracking-tight">
                  Our
                  <br />
                  <span className="bg-gradient-to-r from-[#4FAEFF] to-[#A6D1FF] bg-clip-text text-transparent">
                    Vision
                  </span>
                </h1>
                
                <p className="text-xl text-gray-300 leading-relaxed">
                  To become the leading ethical investment platform in MENA, creating a thriving community of investors who grow together while adhering to Islamic principles.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Team - Moved to Top */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <div className="inline-block px-4 py-2 bg-[#4FAEFF]/10 rounded-full mb-6">
              <span className="text-sm text-[#4FAEFF] uppercase tracking-wider">Our Team</span>
            </div>
            <h2 className="text-5xl sm:text-6xl text-gray-900 mb-6 tracking-tight">
              Meet the experts
              <br />
              <span className="bg-gradient-to-r from-[#4FAEFF] to-[#A6D1FF] bg-clip-text text-transparent">
                behind Tharwa
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our diverse team brings decades of combined experience in fintech, Islamic finance, and business strategy
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Founder/CEO */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              whileHover={{ y: -15, boxShadow: '0 30px 80px rgba(79, 174, 255, 0.3)' }}
              className="group bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={founderImage}
                  alt="Maryam Faizan Munshi"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent opacity-60" />
                
                {/* Icon Badge */}
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-r from-[#4FAEFF] to-[#A6D1FF] rounded-xl flex items-center justify-center shadow-2xl border-2 border-white"
                >
                  <Briefcase className="w-6 h-6 text-white" />
                </motion.div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl text-gray-900 mb-1">Maryam Faizan Munshi</h3>
                  <div className="text-base text-[#4FAEFF] mb-1">Founder & CEO</div>
                  <div className="text-xs text-gray-500">5 Years of Experience in Fintech</div>
                </div>
                
                <div className="border-t border-gray-100 pt-4">
                  <h4 className="text-xs uppercase tracking-wider text-gray-500 mb-2">Contribution to Tharwa</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Visionary leadership driving innovation in ethical investing. Pioneered the platform's fractional investment model, making Sharia-compliant opportunities accessible to middle-class investors across the GCC.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Sharia Advisory Lawyer */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              whileHover={{ y: -15, boxShadow: '0 30px 80px rgba(79, 174, 255, 0.3)' }}
              className="group bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={shariaAdvisorImage}
                  alt="Adil Khoualdi"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent opacity-60" />
                
                {/* Icon Badge */}
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center shadow-2xl border-2 border-white"
                >
                  <Scale className="w-6 h-6 text-white" />
                </motion.div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl text-gray-900 mb-1">Adil Khoualdi</h3>
                  <div className="text-base text-emerald-600 mb-1">Sharia Advisory Lawyer</div>
                  <div className="text-xs text-gray-500">17+ Years of Experience</div>
                </div>
                
                <div className="border-t border-gray-100 pt-4">
                  <h4 className="text-xs uppercase tracking-wider text-gray-500 mb-2">Contribution to Tharwa</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Ensures all investment opportunities meet strict Sharia compliance standards. Leads the advisory board that vets every investment, maintaining the highest ethical and religious standards for our community.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Business Analyst */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              whileHover={{ y: -15, boxShadow: '0 30px 80px rgba(79, 174, 255, 0.3)' }}
              className="group bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={businessAnalystImage}
                  alt="Faizan Munshi"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent opacity-60" />
                
                {/* Icon Badge */}
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-2xl border-2 border-white"
                >
                  <BarChart className="w-6 h-6 text-white" />
                </motion.div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl text-gray-900 mb-1">Faizan Munshi</h3>
                  <div className="text-base text-purple-600 mb-1">Senior Business Analyst</div>
                  <div className="text-xs text-gray-500">22+ Years of Experience</div>
                </div>
                
                <div className="border-t border-gray-100 pt-4">
                  <h4 className="text-xs uppercase tracking-wider text-gray-500 mb-2">Contribution to Tharwa</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Provides strategic insights through comprehensive market analysis and risk assessment. Develops data-driven investment strategies that maximize returns while maintaining conservative risk profiles for our investors.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Software Engineer 1 */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              whileHover={{ y: -15, boxShadow: '0 30px 80px rgba(79, 174, 255, 0.3)' }}
              className="group bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={engineerImage1}
                  alt="Senior Software Engineer"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent opacity-60" />
                
                {/* Icon Badge */}
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center shadow-2xl border-2 border-white"
                >
                  <Code className="w-6 h-6 text-white" />
                </motion.div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl text-gray-900 mb-1">Irshad</h3>
                  <div className="text-base text-cyan-600 mb-1">Senior Software Engineer</div>
                  <div className="text-xs text-gray-500">10+ Years of Experience</div>
                </div>
                
                <div className="border-t border-gray-100 pt-4">
                  <h4 className="text-xs uppercase tracking-wider text-gray-500 mb-2">Contribution to Tharwa</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Develops and maintains the platform's core software infrastructure. Ensures high performance, scalability, and security for our investment management system.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Software Engineer 2 */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              whileHover={{ y: -15, boxShadow: '0 30px 80px rgba(79, 174, 255, 0.3)' }}
              className="group bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={engineerImage2}
                  alt="Software Engineer"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent opacity-60" />
                
                {/* Icon Badge */}
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center shadow-2xl border-2 border-white"
                >
                  <Code className="w-6 h-6 text-white" />
                </motion.div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl text-gray-900 mb-1">Saheer KP</h3>
                  <div className="text-base text-cyan-600 mb-1">Frontend Software Engineer</div>
                  <div className="text-xs text-gray-500">8+ Years of Experience</div>
                </div>
                
                <div className="border-t border-gray-100 pt-4">
                  <h4 className="text-xs uppercase tracking-wider text-gray-500 mb-2">Contribution to Tharwa</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Focuses on developing user-friendly interfaces and enhancing the overall user experience. Implements new features and optimizations to improve the platform's functionality and accessibility.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Software Engineer 3 */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              whileHover={{ y: -15, boxShadow: '0 30px 80px rgba(79, 174, 255, 0.3)' }}
              className="group bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={engineerImage3}
                  alt="Backend Software Engineer"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent opacity-60" />
                
                {/* Icon Badge */}
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center shadow-2xl border-2 border-white"
                >
                  <Code className="w-6 h-6 text-white" />
                </motion.div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl text-gray-900 mb-1">Badusha</h3>
                  <div className="text-base text-cyan-600 mb-1">Backend Software Engineer</div>
                  <div className="text-xs text-gray-500">6+ Years of Experience</div>
                </div>
                
                <div className="border-t border-gray-100 pt-4">
                  <h4 className="text-xs uppercase tracking-wider text-gray-500 mb-2">Contribution to Tharwa</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Specializes in developing and maintaining the platform's backend systems. Ensures efficient data processing, storage, and retrieval, supporting the platform's core functionalities.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Traction & Milestones */}
      <section className="py-32 bg-gradient-to-br from-[#1e3a5f] via-[#2d5a8c] to-[#1e3a5f] relative overflow-hidden">
        {/* Background Glow Effects */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-1/3 left-1/4 w-96 h-96 bg-[#4FAEFF] rounded-full blur-[150px] opacity-20"
            animate={{
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
          <motion.div
            className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-[#A6D1FF] rounded-full blur-[150px] opacity-20"
            animate={{
              scale: [1.5, 1, 1.5],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-block px-4 py-2 bg-[#4FAEFF]/20 rounded-full mb-6">
              <span className="text-sm text-[#A6D1FF] uppercase tracking-wider">Our Progress</span>
            </div>
            <h2 className="text-5xl sm:text-6xl text-white mb-6 tracking-tight">
              Traction &
              <br />
              <span className="bg-gradient-to-r from-[#A6D1FF] to-[#4FAEFF] bg-clip-text text-transparent">
                Milestones
              </span>
            </h2>
          </motion.div>

          {/* Key Metrics Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              { icon: <Target className="w-8 h-8" />, value: 'Maqasid', label: 'Filter What Works Best', color: 'from-[#4FAEFF] to-[#A6D1FF]' },
              { icon: <BarChart className="w-8 h-8" />, value: 'Real-Time', label: 'Impact & Risk Tracking', color: 'from-emerald-400 to-teal-500' },
              { icon: <Building2 className="w-8 h-8" />, value: '150+', label: 'Investment Opportunities', color: 'from-purple-400 to-indigo-500' },
              { icon: <TrendingUp className="w-8 h-8" />, value: '15%', label: 'Average Annual Return', color: 'from-orange-400 to-red-500' },
            ].map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, boxShadow: '0 30px 80px rgba(79, 174, 255, 0.3)' }}
                className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 overflow-hidden group"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />
                <div className="relative z-10">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className={`w-14 h-14 bg-gradient-to-r ${metric.color} rounded-xl flex items-center justify-center text-white mb-4`}
                  >
                    {metric.icon}
                  </motion.div>
                  <div className="text-4xl text-white mb-2">{metric.value}</div>
                  <div className="text-sm text-gray-300">{metric.label}</div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Major Milestones */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12"
          >
            <h3 className="text-3xl text-white mb-8 text-center">Major Achievements</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { icon: <CheckCircle2 className="w-6 h-6" />, title: 'Sharia Certification', description: 'Received full Sharia compliance certification from GCC regulatory bodies' },
                { icon: <Rocket className="w-6 h-6" />, title: 'Platform Launch', description: 'Successfully launched web and mobile platforms across 6 GCC countries' },
                { icon: <Award className="w-6 h-6" />, title: 'Industry Recognition', description: 'Won "Best Islamic Fintech Startup" at Dubai FinTech Summit 2024' },
                { icon: <Building2 className="w-6 h-6" />, title: 'Strategic Partnerships', description: 'Working with Qatar Free Trade Hub (QFTH) and Qatar Development Bank (QDB)' },
                { icon: <Users className="w-6 h-6" />, title: 'Community Growth', description: 'Built a thriving community of 10,000+ investors in just 24 months' },
                { icon: <TrendingUp className="w-6 h-6" />, title: 'Revenue Milestone', description: 'Achieved $2M+ in annual recurring revenue' },
              ].map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index }}
                  whileHover={{ scale: 1.03, boxShadow: '0 20px 60px rgba(79, 174, 255, 0.2)' }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 group"
                >
                  <div className="flex items-start gap-4">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className="w-12 h-12 bg-gradient-to-r from-[#4FAEFF] to-[#A6D1FF] rounded-xl flex items-center justify-center text-white flex-shrink-0"
                    >
                      {achievement.icon}
                    </motion.div>
                    <div>
                      <h4 className="text-lg text-white mb-2">{achievement.title}</h4>
                      <p className="text-sm text-gray-300 leading-relaxed">{achievement.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-32 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <div className="inline-block px-4 py-2 bg-[#4FAEFF]/10 rounded-full mb-6">
              <span className="text-sm text-[#4FAEFF] uppercase tracking-wider">Our Values</span>
            </div>
            <h2 className="text-5xl sm:text-6xl text-gray-900 mb-6 tracking-tight">
              Principles that
              <br />
              <span className="bg-gradient-to-r from-[#4FAEFF] to-[#A6D1FF] bg-clip-text text-transparent">
                guide everything
              </span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -15, boxShadow: '0 30px 80px rgba(79, 174, 255, 0.2)' }}
                className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-16 h-16 bg-gradient-to-r from-[#4FAEFF] to-[#A6D1FF] rounded-2xl flex items-center justify-center text-white mb-6"
                >
                  {value.icon}
                </motion.div>
                <h3 className="text-xl text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl sm:text-6xl text-gray-900 mb-6 tracking-tight">
              Our journey to
              <br />
              <span className="bg-gradient-to-r from-[#4FAEFF] to-[#A6D1FF] bg-clip-text text-transparent">
                ethical investing
              </span>
            </h2>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#4FAEFF] via-[#A6D1FF] to-[#4FAEFF] opacity-20" />

            <div className="space-y-16">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`flex flex-col md:flex-row gap-8 items-center ${
                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  <div className="flex-1 text-center md:text-right">
                    {index % 2 === 0 && (
                      <motion.div
                        whileHover={{ scale: 1.05, y: -5 }}
                        className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 inline-block max-w-md"
                      >
                        <div className="text-5xl bg-gradient-to-r from-[#4FAEFF] to-[#A6D1FF] bg-clip-text text-transparent mb-3">
                          {item.year}
                        </div>
                        <h3 className="text-2xl text-gray-900 mb-3">{item.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{item.description}</p>
                      </motion.div>
                    )}
                  </div>

                  <motion.div
                    whileHover={{ scale: 1.5, rotate: 360 }}
                    className="w-6 h-6 bg-gradient-to-r from-[#4FAEFF] to-[#A6D1FF] rounded-full border-4 border-white shadow-xl z-10"
                  />

                  <div className="flex-1 text-center md:text-left">
                    {index % 2 !== 0 && (
                      <motion.div
                        whileHover={{ scale: 1.05, y: -5 }}
                        className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 inline-block max-w-md"
                      >
                        <div className="text-5xl bg-gradient-to-r from-[#4FAEFF] to-[#A6D1FF] bg-clip-text text-transparent mb-3">
                          {item.year}
                        </div>
                        <h3 className="text-2xl text-gray-900 mb-3">{item.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{item.description}</p>
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
