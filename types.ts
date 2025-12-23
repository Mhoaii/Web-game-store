
export interface Game {
  id: string;
  name: string;
  description: string;
  download_link?: string;
  image_url?: string;
  created_at: string;
  updated_at: string;
}
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
