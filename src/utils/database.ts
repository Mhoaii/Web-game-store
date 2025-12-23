import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Database connection setup
export const db = prisma;

// User table schema and queries
export interface User {
  email: string;
  username: string;
  password_hash: string;
  role: 'user' | 'admin';
  avatar_url?: string;
  member_since: string;
  bio?: string;
  created_at: string;
  updated_at: string;
}

// Create user table if not exists (Prisma handles this)
export async function createUserTable() {
  // Prisma migrations handle schema
  console.log('User table managed by Prisma');
}

// User queries
export async function createUser(userData: {
  email: string;
  username: string;
  passwordHash: string;
  role?: 'user' | 'admin';
  avatarUrl?: string;
  bio?: string;
}) {
  try {
    const { email, username, passwordHash, role = 'user', avatarUrl, bio } = userData;
    const memberSince = new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' });

    const newUser = await prisma.user.create({
      data: {
        email,
        username,
        password_hash: passwordHash,
        role,
        avatar_url: avatarUrl,
        member_since: memberSince,
        bio
      }
    });

    return newUser;
  } catch (error) {
    console.error('Error creating user:', error);
    throw error;
  }
}

export async function getUserByEmail(email: string): Promise<User | null> {
  try {
    const user = await prisma.user.findUnique({
      where: { email }
    });

    return user;
  } catch (error) {
    console.error('Error getting user by email:', error);
    throw error;
  }
}

export async function updateUser(email: string, updates: Partial<Omit<User, 'email' | 'created_at'>>) {
  try {
    const updatedUser = await prisma.user.update({
      where: { email },
      data: {
        username: updates.username,
        password_hash: updates.password_hash,
        role: updates.role,
        avatar_url: updates.avatar_url,
        bio: updates.bio,
        updated_at: new Date()
      }
    });

    return updatedUser;
  } catch (error) {
    console.error('Error updating user:', error);
    throw error;
  }
}

export async function deleteUser(email: string) {
  try {
    await prisma.user.delete({
      where: { email }
    });
  } catch (error) {
    console.error('Error deleting user:', error);
    throw error;
  }
}

// Initialize database on startup
export async function initDatabase() {
  // No need to create table, Prisma handles it
}