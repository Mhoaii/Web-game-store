
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { detailedGame, reviews } from '../constants';
import Navbar from '../components/Navbar';

const StarRating = ({ rating }: { rating: number }) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
  
    return (
      <div className="flex items-center text-yellow-400">
        {[...Array(fullStars)].map((_, i) => (
          <span key={`full-${i}`} className="material-symbols-outlined !text-base">star</span>
        ))}
        {halfStar && <span className="material-symbols-outlined !text-base">star_half</span>}
        {[...Array(emptyStars)].map((_, i) => (
          <span key={`empty-${i}`} className="material-symbols-outlined !text-base text-gray-500">star</span>
        ))}
      </div>
    );
  };
  

const GameDetailPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const game = detailedGame; // In a real app, you'd use the id to fetch the game data.
    const [readMore, setReadMore] = useState(false);

    if (!game) {
        return <div className="flex items-center justify-center h-screen text-white">Game not found.</div>;
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
                            <span className="text-white text-sm font-medium leading-normal">{game.title}</span>
                        </div>

                        <section className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                            <div className="flex flex-col gap-6 lg:col-span-2">
                                <div className="relative flex aspect-video w-full items-center justify-center overflow-hidden rounded-xl bg-black">
                                    <img alt="Gameplay footage from Cyberpunk Odyssey" className="absolute inset-0 h-full w-full object-cover opacity-70" src={game.trailerImageUrl} />
                                    <div className="relative z-10 flex flex-col items-center">
                                        <button className="flex shrink-0 items-center justify-center rounded-full size-16 bg-black/50 text-white backdrop-blur-sm transition-transform hover:scale-110">
                                            <span className="material-symbols-outlined !text-4xl">play_arrow</span>
                                        </button>
                                        <p className="mt-2 text-white text-lg font-bold">Watch Trailer</p>
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                                    {game.media?.map((img, index) => (
                                        <div key={index} className="bg-center bg-no-repeat aspect-video bg-cover rounded-lg" style={{ backgroundImage: `url('${img}')` }}></div>
                                    ))}
                                </div>
                            </div>
                            <aside className="flex flex-col gap-6 lg:col-span-1">
                                <div className="flex flex-col gap-3">
                                    <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em]">{game.title}</h1>
                                    <p className="text-[#9da6b9] text-base font-normal leading-normal">{game.developer}</p>
                                </div>
                                <div className="flex gap-2 flex-wrap">
                                    {game.tags?.map(tag => (
                                        <div key={tag} className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-white/10 px-3">
                                            <p className="text-white text-sm font-medium leading-normal">{tag}</p>
                                        </div>
                                    ))}
                                </div>
                                <div className="flex flex-col gap-4 rounded-xl bg-white/5 p-4">
                                    <div className="flex items-baseline justify-between">
                                        <p className="text-2xl font-bold text-white">{game.price}</p>
                                        <div className="flex items-center gap-1">
                                            <span className="material-symbols-outlined text-yellow-400 !text-xl">star</span>
                                            <span className="text-white font-semibold">{game.rating}</span>
                                            <span className="text-gray-400 text-sm">({game.reviewCount?.toLocaleString()})</span>
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-3">
                                        <button className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors">
                                            <span className="truncate">Buy Now</span>
                                        </button>
                                        <button className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-white/10 text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-white/20 transition-colors">
                                            <span className="truncate">Add to Wishlist</span>
                                        </button>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-3 text-sm">
                                    <div className="flex justify-between border-b border-white/10 pb-2">
                                        <span className="text-gray-400">Release Date</span>
                                        <span className="font-medium text-white">{game.releaseDate}</span>
                                    </div>
                                    <div className="flex justify-between border-b border-white/10 pb-2">
                                        <span className="text-gray-400">Publisher</span>
                                        <span className="font-medium text-white">{game.publisher}</span>
                                    </div>
                                    <div className="flex justify-between pb-2">
                                        <span className="text-gray-400">Platforms</span>
                                        <div className="flex gap-2 items-center">
                                            {game.platforms?.includes('windows') && <span className="material-symbols-outlined !text-lg text-white">desktop_windows</span>}
                                            {game.platforms?.includes('mac') && <span className="material-symbols-outlined !text-lg text-white">laptop_mac</span>}
                                        </div>
                                    </div>
                                </div>
                            </aside>
                        </section>

                        <section className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                            <div className="lg:col-span-2">
                                <div className="py-6">
                                    <h2 className="text-2xl font-bold text-white mb-4">About This Game</h2>
                                    <div className="space-y-4 text-gray-300 leading-relaxed">
                                        <p>{game.longDescription?.intro}</p>
                                        <p>{game.longDescription?.features}</p>
                                        {readMore && <div className="mt-4 space-y-4"><p>{game.longDescription?.details}</p></div>}
                                        <button onClick={() => setReadMore(!readMore)} className="list-none cursor-pointer text-primary font-semibold hover:underline">
                                            {readMore ? 'Read Less' : 'Read More'}
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="hidden lg:block"></div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-6 border-t border-white/10 pt-8">Reviews</h2>
                            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                                {reviews.map((review, index) => (
                                    <div key={index} className="rounded-xl bg-white/5 p-5 flex flex-col gap-4">
                                        <div className="flex items-center gap-3">
                                            <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10" style={{ backgroundImage: `url('${review.avatarUrl}')` }}></div>
                                            <div>
                                                <p className="font-semibold text-white">{review.author}</p>
                                                <StarRating rating={review.rating} />
                                            </div>
                                        </div>
                                        <p className="text-gray-300 text-sm leading-relaxed">"{review.comment}"</p>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default GameDetailPage;
