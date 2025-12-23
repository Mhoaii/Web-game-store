
import React from 'react';
import { Link } from 'react-router-dom';
import { Game } from '../types';

interface GameCardProps {
  game: Game;
}

const GameCard: React.FC<GameCardProps> = ({ game }) => {
  return (
    <div className="group flex flex-col gap-3 rounded-xl overflow-hidden bg-white dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-800 transition-all duration-300 hover:shadow-lg hover:dark:shadow-primary/20 hover:-translate-y-1">
      <div className="relative w-full aspect-video">
        <div className="w-full h-full bg-center bg-no-repeat bg-cover" style={{ backgroundImage: `url("${game.image_url || '/placeholder-game.jpg'}")` }} data-alt={`Game thumbnail for ${game.name}`}></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
          <div className="flex w-full items-center justify-between gap-2">
            <Link to={`/game/${game.id}`} className="flex-1 flex min-w-0 cursor-pointer items-center justify-center overflow-hidden rounded-md h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors">
              <span className="truncate">Chi tiết</span>
            </Link>
            {game.download_link && (
              <a href={game.download_link} target="_blank" rel="noopener noreferrer" className="flex size-10 shrink-0 cursor-pointer items-center justify-center rounded-md bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-colors" title="Tải Game">
                <span className="material-symbols-outlined !text-2xl">download</span>
              </a>
            )}
          </div>
        </div>
      </div>
      <div className="px-4 pb-4">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-zinc-900 dark:text-white text-base font-bold leading-normal">{game.name}</p>
            <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-normal mt-1 line-clamp-2">{game.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameCard;
