
import React from 'react';
import { games } from '../constants';
import GameCard from '../components/GameCard';
import Navbar from '../components/Navbar';

const DiscoverPage: React.FC = () => {
    return (
        <div className="bg-background-light dark:bg-background-dark font-display">
            <div className="relative flex min-h-screen w-full flex-col group/design-root overflow-x-hidden">
                <div className="layout-container flex h-full grow flex-col">
                    <Navbar />
                    <main className="flex-1 px-4 py-8 sm:px-6 lg:px-8">
                        <div className="mx-auto flex max-w-7xl flex-col gap-8">
                            <div className="flex flex-wrap items-center justify-between gap-4">
                                <div className="flex flex-col gap-2">
                                    <h1 className="text-zinc-900 dark:text-white text-4xl font-black leading-tight tracking-[-0.033em]">Discover Games</h1>
                                    <p className="text-zinc-600 dark:text-zinc-400 text-base font-normal leading-normal">Explore a vast library of games, curated just for you.</p>
                                </div>
                            </div>
                            <div className="grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-6">
                                {games.map(game => <GameCard key={game.id} game={game} variant="discover" />)}
                            </div>
                            <div className="flex items-center justify-center gap-2 pt-8">
                                <button className="flex size-10 items-center justify-center rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-700 transition-colors">
                                    <span className="material-symbols-outlined">chevron_left</span>
                                </button>
                                <button className="flex size-10 items-center justify-center rounded-lg bg-primary text-white text-sm font-bold">1</button>
                                <button className="flex size-10 items-center justify-center rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white hover:bg-zinc-100 dark:hover:bg-zinc-700 transition-colors text-sm font-medium">2</button>
                                <button className="flex size-10 items-center justify-center rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white hover:bg-zinc-100 dark:hover:bg-zinc-700 transition-colors text-sm font-medium">3</button>
                                <span className="text-zinc-500 dark:text-zinc-400">...</span>
                                <button className="flex size-10 items-center justify-center rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white hover:bg-zinc-100 dark:hover:bg-zinc-700 transition-colors text-sm font-medium">10</button>
                                <button className="flex size-10 items-center justify-center rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-700 transition-colors">
                                    <span className="material-symbols-outlined">chevron_right</span>
                                </button>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
};

export default DiscoverPage;
