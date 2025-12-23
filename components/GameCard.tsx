
import React from 'react';
import { Link } from 'react-router-dom';
import { Game } from '../types';

interface GameCardProps {
  game: Game;
  variant?: 'home' | 'discover';
}

const GameCard: React.FC<GameCardProps> = ({ game, variant = 'home' }) => {
  if (variant === 'discover') {
    const StarRating = ({ rating }: { rating: number }) => {
      const fullStars = Math.floor(rating);
      const halfStar = rating % 1 !== 0;
      const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

      return (
        <div className="flex items-center gap-1 mt-3 text-amber-400">
          {[...Array(fullStars)].map((_, i) => (
            <span key={`full-${i}`} className="material-symbols-outlined !text-base">star</span>
          ))}
          {halfStar && <span className="material-symbols-outlined !text-base">star_half</span>}
          {[...Array(emptyStars)].map((_, i) => (
            <span key={`empty-${i}`} className="material-symbols-outlined !text-base text-zinc-300 dark:text-zinc-600">star</span>
          ))}
          <span className="text-zinc-500 dark:text-zinc-400 text-xs ml-1 font-medium">({rating})</span>
        </div>
      );
    };

    return (
      <div className="group flex flex-col gap-3 rounded-xl overflow-hidden bg-white dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-800 transition-all duration-300 hover:shadow-lg hover:dark:shadow-primary/20 hover:-translate-y-1">
        <div className="relative w-full aspect-video">
          <div className="w-full h-full bg-center bg-no-repeat bg-cover" style={{ backgroundImage: `url("${game.imageUrl}")` }} data-alt={`Game thumbnail for ${game.title}`}></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
            <div className="flex w-full items-center justify-between gap-2">
              <Link to={`/game/${game.id}`} className="flex-1 flex min-w-0 cursor-pointer items-center justify-center overflow-hidden rounded-md h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors">
                <span className="truncate">View Details</span>
              </Link>
              <Link to="#" className="flex size-10 shrink-0 cursor-pointer items-center justify-center rounded-md bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-colors" title="Play Web Game">
                <span className="material-symbols-outlined !text-2xl">play_circle</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="px-4 pb-4">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-zinc-900 dark:text-white text-base font-bold leading-normal">{game.title}</p>
              <p className="text-zinc-500 dark:text-zinc-400 text-sm font-normal leading-normal">by {game.by}</p>
            </div>
            <button className={`${game.isLiked ? 'text-red-500' : 'text-zinc-400 dark:text-zinc-500'} hover:text-red-500 transition-colors`} title={game.isLiked ? 'Unlike game' : 'Like game'}>
              <span className="material-symbols-outlined">{game.isLiked ? 'favorite' : 'favorite_border'}</span>
            </button>
          </div>
          <p className="text-zinc-600 dark:text-zinc-300 text-sm font-normal leading-normal mt-2 line-clamp-2">{game.description || 'A thrilling new adventure awaits.'}</p>
          {game.ratingFraction && <StarRating rating={game.ratingFraction} />}
        </div>
      </div>
    );
  }

  return (
    <Link to={`/game/${game.id}`} className="flex flex-col gap-3 pb-3 group">
      <div
        className="w-full bg-center bg-no-repeat aspect-[3/4] bg-cover rounded-xl overflow-hidden transform group-hover:scale-105 transition-transform duration-300"
        data-alt={`Game art for ${game.title}`}
        style={{ backgroundImage: `url("${game.imageUrl}")` }}
      ></div>
      <div>
        <p className="text-white text-base font-medium leading-normal">{game.title}</p>
        <p className="text-gray-400 text-sm font-normal leading-normal">{game.price}</p>
      </div>
    </Link>
  );
};

export default GameCard;
