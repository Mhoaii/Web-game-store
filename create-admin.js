import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function createAdmin() {
  try {
    // Check if admin already exists
    const existingAdmin = await prisma.user.findUnique({
      where: { email: 'admin@gamestore.com' }
    });

    if (existingAdmin) {
      console.log('Admin account already exists');
      return;
    }

    // Hash password
    const hashedPassword = await bcrypt.hash('111111', 12);

    // Create admin user
    const admin = await prisma.user.create({
      data: {
        email: 'admin@gamestore.com',
        username: 'Admin',
        password_hash: hashedPassword,
        role: 'admin',
        avatar_url: 'https://ui-avatars.com/api/?background=red&color=fff&name=Admin',
        member_since: new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' }),
        bio: 'Administrator of GameStore'
      }
    });

    console.log('Admin account created successfully:', admin.username);
  } catch (error) {
    console.error('Error creating admin:', error);
  } finally {
    await prisma.$disconnect();
  }
}

createAdmin();