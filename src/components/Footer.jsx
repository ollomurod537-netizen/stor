import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { FaApple } from "react-icons/fa";
import { FaGooglePlay } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-5 gap-8 mb-16">
          {/* Column 1: Exclusive */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Exclusive</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Subscribe</h4>
                <p className="text-sm text-gray-400 mb-4">Get 10% off your first order</p>
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="bg-transparent border border-white px-4 py-2 text-sm flex-1"
                  />
                  <button className="border border-white px-4 py-2">
                    <span className="text-xl">➤</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Support */}
          <div>
            <h4 className="font-semibold mb-6">Support</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</li>
              <li><a href="mailto:exclusive@gmail.com" className="hover:text-white">exclusive@gmail.com</a></li>
              <li><a href="tel:+880158888899" className="hover:text-white">+998-77-777-77-77</a></li>
            </ul>
          </div>

          {/* Column 3: Account */}
          <div>
            <h4 className="font-semibold mb-6">Account</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white">My Account</a></li>
              <li><a href="#" className="hover:text-white">Login / Register</a></li>
              <li><a href="#" className="hover:text-white">Cart</a></li>
              <li><a href="#" className="hover:text-white">Wishlist</a></li>
              <li><a href="#" className="hover:text-white">Shop</a></li>
            </ul>
          </div>

          {/* Column 4: Quick Link */}
          <div>
            <h4 className="font-semibold mb-6">Quick Link</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white">Terms Of Use</a></li>
              <li><a href="#" className="hover:text-white">FAQ</a></li>
              <li><a href="#" className="hover:text-white">Contact</a></li>
            </ul>
          </div>

          {/* Column 5: Download App */}
          <div>
            <h4 className="font-semibold mb-6">Download App</h4>
            <p className="text-xs text-gray-400 mb-4">Save $3 with App New User Only</p>
            <div className="space-y-2 mb-4">
              <div className="flex items-center gap-2 bg-white text-black px-3 py-2 rounded text-sm font-medium cursor-pointer hover:opacity-80">
                <FaGooglePlay size={20} />
                <span>Google Play</span>
              </div>
              <div className="flex items-center gap-2 bg-white text-black px-3 py-2 rounded text-sm font-medium cursor-pointer hover:opacity-80">
                <FaApple size={20} />
                <span>App Store</span>
              </div>
            </div>
            <div className="flex gap-4 mt-4">
              <a href="#" className="text-gray-400 hover:text-white text-lg">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-lg">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-lg">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-lg">
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>
        </div>

       
        <div className="border-t border-gray-700 pt-8 text-center text-gray-500 text-sm">
          <p>© Copyright Rimel 2026. All right reserved</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
