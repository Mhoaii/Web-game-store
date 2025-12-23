
export interface Game {
  id: string;
  title: string;
  price: string;
  imageUrl: string;
  developer: string;
  publisher?: string;
  releaseDate?: string;
  rating?: number;
  reviewCount?: number;
  tags?: string[];
  description?: string;
  longDescription?: {
    intro: string;
    features: string;
    details: string;
  };
  trailerImageUrl?: string;
  media?: string[];
  platforms?: ('windows' | 'mac')[];
  isFeatured?: boolean;
  isTrending?: boolean;
  isLiked?: boolean;
  ratingFraction?: number;
  by: string;
}

export interface Review {
  author: string;
  avatarUrl: string;
  rating: number; // 1-5
  comment: string;
}

export interface User {
  username: string;
  email: string;
  avatarUrl: string;
  memberSince: string;
  bio: string;
  role: 'user' | 'admin';
  library?: Game[]; // Optional, might be moved to separate table later
}
