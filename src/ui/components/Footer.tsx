import { useState } from 'react';
import { Twitter, Facebook, Instagram, Linkedin } from 'lucide-react';
import { Link, NavLink } from 'react-router-dom';

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleSubmit = () => {
    // Handle newsletter subscription
    if (email) {
      // console.log('Subscribing email:', email);
      setEmail('');
    }
  };

  return (
    <footer className="bg-[#A52A2A1A] py-12 px-6 mt-6">
      <div className="max-w-6xl mx-auto 2xl:max-w-full">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-12">
          {/* Contact Us Section */}
          <div className='col-span-2 md:col-span-1'>
            <h3 className="text-sm 2xl:text-base font-semibold text-gray-900 uppercase tracking-wider mb-4">
              CONTACT US
            </h3>
            <div className="space-y-1 text-sm 2xl:text-base text-gray-600">
              <p>Fifth Dimension research Publication (P) Ltd.</p>
              <p>No: 38D5F, Rajaji nagar, Ariyalur-621713.</p>
              <p>Tamilnadu, India.</p>
              <div className="mt-4">
                <p>Email: <NavLink to="mailto:editorinchief@indjcst.com" className="text-blue-600 hover:text-blue-800 underline">editorinchief@indjcst.com</NavLink></p>
                <p><NavLink to="mailto:Support@fdrpjournals.org" className="text-blue-600 hover:text-blue-800 underline">Support@fdrpjournals.org</NavLink></p>
              </div>
              <p>Mobile: +91 9840521421</p>
            </div>
          </div>

          {/* Guidelines Section */}
          <div>
            <h3 className="text-sm 2xl:text-base font-semibold text-gray-900 uppercase tracking-wider mb-4">
              GUIDELINES
            </h3>
            <ul className="space-y-3 text-sm 2xl:text-base  text-gray-600">
              <li><NavLink to="/instruction-for-author" className="pointer hover:text-primary">Instructions for Authors</NavLink></li>
              <li><NavLink to="/ethics?target=instructions-for-authors" className="pointer hover:text-primary">Editor guidelines</NavLink></li>
              <li><NavLink to="/journal-publishing-process" className="pointer hover:text-primary">Journal Publishing Process</NavLink></li>
              <li><NavLink to="/archives" className="pointer hover:text-primary">Archives</NavLink></li>
              <li><NavLink to="/call-for-papers" className="pointer hover:text-primary">Call for Papers</NavLink></li>
              <li><NavLink to="/guidance-for-ems" className="pointer hover:text-primary">Editorial Management System</NavLink></li>
            </ul>
          </div>

          {/* Policies Section */}
          <div>
            <h3 className="text-sm 2xl:text-base font-semibold text-gray-900 uppercase tracking-wider mb-4">
              POLICIES
            </h3>
            <ul className="space-y-3 text-sm 2xl:text-base text-gray-600">
              <li><NavLink to="/peer-review-policy" className="hover:text-primary">Peer Review Policy</NavLink></li>
              <li><NavLink to="/publication-ethics-policy" className="hover:text-primary">Publication Policy</NavLink></li>
              <li><NavLink to="/ethics" className="hover:text-primary">Ethics And Policies</NavLink></li>
              <li><NavLink to="/cross-mark-policy" className="hover:text-primary">Crossmark Policy</NavLink></li>
              <li><NavLink to="/ethics?target=open-access-policy" className="hover:text-primary">Open Access Policy</NavLink></li>
              <li><NavLink to="/ethics?target=plagiarism-policy" className="hover:text-primary">Plagiarism Policy</NavLink></li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div className=''>
            <h3 className="text-sm 2xl:text-base font-semibold text-gray-900 uppercase tracking-wider mb-4">
              SUBSCRIBE TO NEWSLETTER
            </h3>
            <div className="flex">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email address"
                className="flex-1 px-3 py-2 border border-gray-200 bg-white rounded-l-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-sm 2xl:text-base"
              />
              <button
                onClick={handleSubmit}
                className="px-6 py-2 bg-primary text-white rounded-r-md hover:bg-primary-hover focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 text-sm 2xl:text-base font-medium"
              >
                Join
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-primary pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-start space-y-4 lg:space-y-0 relative">
            {/* Copyright and Licensing */}
            <div className="text-center w-fit mx-auto">
              <p className="text-sm 2xl:text-base text-gray-600 mb-2">
                Copyright © 2025 INDJCST Published by Fifth Dimension research Publication (P) Ltd. All Rights Reserved.
              </p>
              <p className="text-sm 2xl:text-base text-gray-600">
                Work is licensed under a Creative Commons Attribution 4.0 International License.
              </p>
              <div className="mt-2 text-center">
                <div className="flex flex-wrap justify-center space-x-1 text-sm 2xl:text-base">
                  <NavLink to="/privacy-policy" target='_blank' className="text-primary hover:text-primary-hover">Privacy Policy</NavLink>
                  <span className="text-gray-400">|</span>
                  <NavLink to="/terms-and-conditions" target='_blank' className="text-primary hover:text-primary-hover">Terms And Conditions</NavLink>
                  <span className="text-gray-400">|</span>
                  <NavLink to="/refund-policy" target='_blank' className="text-primary hover:text-primary-hover">Refund Policy</NavLink>
                </div>
              </div>
            </div>

            {/* Social Media Icons */}
            <div className="flex xl:hidden space-x-4 mx-auto lg:mx-0 lg:absolute right-0">
              <Link aria-label='got to Twitter of INDJCST' to="#" className="text-gray-400 hover:text-gray-500">
                <Twitter size={20} />
              </Link>
              <Link aria-label='got to Facebook of INDJCST' to="#" className="text-gray-400 hover:text-gray-500">
                <Facebook size={20} />
              </Link>
              <Link aria-label='got to Instagram of INDJCST' to="#" className="text-gray-400 hover:text-gray-500">
                <Instagram size={20} />
              </Link>
              <Link aria-label='got to Linkedin of INDJCST' to="#" className="text-gray-400 hover:text-gray-500">
                <Linkedin size={20} />
              </Link>
            </div>
            <div className="hidden xl:flex space-x-4 mx-auto lg:mx-0 lg:absolute right-0 top-1">
              <Link aria-label='got to Twitter of INDJCST' to="#" className="text-gray-400 hover:text-gray-500">
                <Twitter size={26} />
              </Link>
              <Link aria-label='got to Facebook of INDJCST' to="#" className="text-gray-400 hover:text-gray-500">
                <Facebook size={26} />
              </Link>
              <Link aria-label='got to Instagram of INDJCST' to="#" className="text-gray-400 hover:text-gray-500">
                <Instagram size={26} />
              </Link>
              <Link aria-label='got to Linkedin of INDJCST' to="#" className="text-gray-400 hover:text-gray-500">
                <Linkedin size={26} />
              </Link>
            </div>
          </div>

          {/* Bottom Links */}

        </div>
      </div>
    </footer>
  );
}