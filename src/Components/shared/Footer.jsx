import React from 'react';

import logoWhite from '../../assets/logo-xl.png'; 
import instagramIcon from '../../assets/instagram.png'; 
import facebookIcon from '../../assets/facebook.png'; 
import twitterIcon from '../../assets/twitter.png'; 

const Footer = () => {
  return (
    <footer className="bg-[#244D3F] text-white py-12 mt-auto">
      <div className="container mx-auto px-6 text-center">
        
        <div className="mb-4 flex justify-center">
          <img src={logoWhite} alt="KeenKeeper Logo" className="h-12 w-auto object-contain" />
        </div>

        <p className="text-gray-300 text-sm mb-8 max-w-3xl mx-auto">
          Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
        </p>

        {/* Social Links Section */}
        <div className="mb-10">
          <h3 className="text-sm font-semibold mb-6 tracking-wide uppercase opacity-70">Social Links</h3>
          <div className="flex justify-center gap-6">
            
      
            <a href="#" className="w-10 h-10 hover:scale-110 transition-transform duration-300">
              <img src={instagramIcon} alt="Instagram" className="w-full h-full object-contain" />
            </a>

       
            <a href="#" className="w-10 h-10 hover:scale-110 transition-transform duration-300">
              <img src={facebookIcon} alt="Facebook" className="w-full h-full object-contain" />
            </a>

            <a href="#" className="w-10 h-10 hover:scale-110 transition-transform duration-300">
              <img src={twitterIcon} alt="Twitter" className="w-full h-full object-contain" />
            </a>

          </div>
        </div>

        {/* Bottom Links & Copyright */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400 gap-4">
          <p>© 2026 KeenKeeper. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition">Privacy Policy</a>
            <a href="#" className="hover:text-white transition">Terms of Service</a>
            <a href="#" className="hover:text-white transition">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;