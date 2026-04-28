import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-slate-900 border-t border-slate-800 text-slate-300 py-12 mt-auto">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    {/* Newsletter */}
                    <div>
                        <h3 className="text-white text-lg font-bold mb-4">Our Newsletter</h3>
                        <p className="text-sm mb-4 text-slate-400">Subscribe for the latest fitness tips, nutrition advice, and gym updates.</p>
                        <form className="flex" onSubmit={(e) => e.preventDefault()}>
                            <input 
                                type="email" 
                                placeholder="Your email address..." 
                                className="bg-[#1a1a1a] text-sm border-none rounded-l-md px-3 py-2 text-white placeholder-slate-500 focus:ring-2 focus:outline-none focus:ring-brand-orange w-full" 
                            />
                            <button type="submit" className="bg-brand-orange hover:bg-[#e03a11] text-white px-4 py-2 rounded-r-md transition-colors text-sm font-bold">
                                Subscribe
                            </button>
                        </form>
                    </div>

                    {/* Our Links */}
                    <div>
                        <h3 className="text-white text-lg font-bold mb-4">Our Links</h3>
                        <ul className="space-y-2 text-sm text-slate-400">
                            <li><Link to="/" className="hover:text-brand-orange hover:translate-x-1 inline-block transition-all duration-200">Home</Link></li>
                            <li><Link to="/gyms" className="hover:text-brand-orange hover:translate-x-1 inline-block transition-all duration-200">Find a Gym</Link></li>
                            <li><Link to="/videos" className="hover:text-brand-orange hover:translate-x-1 inline-block transition-all duration-200">Video Library</Link></li>
                            <li><Link to="/ai-coach" className="hover:text-brand-orange hover:translate-x-1 inline-block transition-all duration-200">AI Coach</Link></li>
                            <li><Link to="/login" className="hover:text-brand-orange hover:translate-x-1 inline-block transition-all duration-200">Sign In</Link></li>
                        </ul>
                    </div>

                    {/* Contact Us */}
                    <div>
                        <h3 className="text-white text-lg font-bold mb-4">Contact Us</h3>
                        <ul className="space-y-3 text-sm text-slate-400">
                            <li className="flex gap-2 items-start">
                                <MapPin size={16} className="text-brand-orange shrink-0 mt-0.5"/> 
                                GCET
                            </li>
                            <li className="flex gap-2 items-center">
                                <Phone size={16} className="text-brand-orange shrink-0"/> 
                                +1 (555) 123-4567
                            </li>
                            <li className="flex gap-2 items-center">
                                <Mail size={16} className="text-brand-orange shrink-0"/> 
                                support@smartgym.com
                            </li>
                        </ul>
                        <div className="flex gap-3 mt-5">
                            <a href="#" aria-label="Facebook" className="text-slate-400 hover:text-white hover:bg-brand-orange transition-colors bg-[#1a1a1a] p-2 rounded-full"><FaFacebook size={16} /></a>
                            <a href="#" aria-label="Twitter" className="text-slate-400 hover:text-white hover:bg-brand-orange transition-colors bg-[#1a1a1a] p-2 rounded-full"><FaTwitter size={16} /></a>
                            <a href="#" aria-label="Instagram" className="text-slate-400 hover:text-white hover:bg-brand-orange transition-colors bg-[#1a1a1a] p-2 rounded-full"><FaInstagram size={16} /></a>
                        </div>
                    </div>

                    {/* Project Members (Placeholders) */}
                    <div>
                        <h3 className="text-white text-lg font-bold mb-4">Project Members</h3>
                        <p className="text-xs text-slate-500 mb-3 hover:text-slate-400 transition-colors">Developed by the team:</p>
                        <div className="flex gap-4">
                            <div className="group flex flex-col items-center">
                                <div className="w-20 h-20 bg-slate-800 rounded-full border-2 border-slate-700 group-hover:border-brand-orange flex items-center justify-center overflow-hidden mb-2 shadow-inner transition-all duration-300 transform group-hover:-translate-y-1">
                                    {/* Photo Placeholder 1 */}
                                    <img src="/Suraj.jpg" alt="" />
                                </div>
                                <span className="text-xs text-slate-400 truncate w-16 text-center group-hover:text-brand-orange transition-colors">Suraj</span>
                            </div>
                            
                            <div className="group flex flex-col items-center">
                                <div className="w-20 h-20 bg-slate-800 rounded-full border-2 border-slate-700 group-hover:border-brand-orange flex items-center justify-center overflow-hidden mb-2 shadow-inner transition-all duration-300 transform group-hover:-translate-y-1 delay-75">
                                    {/* Photo Placeholder 2 */}
                                    <img src="/nu.jpg" alt="" />
                                </div>
                                <span className="text-xs text-slate-400 truncate w-16 text-center group-hover:text-brand-orange transition-colors">Vishwas</span>
                            </div>
                            
                            <div className="group flex flex-col items-center">
                                <div className="w-20 h-20 bg-slate-800 rounded-full border-2 border-slate-700 group-hover:border-brand-orange flex items-center justify-center overflow-hidden mb-2 shadow-inner transition-all duration-300 transform group-hover:-translate-y-1 delay-150">
                                    {/* Photo Placeholder 3 */}
                                    <img src="/shubh.jpeg" alt="" />
                                </div>
                                <span className="text-xs text-slate-400 truncate w-16 text-center group-hover:text-brand-orange transition-colors">Shubh</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Copyright Line */}
                <div className="pt-8 border-t border-slate-800/50 text-center flex flex-col items-center">
                    <p className="text-sm text-slate-500">
                        &copy; {new Date().getFullYear()} Smart Gym Management System. All rights reserved.
                    </p>
                    <p className="text-xs text-slate-600 mt-2">
                        Designed with precision for the ultimate fitness experience.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
