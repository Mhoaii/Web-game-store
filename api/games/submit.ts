import { VercelRequest, VercelResponse } from '@vercel/node';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function (req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  try {
    const { name, description, download_link, experience_link, image_url, banner_url, avatar_url } = req.body as {
      name: string;
      description: string;
      download_link?: string;
      experience_link?: string;
      image_url?: string; // legacy
      banner_url?: string; // data URL or external URL
      avatar_url?: string; // data URL or external URL
    };

    // Validation
    if (!name || !description) {
      res.status(400).json({ error: 'Name and description are required' });
      return;
    }

    // Validate data URL lengths (approx 1.3MB for 1MB image)
    const maxDataUrlLength = 2 * 1024 * 1024; // 2MB
    if (banner_url && banner_url.length > maxDataUrlLength) {
      res.status(400).json({ error: 'Banner image data is too large' });
      return;
    }
    if (avatar_url && avatar_url.length > maxDataUrlLength) {
      res.status(400).json({ error: 'Avatar image data is too large' });
      return;
    }

    // Create game
    const newGame = await prisma.game.create({
      data: {
        name,
        description,
        download_link,
        experience_link,
        image_url: image_url || avatar_url || null,
        banner_url: banner_url || null,
        avatar_url: avatar_url || image_url || null
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