import { VercelRequest, VercelResponse } from '@vercel/node';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function (req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'DELETE') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  try {
    const { email } = req.query as { email: string };

    if (!email) {
      res.status(400).json({ error: 'User email is required' });
      return;
    }

    // Prevent deleting admin accounts
    const user = await prisma.user.findUnique({
      where: { email }
    });

    if (!user) {
      res.status(404).json({ error: 'User not found' });
      return;
    }

    if (user.role === 'admin') {
      res.status(403).json({ error: 'Cannot delete admin accounts' });
      return;
    }

    const deletedUser = await prisma.user.delete({
      where: { email }
    });

    res.status(200).json({
      message: 'User deleted successfully',
      user: {
        email: deletedUser.email,
        username: deletedUser.username,
        role: deletedUser.role
      }
    });
  } catch (error) {
    console.error('Error deleting user:', error);
    res.status(500).json({
      error: 'Failed to delete user',
      errorMessage: error instanceof Error ? error.message : String(error)
    });
  } finally {
    await prisma.$disconnect();
  }
}