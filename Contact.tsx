import { useState } from 'react';
import { motion } from 'motion/react';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  MessageCircle,
  Clock,
  ChevronDown,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  CheckCircle,
} from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email Us',
      details: 'support@tharwacapital.com',
      subdetails: 'We reply within 24 hours',
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Call Us',
      details: '+971 4 123 4567',
      subdetails: 'Mon-Fri, 9AM-6PM GST',
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Visit Us',
      details: 'Dubai International Financial Centre',
      subdetails: 'Dubai, United Arab Emirates',
    },
  ];

  const faqs = [
    {
      question: 'How do I create an account?',
      answer: 'Click on "Get Started" or "Download App" button, fill in your details, and complete the KYC verification process. Your account will be ready within 24-48 hours.',
    },
    {
      question: 'What is the minimum investment amount?',
      answer: 'The minimum investment varies by opportunity but starts from as low as $250, making it accessible for middle-class investors.',
    },
    {
      question: 'How are investments verified as Sharia-compliant?',
      answer: 'Every investment opportunity is reviewed and certified by our independent Sharia board consisting of renowned Islamic scholars before being listed on our platform.',
    },
    {
      question: 'Can I withdraw my investment anytime?',
      answer: 'Investment terms vary by opportunity. Some investments have lock-in periods while others offer more flexibility. All details are clearly stated before you invest.',
    },
    {
      question: 'What fees does Tharwa Capital charge?',
      answer: 'We charge a transparent management fee ranging from 0.5% to 2% annually depending on the investment type. There are no hidden fees.',
    },
    {
      question: 'How do I receive returns on my investments?',
      answer: 'Returns are automatically distributed to your registered bank account according to the investment schedule. You can track all distributions in your dashboard.',
    },
    {
      question: 'Is my investment insured?',
      answer: 'While investments carry inherent risks and are not government-insured, we conduct thorough due diligence and only list vetted opportunities with detailed risk assessments.',
    },
    {
      question: 'Can I invest from outside the GCC?',
      answer: 'Currently, we only accept investors from GCC countries. We are working on expanding to other regions in the near future.',
    },
  ];

  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, label: 'Facebook', color: 'hover:text-blue-600' },
    { icon: <Twitter className="w-5 h-5" />, label: 'Twitter', color: 'hover:text-sky-500' },
    { icon: <Linkedin className="w-5 h-5" />, label: 'LinkedIn', color: 'hover:text-blue-700' },
    { icon: <Instagram className="w-5 h-5" />, label: 'Instagram', color: 'hover:text-pink-600' },
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
              Get in Touch
            </h1>
            <p className="text-xl text-gray-600">
              Have questions? We're here to help you on your investment journey
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(79, 174, 255, 0.2)' }}
                className="bg-gradient-to-br from-white to-[#A6D1FF]/5 rounded-3xl p-8 text-center shadow-sm border border-gray-100"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-16 h-16 bg-gradient-to-r from-[#A6D1FF] to-[#4FAEFF] rounded-2xl flex items-center justify-center text-white mx-auto mb-6"
                >
                  {info.icon}
                </motion.div>
                <h3 className="mb-3">{info.title}</h3>
                <p className="text-gray-900 mb-1">{info.details}</p>
                <p className="text-sm text-gray-500">{info.subdetails}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-gradient-to-br from-white to-[#A6D1FF]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="mb-6">Send Us a Message</h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and we'll get back to you within 24 hours
              </p>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                    className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4"
                  >
                    <CheckCircle className="w-10 h-10 text-white" />
                  </motion.div>
                  <h3 className="text-green-800 mb-2">Message Sent!</h3>
                  <p className="text-green-700">
                    Thank you for contacting us. We'll get back to you soon.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#4FAEFF]/50 focus:border-[#4FAEFF] transition-all"
                      placeholder="Ahmed Al-Mansoori"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#4FAEFF]/50 focus:border-[#4FAEFF] transition-all"
                      placeholder="ahmed@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-gray-700 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      required
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#4FAEFF]/50 focus:border-[#4FAEFF] transition-all"
                      placeholder="Investment Inquiry"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-gray-700 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#4FAEFF]/50 focus:border-[#4FAEFF] transition-all resize-none"
                      placeholder="Tell us how we can help you..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-4 bg-gradient-to-r from-[#A6D1FF] to-[#4FAEFF] text-white rounded-xl flex items-center justify-center gap-2 hover:shadow-lg transition-shadow"
                  >
                    <Send className="w-5 h-5" />
                    Send Message
                  </motion.button>
                </form>
              )}
            </motion.div>

            {/* Additional Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Support Hours */}
              <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#A6D1FF] to-[#4FAEFF] rounded-xl flex items-center justify-center">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <h3>Support Hours</h3>
                </div>
                <div className="space-y-3 text-gray-600">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>

              {/* Live Chat */}
              <div className="bg-gradient-to-br from-[#A6D1FF] to-[#4FAEFF] rounded-3xl p-8 text-white">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur rounded-xl flex items-center justify-center">
                    <MessageCircle className="w-6 h-6" />
                  </div>
                  <h3 className="text-white">Need Quick Help?</h3>
                </div>
                <p className="text-white/90 mb-6">
                  Chat with our AI assistant or connect with a support specialist instantly
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full py-3 bg-white text-[#4FAEFF] rounded-xl"
                >
                  Start Live Chat
                </motion.button>
              </div>

              {/* Social Media */}
              <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
                <h3 className="mb-6">Follow Us</h3>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.button
                      key={index}
                      whileHover={{ scale: 1.2, y: -5 }}
                      whileTap={{ scale: 0.9 }}
                      className={`w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center text-gray-600 transition-colors ${social.color}`}
                    >
                      {social.icon}
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Newsletter */}
              <div className="bg-gradient-to-br from-white to-[#A6D1FF]/10 rounded-3xl p-8 shadow-sm border border-gray-100">
                <h3 className="mb-4">Newsletter</h3>
                <p className="text-gray-600 mb-6">
                  Get weekly investment opportunities and market insights
                </p>
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#4FAEFF]/50"
                  />
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 bg-gradient-to-r from-[#A6D1FF] to-[#4FAEFF] text-white rounded-xl"
                  >
                    Subscribe
                  </motion.button>
                </div>
              </div>
            </motion.div>
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
              Quick answers to common questions
            </p>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm"
              >
                <motion.button
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                  whileHover={{ backgroundColor: 'rgba(79, 174, 255, 0.05)' }}
                >
                  <span className="text-gray-900">{faq.question}</span>
                  <motion.div
                    animate={{ rotate: expandedFaq === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  </motion.div>
                </motion.button>
                <motion.div
                  initial={false}
                  animate={{
                    height: expandedFaq === index ? 'auto' : 0,
                    opacity: expandedFaq === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-5 text-gray-600">
                    {faq.answer}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* App Download CTA */}
      <section className="py-16 bg-gradient-to-r from-[#A6D1FF] to-[#4FAEFF]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-white mb-4">Download Our Mobile App</h2>
            <p className="text-xl text-white/90 mb-8">
              Manage your investments on the go with our mobile app
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-[#4FAEFF] rounded-full"
              >
                Download for iOS
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white/10 backdrop-blur text-white rounded-full border-2 border-white"
              >
                Download for Android
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
