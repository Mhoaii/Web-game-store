import { VercelRequest, VercelResponse } from '@vercel/node';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function (req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'GET') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  try {
    // Test database connection
    await prisma.$queryRaw`SELECT 1`;

    // Try to create the users table if it doesn't exist
    await prisma.$queryRaw`
      CREATE TABLE IF NOT EXISTS users (
        email VARCHAR(255) PRIMARY KEY,
        username VARCHAR(100) NOT NULL,
        password_hash VARCHAR(255) NOT NULL,
        role VARCHAR(20) DEFAULT 'user',
        avatar_url TEXT,
        member_since VARCHAR(50),
        bio TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `;

    // Try to create the games table if it doesn't exist
    await prisma.$queryRaw`
      CREATE TABLE IF NOT EXISTS games (
        id VARCHAR(255) PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        description TEXT,
        download_link TEXT,
        image_url TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `;

    res.status(200).json({
      message: 'Database initialized successfully',
      databaseConnected: true,
      tableCreated: true
    });
  } catch (error) {
    console.error('Database initialization error:', error);
    res.status(500).json({
      error: 'Failed to initialize database',
      errorMessage: error instanceof Error ? error.message : String(error)
    });
  } finally {
    await prisma.$disconnect();
  }
}