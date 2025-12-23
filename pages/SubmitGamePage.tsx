
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { useAuth } from '../context/AuthContext';

const SubmitGamePage: React.FC = () => {
    const [genres, setGenres] = useState<string[]>(['RPG', 'Strategy']);
    const [genreInput, setGenreInput] = useState('');
    const { user, isLoading } = useAuth();
    const navigate = useNavigate();

    // Protect Route
    useEffect(() => {
        if (!isLoading && !user) {
            navigate('/signin');
        }
    }, [user, isLoading, navigate]);

    if (isLoading || !user) {
        return <div className="min-h-screen bg-background-dark flex items-center justify-center text-white">Loading...</div>;
    }

    const handleGenreKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && genreInput.trim() !== '') {
            e.preventDefault();
            if (!genres.includes(genreInput.trim())) {
                setGenres([...genres, genreInput.trim()]);
            }
            setGenreInput('');
        }
    };

    const removeGenre = (genreToRemove: string) => {
        setGenres(genres.filter(genre => genre !== genreToRemove));
    };
    
    return (
        <div className="bg-background-light dark:bg-background-dark font-display">
            <div className="relative flex h-auto min-h-screen w-full flex-col">
                <Navbar />
                <main className="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-8 py-10">
                    <div className="flex flex-wrap justify-between items-start gap-4 mb-10">
                        <div className="flex min-w-72 flex-col gap-2">
                            <p className="text-slate-900 dark:text-white text-4xl font-black leading-tight tracking-[-0.033em]">Submit a New Game</p>
                            <p className="text-slate-500 dark:text-slate-400 text-base font-normal leading-normal">Fill in the details below to get your game ready for review.</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <div className="lg:col-span-2 flex flex-col gap-8">
                            <div className="bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-xl p-6">
                                <h2 className="text-slate-900 dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em] pb-5">Game Details</h2>
                                <div className="flex flex-col gap-6">
                                    <label className="flex flex-col">
                                        <p className="text-slate-800 dark:text-white text-base font-medium leading-normal pb-2">Game Name</p>
                                        <input className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-slate-900 dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:border-primary h-12 placeholder:text-slate-400 dark:placeholder:text-slate-500 p-3 text-base font-normal leading-normal" placeholder="Enter your game's title" />
                                    </label>
                                    <label className="flex flex-col">
                                        <p className="text-slate-800 dark:text-white text-base font-medium leading-normal pb-2">Detailed Description</p>
                                        <textarea className="form-textarea flex w-full min-w-0 flex-1 resize-y overflow-hidden rounded-lg text-slate-900 dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:border-primary min-h-[150px] placeholder:text-slate-400 dark:placeholder:text-slate-500 p-3 text-base font-normal leading-normal" placeholder="Describe your game in detail..."></textarea>
                                    </label>
                                </div>
                            </div>
                            <div className="bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-xl p-6">
                                <h2 className="text-slate-900 dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em] pb-5">Categorization</h2>
                                <label className="flex flex-col">
                                    <div className="flex items-center gap-2 pb-2">
                                        <p className="text-slate-800 dark:text-white text-base font-medium leading-normal">Game Type/Genre</p>
                                        <span className="material-symbols-outlined text-slate-400 dark:text-slate-500 text-base cursor-help" title="Select multiple genres that best fit your game.">help</span>
                                    </div>
                                    <div className="flex flex-wrap gap-2 p-3 border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 rounded-lg min-h-[48px] items-center">
                                        {genres.map(genre => (
                                            <span key={genre} className="flex items-center gap-1 bg-primary/20 text-primary text-sm font-medium px-2 py-1 rounded-full">
                                                {genre}
                                                <button onClick={() => removeGenre(genre)} className="material-symbols-outlined !text-sm">close</button>
                                            </span>
                                        ))}
                                        <input value={genreInput} onChange={(e) => setGenreInput(e.target.value)} onKeyDown={handleGenreKeyDown} className="form-input bg-transparent border-none p-0 focus:ring-0 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 flex-1" placeholder="Add genre..." />
                                    </div>
                                </label>
                            </div>
                            <div className="flex justify-end gap-4 mt-4">
                                <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-white text-sm font-bold leading-normal tracking-[0.015em]">
                                    <span className="truncate">Save as Draft</span>
                                </button>
                                <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em]">
                                    <span className="truncate">Submit for Review</span>
                                </button>
                            </div>
                        </div>
                        <div className="lg:col-span-1">
                            <div className="sticky top-28">
                                <h3 className="text-slate-900 dark:text-white text-lg font-bold mb-4">Live Preview</h3>
                                <div className="w-full aspect-[9/16] bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-xl p-4 flex flex-col overflow-hidden">
                                    <div className="w-full aspect-video bg-slate-200 dark:bg-slate-800 rounded-lg flex items-center justify-center mb-4">
                                        <span className="material-symbols-outlined text-4xl text-slate-400 dark:text-slate-500">videocam</span>
                                    </div>
                                    <div className="flex items-start gap-4 mb-4">
                                        <div className="size-16 bg-slate-200 dark:bg-slate-800 rounded-lg flex-shrink-0"></div>
                                        <div className="flex-grow">
                                            <div className="h-6 w-3/4 bg-slate-200 dark:bg-slate-800 rounded mb-2"></div>
                                            <div className="h-4 w-1/2 bg-slate-200 dark:bg-slate-800 rounded"></div>
                                        </div>
                                    </div>
                                    <div className="flex gap-2 mb-4">
                                        <div className="h-6 w-16 bg-slate-200/50 dark:bg-slate-800/50 rounded-full"></div>
                                        <div className="h-6 w-20 bg-slate-200/50 dark:bg-slate-800/50 rounded-full"></div>
                                    </div>
                                    <div className="space-y-2 flex-grow">
                                        <div className="h-4 w-full bg-slate-200 dark:bg-slate-800 rounded"></div>
                                        <div className="h-4 w-full bg-slate-200 dark:bg-slate-800 rounded"></div>
                                        <div className="h-4 w-3/4 bg-slate-200 dark:bg-slate-800 rounded"></div>
                                    </div>
                                    <div className="mt-auto pt-4">
                                        <div className="h-12 w-full bg-primary/30 rounded-lg"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default SubmitGamePage;
