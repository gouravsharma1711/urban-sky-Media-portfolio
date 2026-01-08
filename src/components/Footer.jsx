import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Github } from 'lucide-react';

function Footer() {
    return (
        <footer className="bg-white border-t border-gray-100">
            <div className="mx-auto w-full max-w-7xl px-6 py-12 lg:py-16">
                <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-5">
                    <div className="col-span-2 lg:col-span-2">
                        <a href="#" className="flex items-center gap-2 mb-6">
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
                        <h2 className="mb-6 text-xs font-bold text-gray-900 uppercase tracking-widest">Solutions</h2>
                        <ul className="text-gray-600 text-sm space-y-4">
                            <li><a href="#" className="hover:text-primary-600 transition-colors">Marketing Strategy</a></li>
                            <li><a href="#" className="hover:text-primary-600 transition-colors">Content Creation</a></li>
                            <li><a href="#" className="hover:text-primary-600 transition-colors">UI/UX Design</a></li>
                            <li><a href="#" className="hover:text-primary-600 transition-colors">SEO Optimization</a></li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="mb-6 text-xs font-bold text-gray-900 uppercase tracking-widest">Company</h2>
                        <ul className="text-gray-600 text-sm space-y-4">
                            <li><a href="#" className="hover:text-primary-600 transition-colors">About Us</a></li>
                            <li><a href="#" className="hover:text-primary-600 transition-colors">Our Team</a></li>
                            <li><a href="#" className="hover:text-primary-600 transition-colors">Case Studies</a></li>
                            <li><a href="#" className="hover:text-primary-600 transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="mb-6 text-xs font-bold text-gray-900 uppercase tracking-widest">Legal</h2>
                        <ul className="text-gray-600 text-sm space-y-4">
                            <li><a href="#" className="hover:text-primary-600 transition-colors">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-primary-600 transition-colors">Terms of Service</a></li>
                            <li><a href="#" className="hover:text-primary-600 transition-colors">Cookie Policy</a></li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-xs text-gray-500">
                        © {new Date().getFullYear()} Urban Sky Media. All rights reserved.
                    </p>
                    <div className="flex gap-6 text-xs text-gray-500">
                        <a href="#" className="hover:text-gray-900">Status</a>
                        <a href="#" className="hover:text-gray-900">Security</a>
                        <a href="#" className="hover:text-gray-900">Sitemap</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
