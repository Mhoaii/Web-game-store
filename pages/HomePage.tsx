
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Game } from '../types';
import GameCard from '../components/GameCard';
import Navbar from '../components/Navbar';

const HomePage: React.FC = () => {
    const [games, setGames] = useState<Game[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchGames = async () => {
            try {
                const response = await fetch('/api/games');
                const data = await response.json();
                setGames(data.games || []);
            } catch (error) {
                console.error('Error fetching games:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchGames();
    }, []);

    const featuredGames = games.slice(0, 6);
    const heroGame = games[0];

    if (loading) {
        return (
            <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden">
                <div className="layout-container flex h-full grow flex-col">
                    <Navbar transparent={true} />
                    <div className="flex items-center justify-center min-h-[400px]">
                        <div className="text-white text-xl">Loading games...</div>
                    </div>
                </div>
            </div>
        );
    }

    if (!heroGame) {
        return (
            <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden">
                <div className="layout-container flex h-full grow flex-col">
                    <Navbar transparent={true} />
                    <div className="flex items-center justify-center min-h-[400px]">
                        <div className="text-white text-xl text-center">
                            Chưa có game nào trong hệ thống
                            <br />
                            <Link to="/submit-game" className="text-primary hover:underline mt-4 inline-block">
                                Thêm game đầu tiên
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    return (
        <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden">
            <div className="layout-container flex h-full grow flex-col">
                <div className="flex flex-1 justify-center py-5">
                    <div className="layout-content-container flex w-full max-w-7xl flex-col px-0">
                        {/* TopNavBar - Using transparent variant for Home */}
                        <Navbar transparent={true} />

                        <main className="mt-8 flex flex-col gap-12 px-4 md:px-10 lg:px-20">
                            {/* HeroSection */}
                            <div className="@container">
                                <div className="@[480px]:p-0">
                                    <div className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-xl items-start justify-end px-4 pb-10 @[480px]:px-10" data-alt={`Promotional image for the game ${heroGame.name}`} style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.6) 100%), url("${heroGame.image_url || '/placeholder-game.jpg'}")` }}>
                                        <div className="flex flex-col gap-2 text-left">
                                            <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]">
                                                {heroGame.name}
                                            </h1>
                                            <h2 className="text-white/90 text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal max-w-2xl">
                                                {heroGame.description}
                                            </h2>
                                        </div>
                                        <div className="flex-wrap gap-3 flex">
                                            {heroGame.download_link ? (
                                                <a href={heroGame.download_link} target="_blank" rel="noopener noreferrer" className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em]">
                                                    <span className="truncate">Tải Game</span>
                                                </a>
                                            ) : (
                                                <span className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-gray-500 text-white text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em]">
                                                    <span className="truncate">Chưa có link tải</span>
                                                </span>
                                            )}
                                            <Link to={`/game/${heroGame.id}`} className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-white/10 backdrop-blur-md text-white text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em]">
                                                <span className="truncate">Chi tiết</span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Games Section */}
                            <section>
                                <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Tất cả Game</h2>
                                {featuredGames.length > 0 ? (
                                    <div className="grid grid-cols-[repeat(auto-fill,minmax(180px,1fr))] gap-4 p-4">
                                        {featuredGames.map(game => <GameCard key={game.id} game={game} />)}
                                    </div>
                                ) : (
                                    <div className="text-white text-center py-8 px-4">
                                        Chưa có game nào trong hệ thống
                                    </div>
                                )}
                            </section>
                            {/* Footer */}
                            <footer className="mt-16 border-t border-white/10 pt-8 pb-12 px-4">
                                <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
                                    <div className="flex flex-col gap-4 md:col-span-1">
                                        <div className="flex items-center gap-3">
                                            <div className="size-6 text-primary">
                                                <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M4 4H17.3334V17.3334H30.6666V30.6666H44V44H4V4Z" fill="currentColor"></path>
                                                </svg>
                                            </div>
                                            <h2 className="text-white text-xl font-bold">GameStore</h2>
                                        </div>
                                        <p className="text-gray-400 text-sm">The ultimate destination for gamers to discover, purchase, and play their favorite titles.</p>
                                    </div>
                                    <div className="md:col-span-1">
                                        <h3 className="font-bold text-white mb-4">Account</h3>
                                        <ul className="space-y-2">
                                            <li><Link className="text-gray-400 hover:text-white text-sm" to="/profile">Profile</Link></li>
                                            <li><Link className="text-gray-400 hover:text-white text-sm" to="/profile">Settings</Link></li>
                                            <li><Link className="text-gray-400 hover:text-white text-sm" to="/profile">Wishlist</Link></li>
                                            <li><Link className="text-gray-400 hover:text-white text-sm" to="/profile">My Games</Link></li>
                                        </ul>
                                    </div>
                                    <div className="md:col-span-1">
                                        <h3 className="font-bold text-white mb-4">Company</h3>
                                        <ul className="space-y-2">
                                            <li><Link className="text-gray-400 hover:text-white text-sm" to="/about">About Us</Link></li>
                                            <li><Link className="text-gray-400 hover:text-white text-sm" to="#">Careers</Link></li>
                                            <li><Link className="text-gray-400 hover:text-white text-sm" to="#">Support</Link></li>
                                            <li><Link className="text-gray-400 hover:text-white text-sm" to="/about">Terms of Service</Link></li>
                                        </ul>
                                    </div>
                                    <div className="md:col-span-1">
                                        <h3 className="font-bold text-white mb-4">For Developers</h3>
                                        <ul className="space-y-2">
                                            <li><Link className="text-gray-400 hover:text-white text-sm" to="/submit">Submit a Game</Link></li>
                                            <li><Link className="text-gray-400 hover:text-white text-sm" to="/guide">Developer Guide</Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="mt-8 border-t border-white/10 pt-6 text-center text-sm text-gray-500">
                                    <p>© 2025 GameStore. All Rights Reserved.</p>
                                </div>
                            </footer>
                        </main>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
