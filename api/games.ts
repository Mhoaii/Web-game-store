import { VercelRequest, VercelResponse } from '@vercel/node';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function (req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'GET') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  try {
    const games = await prisma.game.findMany({
      orderBy: {
        created_at: 'desc'
      }
    });

    res.status(200).json({
      games
    });
  } catch (error) {
    console.error('Error fetching games:', error);
    res.status(500).json({
      error: 'Failed to fetch games',
      errorMessage: error instanceof Error ? error.message : String(error)
    });
  } finally {
    await prisma.$disconnect();
  }
}