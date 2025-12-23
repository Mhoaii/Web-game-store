import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function checkGames() {
  try {
    const games = await prisma.game.findMany({
      select: {
        id: true,
        name: true,
        download_link: true,
        created_at: true
      }
    });

    console.log('Games in database:');
    console.log('==================');
    games.forEach(game => {
      console.log(`ID: ${game.id}`);
      console.log(`Name: ${game.name}`);
      console.log(`Download Link: ${game.download_link || 'Không có'}`);
      console.log(`Created: ${game.created_at}`);
      console.log('---');
    });
  } catch (error) {
    console.error('Error:', error);
  } finally {
    await prisma.$disconnect();
  }
}

checkGames();