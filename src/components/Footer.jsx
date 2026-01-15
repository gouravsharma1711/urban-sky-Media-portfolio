import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Github } from 'lucide-react';

function Footer() {
    return (
        <footer className="bg-white border-t border-gray-100">
            <div className="mx-auto w-full max-w-7xl px-6 py-12 lg:py-16">
                <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-5">
                    <div className="col-span-2 lg:col-span-2">
                        <a href="/#" className="flex items-center gap-2 mb-6">
                            <div className="w-8 h-8  rounded flex items-center justify-center">
                                <img src='/images/logo.jpg'></img>
                            </div>
                            <span className="text-xl font-bold tracking-tight text-[#4B1F6F]">
                                Urban Sky Media
                            </span>
                        </a>
                        <p className="max-w-xs text-gray-600 text-sm leading-relaxed mb-6">
                            Elevating brands through strategic marketing and innovative digital solutions. Let&apos;s build something extraordinary together.
                        </p>
                    </div>
                    

                    <div>
                        <h2 className="mb-6 text-xs font-bold text-gray-900 uppercase tracking-widest">Company</h2>
                        <ul className="text-gray-600 text-sm space-y-4">
                            <li><a href="#about" className="hover:text-primary-600 transition-colors">About Us</a></li>
                            <li><a href="#team" className="hover:text-primary-600 transition-colors">Our Team</a></li>
                            <li><a href="#case-study" className="hover:text-primary-600 transition-colors">Case Studies</a></li>
                            <li><a href="#contacts" className="hover:text-primary-600 transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="mb-6 text-xs font-bold text-gray-900 uppercase tracking-widest">Legal</h2>
                        <ul className="text-gray-600 text-sm space-y-4">
                            <li><a href="/privacy-policy" className="hover:text-primary-600 transition-colors">Privacy Policy</a></li>
                            <li><a href="/terms-of-service" className="hover:text-primary-600 transition-colors">Terms of Service</a></li>
                        </ul>
                    </div>
                </div>

                <p className="mt-5 p-5 text-xs flex flex-col justify-center items-center text-gray-500 border-t border-gray-100 ">
                    © {new Date().getFullYear()} Urban Sky Media. All rights reserved.
                </p>
            </div>
        </footer>
    );
}

export default Footer;
