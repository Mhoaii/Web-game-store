import { sql } from '@vercel/postgres';

// Database connection setup
export const db = sql;

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

// Create user table if not exists
export async function createUserTable() {
  try {
    await sql`
      CREATE TABLE IF NOT EXISTS users (
        email VARCHAR(255) PRIMARY KEY,
        username VARCHAR(100) NOT NULL,
        password_hash VARCHAR(255) NOT NULL,
        role VARCHAR(20) DEFAULT 'user' CHECK (role IN ('user', 'admin')),
        avatar_url TEXT,
        member_since VARCHAR(50),
        bio TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `;
    console.log('User table created or already exists');
  } catch (error) {
    console.error('Error creating user table:', error);
    throw error;
  }
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

    const result = await sql`
      INSERT INTO users (email, username, password_hash, role, avatar_url, member_since, bio)
      VALUES (${email}, ${username}, ${passwordHash}, ${role}, ${avatarUrl}, ${memberSince}, ${bio})
      RETURNING *;
    `;

    return result.rows[0] as User;
  } catch (error) {
    console.error('Error creating user:', error);
    throw error;
  }
}

export async function getUserByEmail(email: string): Promise<User | null> {
  try {
    const result = await sql`
      SELECT * FROM users WHERE email = ${email};
    `;

    return result.rows[0] as User || null;
  } catch (error) {
    console.error('Error getting user by email:', error);
    throw error;
  }
}

export async function updateUser(email: string, updates: Partial<Omit<User, 'email' | 'created_at'>>) {
  try {
    const updateFields = [];
    const values = [];
    let paramIndex = 1;

    if (updates.username !== undefined) {
      updateFields.push(`username = $${paramIndex++}`);
      values.push(updates.username);
    }
    if (updates.password_hash !== undefined) {
      updateFields.push(`password_hash = $${paramIndex++}`);
      values.push(updates.password_hash);
    }
    if (updates.role !== undefined) {
      updateFields.push(`role = $${paramIndex++}`);
      values.push(updates.role);
    }
    if (updates.avatar_url !== undefined) {
      updateFields.push(`avatar_url = $${paramIndex++}`);
      values.push(updates.avatar_url);
    }
    if (updates.bio !== undefined) {
      updateFields.push(`bio = $${paramIndex++}`);
      values.push(updates.bio);
    }

    if (updateFields.length === 0) return null;

    updateFields.push(`updated_at = CURRENT_TIMESTAMP`);
    values.push(email);

    const query = `
      UPDATE users
      SET ${updateFields.join(', ')}
      WHERE email = $${paramIndex}
      RETURNING *;
    `;

    const result = await sql.unsafe(query, values);
    return result.rows[0] as User || null;
  } catch (error) {
    console.error('Error updating user:', error);
    throw error;
  }
}

export async function deleteUser(email: string) {
  try {
    await sql`DELETE FROM users WHERE email = ${email};`;
  } catch (error) {
    console.error('Error deleting user:', error);
    throw error;
  }
}

// Initialize database on startup
export async function initDatabase() {
  await createUserTable();
}