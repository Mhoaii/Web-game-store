
import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';
import { User, Game } from '../types';
import { user as defaultUser } from '../constants';

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (username: string, email: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Mock "Database" initialization
const STORAGE_KEY = 'gamestore_auth_user';

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check local storage on mount
    const storedUser = localStorage.getItem(STORAGE_KEY);
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (e) {
        console.error("Failed to parse user data");
        localStorage.removeItem(STORAGE_KEY);
      }
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Login failed');
      }

      // Convert database user to frontend User format
      const loggedInUser: User = {
        username: data.user.username,
        email: data.user.email,
        avatarUrl: data.user.avatar_url || `https://ui-avatars.com/api/?background=135bec&color=fff&name=${data.user.username}`,
        memberSince: data.user.member_since,
        bio: data.user.bio || 'Just joined the GameStore community!',
        role: data.user.role,
        library: [] // Will be populated from separate API later
      };

      setUser(loggedInUser);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(loggedInUser));
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    }
  };

  const register = async (username: string, email: string, password: string) => {
    try {
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Registration failed');
      }

      // Convert database user to frontend User format
      const newUser: User = {
        username: data.user.username,
        email: data.user.email,
        avatarUrl: data.user.avatar_url || `https://ui-avatars.com/api/?background=random&color=fff&name=${data.user.username}`,
        memberSince: data.user.member_since,
        bio: data.user.bio || 'I love playing games on GameStore.',
        role: data.user.role,
        library: []
      };

      setUser(newUser);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newUser));
    } catch (error) {
      console.error('Registration error:', error);
      throw error;
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem(STORAGE_KEY);
    window.location.href = '/'; // Hard redirect to clear any complex state if needed
  };

  return (
    <AuthContext.Provider value={{ user, isLoading, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
