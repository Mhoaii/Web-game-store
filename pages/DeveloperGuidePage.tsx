
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

const DeveloperGuidePage: React.FC = () => {

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
        e.preventDefault();
        const element = document.getElementById(targetId);
        if (element) {
            const headerOffset = 80; // height of sticky header
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
    };


    return (
        <div className="bg-background-light dark:bg-background-dark font-display text-[#343A40] dark:text-gray-300">
            <div className="relative flex min-h-screen w-full flex-col">
                <Navbar />
                <div className="container mx-auto flex flex-1 max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex w-full flex-col md:flex-row gap-8 lg:gap-12 py-8">
                        <aside className="w-full md:w-64 lg:w-72 md:sticky top-24 self-start">
                            <nav className="flex flex-col gap-1 p-4 bg-white dark:bg-background-dark border border-gray-200 dark:border-[#282e39] rounded-xl">
                                <a href="#prepare-assets" onClick={(e) => handleNavClick(e, 'prepare-assets')} className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-[#282e39]/50 transition-colors"><span className="material-symbols-outlined text-gray-500 dark:text-gray-400">photo_library</span><p className="text-sm font-medium text-gray-600 dark:text-gray-300">1. Preparing Your Assets</p></a>
                                <a href="#submission-form" onClick={(e) => handleNavClick(e, 'submission-form')} className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-[#282e39]/50 transition-colors"><span className="material-symbols-outlined text-gray-500 dark:text-gray-400">description</span><p className="text-sm font-medium text-gray-600 dark:text-gray-300">2. The Submission Form</p></a>
                                <a href="#review-process" onClick={(e) => handleNavClick(e, 'review-process')} className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-[#282e39]/50 transition-colors"><span className="material-symbols-outlined text-gray-500 dark:text-gray-400">thumb_up</span><p className="text-sm font-medium text-gray-600 dark:text-gray-300">3. The Review Process</p></a>
                                <a href="#best-practices" onClick={(e) => handleNavClick(e, 'best-practices')} className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-[#282e39]/50 transition-colors"><span className="material-symbols-outlined text-gray-500 dark:text-gray-400">star</span><p className="text-sm font-medium text-gray-600 dark:text-gray-300">4. Best Practices</p></a>
                                <a href="#faq" onClick={(e) => handleNavClick(e, 'faq')} className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-[#282e39]/50 transition-colors"><span className="material-symbols-outlined text-gray-500 dark:text-gray-400">help_outline</span><p className="text-sm font-medium text-gray-600 dark:text-gray-300">5. FAQ</p></a>
                            </nav>
                        </aside>
                        <main className="flex-1">
                            <section className="flex flex-wrap items-center justify-between gap-4 border-b border-gray-200 dark:border-[#282e39] pb-8 mb-8">
                                <div className="flex min-w-72 flex-col gap-3">
                                    <p className="text-4xl font-black leading-tight tracking-[-0.033em] text-gray-900 dark:text-white">Guide to Uploading Your Game</p>
                                    <p className="text-base font-normal leading-normal text-gray-600 dark:text-[#9da6b9]">A complete step-by-step guide to preparing, submitting, and launching your game on our platform.</p>
                                </div>
                                <Link to="/submit" className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors"><span className="truncate">Start New Submission</span></Link>
                            </section>
                            <section className="space-y-4 mb-12 scroll-mt-24" id="prepare-assets">
                                <h2 className="text-2xl font-bold leading-tight tracking-[-0.015em] text-gray-900 dark:text-white">1. Preparing Your Assets</h2>
                                <p className="text-base font-normal leading-relaxed">Before you begin the submission process, it's crucial to have all your assets ready. This section covers the requirements for your game build, store assets like icons and screenshots, and other technical specifications.</p>
                            </section>
                            <section className="space-y-4 mb-12 scroll-mt-24" id="submission-form">
                                <h2 className="text-2xl font-bold leading-tight tracking-[-0.015em] text-gray-900 dark:text-white">2. The Submission Form</h2>
                                <p className="text-base font-normal leading-relaxed">Our submission form is designed to be straightforward. Provide accurate and compelling information to attract players. Pay close attention to your game's description and tags, as they are key to discovery.</p>
                            </section>
                            <section className="space-y-4 mb-12 scroll-mt-24" id="review-process">
                                <h2 className="text-2xl font-bold leading-tight tracking-[-0.015em] text-gray-900 dark:text-white">3. The Review Process</h2>
                                <p className="text-base font-normal leading-relaxed">After you submit your game, our team will review it to ensure it meets our platform guidelines. This process typically takes 3-5 business days. You will be notified via email of the outcome.</p>
                            </section>
                             <section className="space-y-4 mb-12 scroll-mt-24" id="best-practices">
                                <h2 className="text-2xl font-bold leading-tight tracking-[-0.015em] text-gray-900 dark:text-white">4. Best Practices &amp; Promotion</h2>
                                <p className="text-base font-normal leading-relaxed">Getting your game on the store is just the first step. To succeed, engage with the community, market your game effectively, and keep it updated with new content.</p>
                            </section>
                            <section className="space-y-4 scroll-mt-24" id="faq">
                                <h2 className="text-2xl font-bold leading-tight tracking-[-0.015em] text-gray-900 dark:text-white">5. Frequently Asked Questions</h2>
                                <div className="space-y-2">
                                    <details className="group rounded-lg bg-gray-100 dark:bg-[#191e2a] p-4 cursor-pointer"><summary className="flex justify-between items-center font-medium text-gray-800 dark:text-gray-200">What is the revenue share model?<span className="material-symbols-outlined transition-transform group-open:rotate-180">expand_more</span></summary><p className="text-gray-600 dark:text-gray-400 mt-3">We operate on a standard 70/30 revenue split, where you, the developer, receive 70% of the net revenue from your game sales.</p></details>
                                    <details className="group rounded-lg bg-gray-100 dark:bg-[#191e2a] p-4 cursor-pointer"><summary className="flex justify-between items-center font-medium text-gray-800 dark:text-gray-200">Can I update my game after it's published?<span className="material-symbols-outlined transition-transform group-open:rotate-180">expand_more</span></summary><p className="text-gray-600 dark:text-gray-400 mt-3">Yes, absolutely! You can submit updates for your game at any time through the developer dashboard. Updates go through a similar, but expedited, review process.</p></details>
                                </div>
                            </section>
                        </main>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeveloperGuidePage;
