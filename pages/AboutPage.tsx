
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';


const AboutPage: React.FC = () => {
    return (
        <div className="bg-background-light dark:bg-background-dark font-display text-gray-800 dark:text-gray-200">
            <div className="relative flex min-h-screen w-full flex-col">
                <Navbar />
                <main className="w-full grow px-4 py-8 md:px-8">
                    <div className="mx-auto max-w-4xl">
                        <div className="flex flex-col items-center text-center">
                            <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">Welcome to GameStore</h1>
                            <p className="mt-4 max-w-2xl text-lg text-gray-600 dark:text-gray-300">Your ultimate destination for discovering and playing the best web games. Dive into a universe of instant entertainment, right from your browser.</p>
                        </div>
                        <div className="mt-12 flex flex-col gap-12">
                            <section className="rounded-xl border border-gray-300/20 bg-white/5 p-8 dark:bg-white/5">
                                <h2 className="text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl">Our Platform Functions</h2>
                                <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
                                    <div className="flex gap-4">
                                        <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary"><span className="material-symbols-outlined">rocket_launch</span></div>
                                        <div>
                                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Instant Play</h3>
                                            <p className="mt-1 text-gray-600 dark:text-gray-400">No downloads, no installations. Click and play your favorite games instantly.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary"><span className="material-symbols-outlined">explore</span></div>
                                        <div>
                                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Curated Discovery</h3>
                                            <p className="mt-1 text-gray-600 dark:text-gray-400">Discover new games every day through our curated lists and recommendations.</p>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <section>
                                <h2 className="text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl">Our Mission</h2>
                                <p className="mt-4 text-gray-600 dark:text-gray-300">At GameStore, our objective is to create an accessible, inclusive, and enjoyable ecosystem for web game players and developers. We aim to break down the barriers to gaming by providing a platform where anyone can instantly access a vast library of high-quality games.</p>
                            </section>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default AboutPage;
