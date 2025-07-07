import React, { useState, useEffect } from 'react';
import { 
  Mail, 
  ArrowRight, 
  Flame, 
  FileText, 
  TrendingUp, 
  Zap, 
  Heart, 
  Search,
  Send
} from 'lucide-react';

function App() {
  const [email, setEmail] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [joinEmail, setJoinEmail] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSubscribe = (emailValue: string, setEmailValue: (value: string) => void) => {
    if (emailValue) {
      console.log('Subscribing:', emailValue);
      setEmailValue('');
      // Here you would typically send the email to your newsletter service
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Flame className="h-8 w-8 text-[#FF5733] mr-2" />
              <span className="text-2xl font-bold text-gray-900">PhoenixVenture</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <button 
                onClick={() => scrollToSection('about')}
                className="text-gray-700 hover:text-[#FF5733] transition-colors font-medium"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('newsletter')}
                className="text-gray-700 hover:text-[#FF5733] transition-colors font-medium"
              >
                Newsletter
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-gray-700 hover:text-[#FF5733] transition-colors font-medium"
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 to-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Rise with <span className="text-[#FF5733]">PhoenixVenture</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-light text-gray-700 mb-4">
            Original Stories, Delivered.
          </h2>
          <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            From idea to impact—stories that matter in startups and tech.
          </p>
          
          {/* Hero Email Form */}
          <div className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF5733] focus:border-transparent"
              />
              <button
                onClick={() => handleSubscribe(email, setEmail)}
                className="bg-[#FF5733] text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors font-medium flex items-center justify-center gap-2"
              >
                Subscribe <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 1 - What You'll Receive */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            What You'll Receive
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="bg-orange-100 rounded-full p-4 w-16 h-16 mx-auto mb-6 group-hover:bg-orange-200 transition-colors">
                <TrendingUp className="h-8 w-8 text-[#FF5733] mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Weekly Highlights</h3>
              <p className="text-gray-600">The best of tech, every Friday</p>
            </div>
            <div className="text-center group">
              <div className="bg-orange-100 rounded-full p-4 w-16 h-16 mx-auto mb-6 group-hover:bg-orange-200 transition-colors">
                <FileText className="h-8 w-8 text-[#FF5733] mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Original Voices</h3>
              <p className="text-gray-600">Real stories from real builders</p>
            </div>
            <div className="text-center group">
              <div className="bg-orange-100 rounded-full p-4 w-16 h-16 mx-auto mb-6 group-hover:bg-orange-200 transition-colors">
                <Search className="h-8 w-8 text-[#FF5733] mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Deep Signals</h3>
              <p className="text-gray-600">What's rising beneath the surface</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 - Our Themes */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            Our Themes
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4">
                <Flame className="h-6 w-6 text-[#FF5733] mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Rebirth Stories</h3>
              </div>
              <p className="text-gray-600">Failures turned into startups</p>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4">
                <Zap className="h-6 w-6 text-[#FF5733] mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Tech as Fire</h3>
              </div>
              <p className="text-gray-600">What's shaping the future</p>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4">
                <Heart className="h-6 w-6 text-[#FF5733] mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Phoenix Picks</h3>
              </div>
              <p className="text-gray-600">Our editorial favorite reads</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 - Curated with Purpose */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">
            Curated with Purpose
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            PhoenixVenture is a weekly act of discovery. Each edition revives ideas, fuels thought, 
            and showcases the real builders of tomorrow. We write what we believe you'll feel and remember.
          </p>
        </div>
      </section>

      {/* Join CTA */}
      <section id="newsletter" className="py-20 bg-gradient-to-r from-[#FF5733] to-orange-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-8">
            Join our circle of curious readers.
          </h2>
          <div className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                value={joinEmail}
                onChange={(e) => setJoinEmail(e.target.value)}
                className="flex-1 px-4 py-3 border border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
              />
              <button
                onClick={() => handleSubscribe(joinEmail, setJoinEmail)}
                className="bg-white text-[#FF5733] px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors font-medium flex items-center justify-center gap-2"
              >
                Subscribe <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">
            Let's Connect, Collaborate or Say Hello
          </h2>
          <div className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                value={contactEmail}
                onChange={(e) => setContactEmail(e.target.value)}
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF5733] focus:border-transparent"
              />
              <button
                onClick={() => handleSubscribe(contactEmail, setContactEmail)}
                className="bg-[#FF5733] text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors font-medium flex items-center justify-center gap-2"
              >
                Submit <Send className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;