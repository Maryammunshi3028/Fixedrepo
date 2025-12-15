import { motion } from 'motion/react';
import {
  UserPlus,
  Search,
  FileCheck,
  Wallet,
  TrendingUp,
  Bell,
  Shield,
  Users,
  ArrowRight,
  CheckCircle,
} from 'lucide-react';

export function HowItWorks() {
  const steps = [
    {
      number: '01',
      icon: <UserPlus className="w-8 h-8" />,
      title: 'Create Your Account',
      description: 'Sign up in minutes with your email and complete a simple KYC verification process',
      details: [
        'Quick registration process',
        'Secure identity verification',
        'Set your investment preferences',
      ],
      color: 'from-blue-400 to-blue-600',
    },
    {
      number: '02',
      icon: <Search className="w-8 h-8" />,
      title: 'Browse Opportunities',
      description: 'Explore our curated selection of Sharia-compliant investments across various sectors',
      details: [
        'Filter by risk, return, and sector',
        'View detailed investment information',
        'Read Sharia compliance certificates',
      ],
      color: 'from-cyan-400 to-cyan-600',
    },
    {
      number: '03',
      icon: <FileCheck className="w-8 h-8" />,
      title: 'Review & Select',
      description: 'Carefully review investment details, risks, and expected returns before investing',
      details: [
        'Comprehensive risk disclosures',
        'Historical performance data',
        'Expert analysis and ratings',
      ],
      color: 'from-teal-400 to-teal-600',
    },
    {
      number: '04',
      icon: <Wallet className="w-8 h-8" />,
      title: 'Fund Your Investment',
      description: 'Invest any amount starting from as low as $250 using secure payment methods',
      details: [
        'Multiple payment options',
        'Instant investment confirmation',
        'Fractional ownership enabled',
      ],
      color: 'from-emerald-400 to-emerald-600',
    },
    {
      number: '05',
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Track & Grow',
      description: 'Monitor your portfolio performance in real-time through our intuitive dashboard',
      details: [
        'Real-time portfolio tracking',
        'Performance analytics',
        'Detailed financial reports',
      ],
      color: 'from-green-400 to-green-600',
    },
    {
      number: '06',
      icon: <Bell className="w-8 h-8" />,
      title: 'Receive Returns',
      description: 'Get regular updates and receive returns directly to your bank account',
      details: [
        'Automated return distributions',
        'Transparent fee structure',
        'Tax documentation provided',
      ],
      color: 'from-lime-400 to-lime-600',
    },
  ];

  const features = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: '100% Sharia Compliant',
      description: 'Every investment is vetted by our Sharia board',
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Community Support',
      description: '24/7 customer support and investor community',
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: 'Transparent Fees',
      description: 'No hidden charges, clear fee structure',
    },
  ];

  const faqs = [
    {
      question: 'What is fractional investing?',
      answer: 'Fractional investing allows you to invest small amounts in high-value assets by owning a fraction of the investment alongside other investors.',
    },
    {
      question: 'How is Sharia compliance ensured?',
      answer: 'Our dedicated Sharia board reviews every investment opportunity to ensure it meets Islamic finance principles before listing on our platform.',
    },
    {
      question: 'What are the minimum investment amounts?',
      answer: 'Minimum investments start from $250, making it accessible for middle-class investors to build diversified portfolios.',
    },
    {
      question: 'How long does verification take?',
      answer: 'Account verification typically takes 24-48 hours after submitting your documents.',
    },
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-br from-[#A6D1FF]/20 via-white to-[#4FAEFF]/10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="mb-4 bg-gradient-to-r from-[#4FAEFF] to-[#A6D1FF] bg-clip-text text-transparent">
              How It Works
            </h1>
            <p className="text-xl text-gray-600">
              Start your ethical investment journey in 6 simple steps
            </p>
          </motion.div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`flex flex-col ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } gap-12 items-center`}
              >
                {/* Content Side */}
                <div className="flex-1">
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                  >
                    <div className="text-6xl bg-gradient-to-r from-[#A6D1FF] to-[#4FAEFF] bg-clip-text text-transparent opacity-30 mb-4">
                      {step.number}
                    </div>
                    <h2 className="mb-4">{step.title}</h2>
                    <p className="text-lg text-gray-600 mb-6">{step.description}</p>
                    
                    <div className="space-y-3">
                      {step.details.map((detail, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.3 + idx * 0.1 }}
                          className="flex items-center gap-3"
                        >
                          <div className="w-6 h-6 bg-gradient-to-r from-[#A6D1FF] to-[#4FAEFF] rounded-full flex items-center justify-center flex-shrink-0">
                            <CheckCircle className="w-4 h-4 text-white" />
                          </div>
                          <span className="text-gray-700">{detail}</span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </div>

                {/* Visual Side */}
                <div className="flex-1">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    whileHover={{ scale: 1.05, rotate: 5 }}
                    className="relative"
                  >
                    <div className={`bg-gradient-to-br ${step.color} rounded-3xl p-12 shadow-2xl`}>
                      <motion.div
                        animate={{
                          y: [0, -10, 0],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: 'easeInOut',
                        }}
                        className="w-32 h-32 bg-white/20 backdrop-blur rounded-3xl flex items-center justify-center mx-auto text-white"
                      >
                        {step.icon}
                      </motion.div>
                    </div>
                    
                    {/* Decorative Elements */}
                    <motion.div
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.5, 0.8, 0.5],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                      className={`absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br ${step.color} rounded-full blur-2xl`}
                    />
                    <motion.div
                      animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.3, 0.6, 0.3],
                      }}
                      transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: 1,
                      }}
                      className={`absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br ${step.color} rounded-full blur-2xl`}
                    />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-[#A6D1FF]/10 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="mb-4">Why Invest With Us?</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(79, 174, 255, 0.2)' }}
                className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 text-center"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-16 h-16 bg-gradient-to-r from-[#A6D1FF] to-[#4FAEFF] rounded-2xl flex items-center justify-center text-white mx-auto mb-6"
                >
                  {feature.icon}
                </motion.div>
                <h3 className="mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about getting started
            </p>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ boxShadow: '0 10px 30px rgba(79, 174, 255, 0.1)' }}
                className="bg-gradient-to-br from-white to-[#A6D1FF]/5 rounded-2xl p-6 border border-gray-100"
              >
                <h3 className="mb-3 text-[#4FAEFF]">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#A6D1FF] to-[#4FAEFF] relative overflow-hidden">
        <motion.div
          className="absolute inset-0 opacity-10"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
          style={{
            backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }}
        />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-white mb-4">Ready to Get Started?</h2>
            <p className="text-xl text-white/90 mb-8">
              Create your account today and start building your ethical investment portfolio
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white text-[#4FAEFF] rounded-full inline-flex items-center gap-2 group"
            >
              Create Account
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
