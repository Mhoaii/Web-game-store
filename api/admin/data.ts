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

    const users = await prisma.user.findMany({
      select: {
        email: true,
        username: true,
        role: true,
        member_since: true,
        created_at: true
      },
      orderBy: {
        created_at: 'desc'
      }
    });

    res.status(200).json({
      games,
      users
    });
  } catch (error) {
    console.error('Error fetching admin data:', error);
    res.status(500).json({
      error: 'Failed to fetch admin data',
      errorMessage: error instanceof Error ? error.message : String(error)
    });
  } finally {
    await prisma.$disconnect();
  }
}