
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { useAuth } from '../context/AuthContext';

const SubmitGamePage: React.FC = () => {
    const [gameName, setGameName] = useState('');
    const [description, setDescription] = useState('');
    const [downloadLink, setDownloadLink] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState('');
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

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError('');

        if (!gameName.trim() || !description.trim()) {
            setError('Game name and description are required');
            setIsSubmitting(false);
            return;
        }

        try {
            const response = await fetch('/api/games/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: gameName.trim(),
                    description: description.trim(),
                    download_link: downloadLink.trim() || null,
                    image_url: imageUrl.trim() || null,
                }),
            });

            if (response.ok) {
                navigate('/');
            } else {
                const errorData = await response.json();
                setError(errorData.error || 'Failed to submit game');
            }
        } catch (err) {
            setError('Network error. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
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
                            <form onSubmit={handleSubmit} className="bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-xl p-6">
                                <h2 className="text-slate-900 dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em] pb-5">Game Details</h2>
                                {error && (
                                    <div className="mb-4 p-3 bg-red-100 dark:bg-red-900/20 border border-red-300 dark:border-red-700 rounded-lg text-red-700 dark:text-red-400">
                                        {error}
                                    </div>
                                )}
                                <div className="flex flex-col gap-6">
                                    <label className="flex flex-col">
                                        <p className="text-slate-800 dark:text-white text-base font-medium leading-normal pb-2">Game Name *</p>
                                        <input
                                            type="text"
                                            value={gameName}
                                            onChange={(e) => setGameName(e.target.value)}
                                            className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-slate-900 dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:border-primary h-12 placeholder:text-slate-400 dark:placeholder:text-slate-500 p-3 text-base font-normal leading-normal"
                                            placeholder="Enter your game's title"
                                            required
                                        />
                                    </label>
                                    <label className="flex flex-col">
                                        <p className="text-slate-800 dark:text-white text-base font-medium leading-normal pb-2">Detailed Description *</p>
                                        <textarea
                                            value={description}
                                            onChange={(e) => setDescription(e.target.value)}
                                            className="form-textarea flex w-full min-w-0 flex-1 resize-y overflow-hidden rounded-lg text-slate-900 dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:border-primary min-h-[150px] placeholder:text-slate-400 dark:placeholder:text-slate-500 p-3 text-base font-normal leading-normal"
                                            placeholder="Describe your game in detail..."
                                            required
                                        />
                                    </label>
                                    <label className="flex flex-col">
                                        <p className="text-slate-800 dark:text-white text-base font-medium leading-normal pb-2">Download Link</p>
                                        <input
                                            type="url"
                                            value={downloadLink}
                                            onChange={(e) => setDownloadLink(e.target.value)}
                                            className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-slate-900 dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:border-primary h-12 placeholder:text-slate-400 dark:placeholder:text-slate-500 p-3 text-base font-normal leading-normal"
                                            placeholder="https://example.com/download"
                                        />
                                    </label>
                                    <label className="flex flex-col">
                                        <p className="text-slate-800 dark:text-white text-base font-medium leading-normal pb-2">Image URL</p>
                                        <input
                                            type="url"
                                            value={imageUrl}
                                            onChange={(e) => setImageUrl(e.target.value)}
                                            className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-slate-900 dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:border-primary h-12 placeholder:text-slate-400 dark:placeholder:text-slate-500 p-3 text-base font-normal leading-normal"
                                            placeholder="https://example.com/image.jpg"
                                        />
                                    </label>
                                </div>
                                <div className="flex justify-end gap-4 mt-6">
                                    <button
                                        type="button"
                                        onClick={() => navigate('/')}
                                        className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors"
                                    >
                                        <span className="truncate">Cancel</span>
                                    </button>
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        <span className="truncate">{isSubmitting ? 'Submitting...' : 'Submit Game'}</span>
                                    </button>
                                </div>
                            </form>
                        </div>
                        <div className="lg:col-span-1">
                            <div className="sticky top-28">
                                <h3 className="text-slate-900 dark:text-white text-lg font-bold mb-4">Live Preview</h3>
                                <div className="w-full aspect-[9/16] bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-xl p-4 flex flex-col overflow-hidden">
                                    <div className="w-full aspect-video bg-slate-200 dark:bg-slate-800 rounded-lg flex items-center justify-center mb-4 overflow-hidden">
                                        {imageUrl ? (
                                            <img src={imageUrl} alt="Game preview" className="w-full h-full object-cover" />
                                        ) : (
                                            <span className="material-symbols-outlined text-4xl text-slate-400 dark:text-slate-500">image</span>
                                        )}
                                    </div>
                                    <div className="flex items-start gap-4 mb-4">
                                        <div className="size-16 bg-slate-200 dark:bg-slate-800 rounded-lg flex-shrink-0 flex items-center justify-center">
                                            {imageUrl ? (
                                                <img src={imageUrl} alt="Game icon" className="w-full h-full object-cover rounded-lg" />
                                            ) : (
                                                <span className="material-symbols-outlined text-2xl text-slate-400 dark:text-slate-500">gamepad</span>
                                            )}
                                        </div>
                                        <div className="flex-grow">
                                            <div className="h-6 bg-slate-200 dark:bg-slate-800 rounded mb-2 flex items-center px-2">
                                                <span className="text-slate-900 dark:text-white text-sm font-medium">{gameName || 'Game Title'}</span>
                                            </div>
                                            <div className="h-4 bg-slate-200 dark:bg-slate-800 rounded flex items-center px-2">
                                                <span className="text-slate-500 dark:text-slate-400 text-xs">by Developer</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex gap-2 mb-4">
                                        <div className="h-6 bg-primary/20 rounded-full flex items-center px-3">
                                            <span className="text-primary text-sm font-medium">Action</span>
                                        </div>
                                        <div className="h-6 bg-primary/20 rounded-full flex items-center px-3">
                                            <span className="text-primary text-sm font-medium">Adventure</span>
                                        </div>
                                    </div>
                                    <div className="space-y-2 flex-grow">
                                        <div className="h-4 bg-slate-200 dark:bg-slate-800 rounded flex items-center px-2">
                                            <span className="text-slate-600 dark:text-slate-300 text-sm">{description || 'Game description will appear here...'}</span>
                                        </div>
                                    </div>
                                    <div className="mt-auto pt-4">
                                        <div className="h-12 bg-primary rounded-lg flex items-center justify-center">
                                            <span className="text-white text-sm font-bold">Chi tiết</span>
                                        </div>
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
