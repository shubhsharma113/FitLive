import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Play, Heart, Activity } from 'lucide-react';

const Home = () => {
    const [isVideoOpen, setIsVideoOpen] = useState(false);

    return (
        <div className="w-full bg-[#f9f9f9] flex flex-col font-sans">
            {/* HERO SECTION */}
            <section className="relative w-full h-[700px] lg:h-[800px] flex overflow-hidden bg-brand-dark">
                {/* Diagonal orange background block for right side */}
                <div 
                    className="absolute right-0 top-0 w-1/2 h-full bg-brand-orange hidden lg:block z-0" 
                    style={{clipPath: 'polygon(20% 0, 100% 0, 100% 100%, 0% 100%)'}}
                ></div>

                {/* Decorative squares on left */}
                <div className="absolute left-[10%] top-[20%] w-4 h-4 bg-[#333] opacity-50 z-0"></div>
                <div className="absolute left-[5%] top-[60%] w-6 h-6 bg-[#333] opacity-50 z-0"></div>
                <div className="absolute left-[25%] bottom-[15%] w-8 h-8 bg-[#333] opacity-50 z-0"></div>

                {/* Main Hero Content Container */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative w-full h-full flex flex-col lg:flex-row items-center justify-between z-10">
                    
                    {/* Left text section */}
                    <div className="w-full lg:w-[55%] z-10 pt-20 lg:pt-0">
                        <div className="flex items-center gap-3 mb-8">
                            <span className="bg-brand-orange text-white px-3 py-1 text-xs font-bold tracking-wide uppercase">The Best</span>
                            <span className="text-white text-xs font-bold tracking-widest uppercase">Fitness Club</span>
                        </div>
                        <h1 className="text-5xl lg:text-[4.5rem] font-extrabold text-white leading-[1.1] mb-6">
                            Work Hard To <br/>Get Better Life
                        </h1>
                        <p className="text-slate-400 max-w-md text-base leading-relaxed mb-10">
                            Duis mattis felis quis libero dictum vehicula. Duis dictum lorem mi, a faucibus nisi eleifend eu.
                        </p>
                        <Link to="/register" className="bg-brand-orange hover:bg-white hover:text-brand-orange text-white font-bold py-3.5 px-8 rounded transition-all duration-300 inline-block">
                            GET STARTED
                        </Link>
                    </div>

                    {/* Right hero image & stats cards */}
                    <div className="hidden lg:flex w-[45%] relative h-full items-end justify-center z-10">
                        {/* Placeholder for the guy working out - replace src with real transparent PNG later */}
                        <div className="relative w-full h-[85%] flex items-end">
                            <img src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3" 
                                 alt="Fitness Hero" 
                                 className="object-cover object-top w-[90%] h-full mix-blend-luminosity opacity-80" 
                                 style={{maskImage: 'linear-gradient(to top, rgba(0,0,0,1) 80%, rgba(0,0,0,0) 100%)', WebkitMaskImage: 'linear-gradient(to top, rgba(0,0,0,1) 80%, rgba(0,0,0,0) 100%)'}}/>
                        </div>

                        {/* Floating Heart Rate card */}
                        <div className="absolute right-[5%] top-[40%] bg-[#1c1c1e] px-4 py-3 rounded-xl shadow-2xl flex items-center gap-3 border border-gray-800/50">
                            <div className="p-2 bg-red-500/20 rounded text-brand-orange">
                                <Heart size={20} fill="currentColor" />
                            </div>
                            <div>
                                <p className="text-[10px] uppercase text-slate-400 font-bold tracking-wider mb-0.5">Heart Rate</p>
                                <p className="text-white font-bold text-sm">100 bpm</p>
                            </div>
                        </div>

                        {/* Floating Calories card */}
                        <div className="absolute left-[-5%] bottom-[25%] bg-[#1c1c1e] px-4 py-3 rounded-xl shadow-2xl flex items-center gap-3 border border-gray-800/50">
                            <div className="flex gap-1 items-end h-6">
                                <div className="w-1.5 h-3 bg-brand-orange rounded-sm"></div>
                                <div className="w-1.5 h-6 bg-brand-orange rounded-sm"></div>
                                <div className="w-1.5 h-4 bg-brand-orange rounded-sm"></div>
                            </div>
                            <div>
                                <p className="text-[10px] uppercase text-slate-400 font-bold tracking-wider mb-0.5">Calories Burned</p>
                                <p className="text-white font-bold text-sm">100 bpm</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ABOUT US SECTION */}
            <section className="bg-white py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-16">
                    {/* Left Image grid */}
                    <div className="w-full lg:w-1/2 relative">
                        <div className="relative z-10 w-4/5 mx-auto lg:ml-auto bg-brand-orange pt-12 px-8 rounded-t-full rounded-b-[40px] shadow-xl overflow-hidden aspect-[4/5] flex items-end justify-center">
                           <img src="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&q=80&w=800" 
                                alt="Fitness Girl" 
                                className="w-[120%] max-w-none text-center self-end opacity-90 mix-blend-multiply" />
                            <h2 className="absolute bottom-6 left-1/2 -translate-x-1/2 text-7xl md:text-9xl font-black text-black/5 uppercase tracking-widest pointer-events-none whitespace-nowrap">Fitness</h2>
                        </div>
                    </div>

                    {/* Right Text */}
                    <div className="w-full lg:w-1/2">
                        <span className="text-brand-orange text-xs font-bold tracking-widest uppercase mb-4 block">About Us</span>
                        <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
                            Welcome To Our <br/>Fitness Gym
                        </h2>
                        <p className="text-slate-500 mb-6 text-sm leading-relaxed">
                            Namut hendrerit leo. Aenean vel ipsum nunc. Curabitur in tellus vitae nisi aliquet dapibus non et erat. Pellentesque porta sapien non accumsan dignissim curabitur sagittis nulla sit amet dolor feugiat.
                        </p>
                        <p className="text-slate-500 mb-8 text-sm leading-relaxed">
                            Integer placerat vitae metus posuere tincidunt. Nullam suscipit ante ac aliquet viverra vestibulum ante ipsum primis.
                        </p>
                        
                        <div className="flex items-center gap-6">
                            <div className="flex items-center gap-3">
                                <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Coach" className="w-12 h-12 rounded-full border-2 border-slate-100" />
                                <div>
                                    <h4 className="font-bold text-slate-900 text-sm">Denis Robinson</h4>
                                    <p className="text-xs text-slate-500">Our Coach</p>
                                </div>
                            </div>
                            <button className="bg-brand-orange hover:bg-[#e03a11] text-white font-bold py-3 px-8 transition-colors text-sm rounded uppercase tracking-wide shadow-lg shadow-brand-orange/20">
                                Explore More
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* EXPLORE FITNESS LIFE (VIDEO THUMBNAIL) SECTION */}
            <section className="relative w-full py-32 bg-brand-dark flex flex-col items-center justify-center text-center">
                <div className="absolute inset-0 z-0 opacity-20">
                    <img src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=1470" alt="bg" className="w-full h-full object-cover" />
                </div>
                <div className="relative z-10">
                    <h2 className="text-3xl font-bold text-white mb-8">Explore Fitness Life</h2>
                    <button 
                        onClick={() => setIsVideoOpen(true)}
                        className="w-20 h-20 bg-brand-orange rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform shadow-[0_0_30px_rgba(255,77,41,0.5)]"
                    >
                        <Play fill="currentColor" size={24} className="ml-1" />
                    </button>
                </div>
            </section>

            {/* Video Modal */}
            {isVideoOpen && (
                <div 
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
                    onClick={() => setIsVideoOpen(false)}
                >
                    <div 
                        className="relative w-full max-w-5xl aspect-video bg-black rounded-lg overflow-hidden shadow-2xl" 
                        onClick={e => e.stopPropagation()}
                    >
                        <button 
                            onClick={() => setIsVideoOpen(false)}
                            className="absolute top-4 right-4 text-white/80 hover:text-white bg-black/50 hover:bg-black/80 rounded-full w-10 h-10 flex items-center justify-center transition-all z-10"
                        >
                            ✕
                        </button>
                        <iframe 
                            className="w-full h-full"
                            src="https://www.youtube.com/embed/GsPvopOOyBs?autoplay=1" 
                            title="Fitness Video" 
                            frameBorder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            )}

            {/* CLASS CARDS SECTION */}
            <section className="bg-[#f9f9f9] py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <span className="text-brand-orange text-xs font-bold tracking-widest uppercase mb-4 block">Our Classes</span>
                    <h2 className="text-4xl font-extrabold text-slate-900 mb-16">Fitness Classes For Every Goal</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                        {/* Box 1 */}
                        <div className="bg-white p-8 group border border-slate-100 shadow-sm hover:shadow-xl hover:border-brand-orange transition-all duration-300 relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-1 bg-brand-orange scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                            <div className="w-14 h-14 bg-slate-50 flex items-center justify-center rounded mb-6 text-brand-orange group-hover:bg-brand-orange group-hover:text-white transition-colors">
                                <DumbbellIcon />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Weight Lifting</h3>
                            <p className="text-sm text-slate-500 mb-6">Class Full</p>
                            <Link to="/videos" className="text-xs font-bold tracking-wider uppercase text-slate-900 group-hover:text-brand-orange flex items-center gap-2">View Class &rarr;</Link>
                        </div>
                        {/* Box 2 */}
                        <div className="bg-white p-8 group border border-slate-100 shadow-sm hover:shadow-xl hover:border-brand-orange transition-all duration-300 relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-1 bg-brand-orange scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                            <div className="w-14 h-14 bg-slate-50 flex items-center justify-center rounded mb-6 text-brand-orange group-hover:bg-brand-orange group-hover:text-white transition-colors">
                                <Activity />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Cardio & Strength</h3>
                            <p className="text-sm text-slate-500 mb-6">Class Full</p>
                            <Link to="/videos" className="text-xs font-bold tracking-wider uppercase text-slate-900 group-hover:text-brand-orange flex items-center gap-2">View Class &rarr;</Link>
                        </div>
                        {/* Box 3 */}
                        <div className="bg-white p-8 group border border-slate-100 shadow-sm hover:shadow-xl hover:border-brand-orange transition-all duration-300 relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-1 bg-brand-orange scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                            <div className="w-14 h-14 bg-slate-50 flex items-center justify-center rounded mb-6 text-brand-orange group-hover:bg-brand-orange group-hover:text-white transition-colors">
                                <YogaIcon />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Power Yoga</h3>
                            <p className="text-sm text-slate-500 mb-6">Class Full</p>
                            <Link to="/videos" className="text-xs font-bold tracking-wider uppercase text-slate-900 group-hover:text-brand-orange flex items-center gap-2">View Class &rarr;</Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* PRICING SECTION */}
            <section className="bg-brand-dark py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <span className="text-brand-orange text-xs font-bold tracking-widest uppercase mb-4 block">Pricing Plan</span>
                    <h2 className="text-4xl font-extrabold text-white mb-16">Choose Your Membership</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                        {/* Plus Plan */}
                        <div className="bg-[#1c1c1e] p-8 rounded-xl border border-gray-800 hover:border-brand-orange transition-all duration-300 relative group flex flex-col">
                            <h3 className="text-xl font-bold text-white mb-2">Plus Plan</h3>
                            <div className="text-brand-orange text-4xl font-extrabold mb-6">$29<span className="text-sm text-slate-400 font-normal">/mo</span></div>
                            <ul className="space-y-4 mb-8 flex-grow">
                                <li className="flex items-center text-slate-400 text-sm"><span className="text-brand-orange mr-3">✓</span> Access to gym equipment</li>
                                <li className="flex items-center text-slate-400 text-sm"><span className="text-brand-orange mr-3">✓</span> Locker room access</li>
                                <li className="flex items-center text-slate-400 text-sm"><span className="text-brand-orange mr-3">✓</span> 1 Group class per week</li>
                            </ul>
                            <button className="w-full bg-transparent border border-brand-orange text-brand-orange hover:bg-brand-orange hover:text-white font-bold py-3 px-4 rounded transition-colors uppercase tracking-wider text-sm">Select Plan</button>
                        </div>
                        
                        {/* Pro Plan */}
                        <div className="bg-brand-orange p-8 rounded-xl border border-brand-orange transform md:-translate-y-4 shadow-2xl relative flex flex-col">
                            <div className="absolute top-0 right-0 bg-white text-brand-orange text-xs font-bold px-3 py-1 uppercase tracking-wider rounded-bl-lg rounded-tr-xl">Popular</div>
                            <h3 className="text-xl font-bold text-white mb-2">Pro Plan</h3>
                            <div className="text-white text-4xl font-extrabold mb-6">$49<span className="text-sm text-white/80 font-normal">/mo</span></div>
                            <ul className="space-y-4 mb-8 flex-grow">
                                <li className="flex items-center text-white text-sm"><span className="text-white font-bold mr-3">✓</span> Access to gym equipment</li>
                                <li className="flex items-center text-white text-sm"><span className="text-white font-bold mr-3">✓</span> Locker room access</li>
                                <li className="flex items-center text-white text-sm"><span className="text-white font-bold mr-3">✓</span> Unlimited group classes</li>
                                <li className="flex items-center text-white text-sm"><span className="text-white font-bold mr-3">✓</span> 1 Personal training session</li>
                            </ul>
                            <button className="w-full bg-white text-brand-orange hover:bg-gray-100 font-bold py-3 px-4 rounded transition-colors uppercase tracking-wider text-sm">Select Plan</button>
                        </div>
                        
                        {/* Premium Plan */}
                        <div className="bg-[#1c1c1e] p-8 rounded-xl border border-gray-800 hover:border-brand-orange transition-all duration-300 relative group flex flex-col">
                            <h3 className="text-xl font-bold text-white mb-2">Premium Plan</h3>
                            <div className="text-brand-orange text-4xl font-extrabold mb-6">$89<span className="text-sm text-slate-400 font-normal">/mo</span></div>
                            <ul className="space-y-4 mb-8 flex-grow">
                                <li className="flex items-center text-slate-400 text-sm"><span className="text-brand-orange mr-3">✓</span> Access to gym equipment</li>
                                <li className="flex items-center text-slate-400 text-sm"><span className="text-brand-orange mr-3">✓</span> VIP Locker room</li>
                                <li className="flex items-center text-slate-400 text-sm"><span className="text-brand-orange mr-3">✓</span> Unlimited group classes</li>
                                <li className="flex items-center text-slate-400 text-sm"><span className="text-brand-orange mr-3">✓</span> 4 Personal training sessions</li>
                                <li className="flex items-center text-slate-400 text-sm"><span className="text-brand-orange mr-3">✓</span> Nutrition consultation</li>
                            </ul>
                            <button className="w-full bg-transparent border border-brand-orange text-brand-orange hover:bg-brand-orange hover:text-white font-bold py-3 px-4 rounded transition-colors uppercase tracking-wider text-sm">Select Plan</button>
                        </div>
                    </div>
                </div>
            </section>

            {/* LATEST BLOG FEED SECTION */}
            <section className="bg-white py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <span className="text-brand-orange text-xs font-bold tracking-widest uppercase mb-4 block">Our News</span>
                    <h2 className="text-4xl font-extrabold text-slate-900 mb-16">Latest Blog Feed</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                        {/* Blog 1 */}
                        <div className="bg-white border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300">
                            <div className="w-full h-48 bg-[url('https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&q=80&w=600')] bg-cover bg-center relative">
                                <div className="absolute bottom-0 left-0 bg-brand-orange text-white text-[10px] font-bold px-3 py-1 uppercase tracking-wider">1 Nov 2023</div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-lg font-bold text-slate-900 mb-3 hover:text-brand-orange transition-colors cursor-pointer leading-tight">Tips for the Perfect Workout Routine</h3>
                                <p className="text-sm text-slate-500 mb-6 line-clamp-2">Mauris vel magna vehicula, luctus orci eget, eleifend ex. Pellentesque habitant morbi tristique senectus.</p>
                                <Link to="#" className="text-xs font-bold tracking-wider uppercase text-brand-orange hover:text-[#e03a11]">Read More</Link>
                            </div>
                        </div>

                        {/* Blog 2 */}
                        <div className="bg-white border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300">
                            <div className="w-full h-48 bg-[url('https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=600')] bg-cover bg-center relative">
                                <div className="absolute bottom-0 left-0 bg-brand-orange text-white text-[10px] font-bold px-3 py-1 uppercase tracking-wider">5 Nov 2023</div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-lg font-bold text-slate-900 mb-3 hover:text-brand-orange transition-colors cursor-pointer leading-tight">Post-workout Recovery Myths</h3>
                                <p className="text-sm text-slate-500 mb-6 line-clamp-2">Suspendisse accumsan consequat dolor in posuere. Class aptent taciti sociosqu ad litora torquent.</p>
                                <Link to="#" className="text-xs font-bold tracking-wider uppercase text-brand-orange hover:text-[#e03a11]">Read More</Link>
                            </div>
                        </div>

                        {/* Blog 3 */}
                        <div className="bg-white border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300">
                            <div className="w-full h-48 bg-[url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=600')] bg-cover bg-center relative">
                                <div className="absolute bottom-0 left-0 bg-brand-orange text-white text-[10px] font-bold px-3 py-1 uppercase tracking-wider">12 Nov 2023</div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-lg font-bold text-slate-900 mb-3 hover:text-brand-orange transition-colors cursor-pointer leading-tight">Nutrition Tips for Fast Muscle Growth</h3>
                                <p className="text-sm text-slate-500 mb-6 line-clamp-2">Aliquam erat volutpat. Integer malesuada, tortor eget tincidunt bibendum lectus.</p>
                                <Link to="#" className="text-xs font-bold tracking-wider uppercase text-brand-orange hover:text-[#e03a11]">Read More</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

// Quick custom icons to match styling
const DumbbellIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6.5 6.5h11"/><path d="M6.5 17.5h11"/><path d="m14 6.5-2 11"/><path d="m10 6.5 2 11"/><path d="M4 4h2v16H4z"/><path d="M18 4h2v16h-2z"/></svg>
);
const YogaIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="5" r="2"/><path d="m16 20-3-7-1-4-1 4-3 7"/><path d="m5 10 3 2 4-2 4 2 3-2"/></svg>
);

export default Home;
