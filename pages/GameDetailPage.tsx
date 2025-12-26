
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Game } from '../types';
import Navbar from '../components/Navbar';
  

const GameDetailPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [game, setGame] = useState<Game | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchGame = async () => {
            if (!id) return;

            try {
                // First try to find the game in the games list
                const response = await fetch('/api/games');
                const data = await response.json();
                const foundGame = data.games?.find((g: Game) => g.id === id);

                if (foundGame) {
                    setGame(foundGame);
                } else {
                    setError('Game not found');
                }
            } catch (err) {
                console.error('Error fetching game:', err);
                setError('Failed to load game details');
            } finally {
                setLoading(false);
            }
        };

        fetchGame();
    }, [id]);

    if (loading) {
        return (
            <div className="bg-background-light dark:bg-background-dark font-display text-gray-800 dark:text-gray-200">
                <div className="relative flex h-auto min-h-screen w-full flex-col">
                    <Navbar />
                    <div className="flex items-center justify-center min-h-[400px]">
                        <div className="text-white text-xl">Loading game details...</div>
                    </div>
                </div>
            </div>
        );
    }

    if (error || !game) {
        return (
            <div className="bg-background-light dark:bg-background-dark font-display text-gray-800 dark:text-gray-200">
                <div className="relative flex h-auto min-h-screen w-full flex-col">
                    <Navbar />
                    <div className="flex items-center justify-center min-h-[400px]">
                        <div className="text-white text-xl">{error || 'Game not found'}</div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-background-light dark:bg-background-dark font-display text-gray-800 dark:text-gray-200">
            <div className="relative flex h-auto min-h-screen w-full flex-col">
                <Navbar />

                <main className="flex flex-1 justify-center py-5 sm:py-8 lg:py-12">
                    <div className="layout-content-container flex w-full max-w-7xl flex-col gap-8 px-4 sm:px-6 lg:px-8">
                        <div className="flex flex-wrap gap-2">
                            <Link className="text-[#9da6b9] hover:text-white text-sm font-medium leading-normal transition-colors" to="/">Store</Link>
                            <span className="text-[#9da6b9] text-sm font-medium leading-normal">/</span>
                            <Link className="text-[#9da6b9] hover:text-white text-sm font-medium leading-normal transition-colors" to="/discover">Action Games</Link>
                            <span className="text-[#9da6b9] text-sm font-medium leading-normal">/</span>
                            <span className="text-white text-sm font-medium leading-normal">{game.name}</span>
                        </div>

                        <section className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                            <div className="flex flex-col gap-6 lg:col-span-2">
                                <div className="relative w-full aspect-video rounded-xl overflow-hidden">
                                    <div className="w-full h-full bg-center bg-no-repeat bg-cover" style={{ backgroundImage: `url("${game.banner_url || game.image_url || '/placeholder-game.jpg'}")` }}></div>
                                </div>
                                <div className="flex flex-col gap-4">
                                    <div className="flex items-center justify-between">
                                        <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em]">{game.name}</h1>
                                        { (game.download_link || game.experience_link) && (
                                            <div className="flex gap-3">
                                                {game.download_link && (
                                                    <a href={game.download_link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors">
                                                        <span className="material-symbols-outlined !text-lg">download</span>
                                                        <span>Tải Game</span>
                                                    </a>
                                                )}
                                                {game.experience_link && (
                                                    <a href={game.experience_link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                                                        <span className="material-symbols-outlined !text-lg">play_arrow</span>
                                                        <span>Trải nghiệm</span>
                                                    </a>
                                                )}
                                            </div>
                                        )}
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <h2 className="text-white text-xl font-bold">Mô tả</h2>
                                        <p className="text-[#9da6b9] text-base leading-relaxed whitespace-pre-wrap">{game.description}</p>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <h2 className="text-white text-xl font-bold">Thông tin</h2>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                                            <div className="flex justify-between border-b border-white/10 pb-2">
                                                <span className="text-gray-400">Ngày tạo</span>
                                                <span className="font-medium text-white">{new Date(game.created_at).toLocaleDateString('vi-VN')}</span>
                                            </div>
                                            {game.download_link && (
                                                <div className="flex justify-between border-b border-white/10 pb-2">
                                                    <span className="text-gray-400">Link tải</span>
                                                    <a href={game.download_link} target="_blank" rel="noopener noreferrer" className="font-medium text-primary hover:underline">Có sẵn</a>
                                                </div>
                                            )}
                                            {game.experience_link && (
                                                <div className="flex justify-between border-b border-white/10 pb-2">
                                                    <span className="text-gray-400">Link trải nghiệm</span>
                                                    <a href={game.experience_link} target="_blank" rel="noopener noreferrer" className="font-medium text-primary hover:underline">Có sẵn</a>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default GameDetailPage;
