import { VercelRequest, VercelResponse } from '@vercel/node';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function (req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  try {
    const { name, description, download_link, image_url } = req.body as {
      name: string;
      description: string;
      download_link?: string;
      image_url?: string;
    };

    // Validation
    if (!name || !description) {
      res.status(400).json({ error: 'Name and description are required' });
      return;
    }

    // Create game
    const newGame = await prisma.game.create({
      data: {
        name,
        description,
        download_link,
        image_url
      }
    });

    res.status(201).json({
      message: 'Game submitted successfully',
      game: newGame
    });

  } catch (error) {
    console.error('Game submission error:', error);
    res.status(500).json({
      error: 'Internal server error',
      errorMessage: error instanceof Error ? error.message : String(error)
    });
  } finally {
    await prisma.$disconnect();
  }
}