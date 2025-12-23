import { VercelRequest, VercelResponse } from '@vercel/node';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function (req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'DELETE') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  try {
    const { id } = req.query as { id: string };

    if (!id) {
      res.status(400).json({ error: 'Game ID is required' });
      return;
    }

    const deletedGame = await prisma.game.delete({
      where: { id }
    });

    res.status(200).json({
      message: 'Game deleted successfully',
      game: deletedGame
    });
  } catch (error) {
    console.error('Error deleting game:', error);
    res.status(500).json({
      error: 'Failed to delete game',
      errorMessage: error instanceof Error ? error.message : String(error)
    });
  } finally {
    await prisma.$disconnect();
  }
}