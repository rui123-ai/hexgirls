import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaInstagram, FaTiktok, FaYoutube, FaSpotify, FaBandcamp, FaEnvelope } from 'react-icons/fa';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setShowSuccess(true);
    setFormData({ name: '', email: '', subject: '', message: '' });

    setTimeout(() => setShowSuccess(false), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const socialLinks = [
    { icon: <FaInstagram />, label: '@H3XGIRLS', url: 'https://instagram.com/H3XGIRLS' },
    { icon: <FaTiktok />, label: '@hexhymns', url: 'https://tiktok.com/@hexhymns' },
    { icon: <FaYoutube />, label: 'Canal Oculto da H3X', url: 'https://youtube.com/H3XGIRLS' },
    { icon: <FaSpotify />, label: 'H3X GIRLS', url: 'https://open.spotify.com/artist/H3XGIRLS' },
    { icon: <FaBandcamp />, label: 'H3X GIRLS', url: 'https://h3xgirls.bandcamp.com' }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8 bg-hex-black"
    >
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-gothic text-hex-neon mb-4">
            INVOQUE-NOS
          </h1>
          <div className="w-24 h-1 bg-hex-red mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-hex-gray/30 p-6 rounded-lg"
          >
            <h2 className="text-2xl font-gothic text-hex-purple mb-6">
              Grimório Digital
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-gray-300 mb-2">Nome</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-hex-black/50 border border-hex-purple rounded-md px-4 py-2 text-white focus:outline-none focus:border-hex-neon"
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-hex-black/50 border border-hex-purple rounded-md px-4 py-2 text-white focus:outline-none focus:border-hex-neon"
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2">Assunto</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full bg-hex-black/50 border border-hex-purple rounded-md px-4 py-2 text-white focus:outline-none focus:border-hex-neon"
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2">Mensagem</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full bg-hex-black/50 border border-hex-purple rounded-md px-4 py-2 text-white focus:outline-none focus:border-hex-neon"
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-2 rounded-md transition-colors duration-200
                  ${isSubmitting 
                    ? 'bg-hex-gray text-gray-400 cursor-not-allowed' 
                    : 'bg-hex-red text-white hover:bg-hex-purple'}`}
              >
                {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
              </button>
            </form>

            {showSuccess && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 text-hex-neon text-center"
              >
                Mensagem enviada com sucesso!
              </motion.div>
            )}
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="bg-hex-gray/30 p-6 rounded-lg">
              <h2 className="text-2xl font-gothic text-hex-purple mb-6">
                Newsletter Maldita
              </h2>
              <p className="text-gray-300 mb-4">
                Inscreva-se para receber os "Sussurros da Meia-Noite" — atualizações exclusivas sobre rituais, shows e relíquias.
              </p>
              <div className="flex space-x-2">
                <input
                  type="email"
                  placeholder="Seu email"
                  className="flex-1 bg-hex-black/50 border border-hex-purple rounded-md px-4 py-2 text-white focus:outline-none focus:border-hex-neon"
                />
                <button className="bg-hex-red text-white px-4 py-2 rounded-md hover:bg-hex-purple transition-colors duration-200">
                  Inscrever
                </button>
              </div>
            </div>

            <div className="bg-hex-gray/30 p-6 rounded-lg">
              <h2 className="text-2xl font-gothic text-hex-purple mb-6">
                Redes Sociais
              </h2>
              <div className="space-y-4">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="flex items-center space-x-3 text-gray-300 hover:text-hex-neon transition-colors duration-200"
                  >
                    <span className="text-hex-purple">{link.icon}</span>
                    <span>{link.label}</span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact; 