
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { useAuth } from '../context/AuthContext';

const ProfilePage: React.FC = () => {
    const [activeTab, setActiveTab] = useState('library');
    const { user, isLoading, logout } = useAuth();
    const navigate = useNavigate();

    // Protect the route
    useEffect(() => {
        if (!isLoading && !user) {
            navigate('/signin');
        }
    }, [user, isLoading, navigate]);

    if (isLoading || !user) {
        return <div className="min-h-screen bg-background-dark flex items-center justify-center text-white">Loading...</div>;
    }

    return (
        <div className="bg-background-light dark:bg-background-dark font-display text-gray-800 dark:text-gray-200">
            <div className="relative flex min-h-screen w-full flex-col">
                <Navbar />

                <main className="w-full grow px-4 py-8 md:px-8">
                    <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 lg:grid-cols-12">
                        <aside className="lg:col-span-3">
                            <div className="sticky top-24 flex flex-col gap-6 rounded-xl border border-gray-300/20 bg-white/5 p-6 dark:bg-white/5">
                                <div className="flex w-full flex-col items-center gap-4 text-center">
                                    <div className="relative">
                                        <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full w-32 ring-4 ring-primary/20" style={{ backgroundImage: `url("${user.avatarUrl}")` }}></div>
                                    </div>
                                    <div className="flex flex-col justify-center">
                                        <p className="text-2xl font-bold text-gray-900 dark:text-white">{user.username}</p>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">Member since {user.memberSince}</p>
                                    </div>
                                </div>
                                <p className="text-center text-sm text-gray-600 dark:text-gray-300">{user.bio}</p>
                                <button 
                                    onClick={logout}
                                    className="w-full mt-2 py-2 border border-red-500/30 text-red-500 hover:bg-red-500/10 rounded-lg text-sm font-bold transition-colors"
                                >
                                    Sign Out
                                </button>
                            </div>
                        </aside>
                        <div className="lg:col-span-9">
                            <div className="border-b border-gray-300/20">
                                <div className="flex gap-2 sm:gap-6 px-1 sm:px-4">
                                    <button onClick={() => setActiveTab('library')} className={`flex flex-col items-center justify-center border-b-[3px] pb-3 pt-2 ${activeTab === 'library' ? 'border-b-primary' : 'border-b-transparent'}`}>
                                        <p className={`text-sm font-bold ${activeTab === 'library' ? 'text-primary' : 'text-gray-500 dark:text-gray-400 group-hover:text-primary'}`}>Library</p>
                                    </button>
                                    <button onClick={() => setActiveTab('wishlist')} className={`flex flex-col items-center justify-center border-b-[3px] pb-3 pt-2 ${activeTab === 'wishlist' ? 'border-b-primary' : 'border-b-transparent'}`}>
                                        <p className={`text-sm font-bold ${activeTab === 'wishlist' ? 'text-primary' : 'text-gray-500 dark:text-gray-400 group-hover:text-primary'}`}>Wishlist</p>
                                    </button>
                                </div>
                            </div>

                            <div className="py-6">
                                {activeTab === 'library' && (
                                    <>
                                        {user.library.length > 0 ? (
                                            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                                                {user.library.map(game => (
                                                    <div key={game.id} className="group relative aspect-[3/4] overflow-hidden rounded-xl bg-gray-800">
                                                        <img className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" alt={`Cover art for ${game.title}`} src={game.imageUrl} />
                                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                                                        <div className="absolute inset-0 flex flex-col justify-end p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                                            <h3 className="font-bold text-white leading-tight mb-2">{game.title}</h3>
                                                            <Link to={`/game/${game.id}`} className="flex w-full items-center justify-center rounded-lg bg-primary py-2 text-sm font-bold text-white hover:bg-primary/90">Play</Link>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        ) : (
                                            <div className="text-center py-16">
                                                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 dark:bg-gray-800 mb-4">
                                                    <span className="material-symbols-outlined text-gray-400 text-3xl">sports_esports</span>
                                                </div>
                                                <h3 className="text-lg font-medium text-gray-900 dark:text-white">Your library is empty</h3>
                                                <p className="mt-1 text-gray-500 dark:text-gray-400">Head over to the store to discover new games!</p>
                                                <Link to="/discover" className="mt-4 inline-flex items-center text-primary font-bold hover:underline">
                                                    Browse Games <span className="material-symbols-outlined text-sm ml-1">arrow_forward</span>
                                                </Link>
                                            </div>
                                        )}
                                    </>
                                )}
                                {activeTab === 'wishlist' && (
                                    <div className="text-center text-gray-400 py-16">
                                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 dark:bg-gray-800 mb-4">
                                            <span className="material-symbols-outlined text-gray-400 text-3xl">favorite</span>
                                        </div>
                                        <p>Your wishlist is empty.</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default ProfilePage;
