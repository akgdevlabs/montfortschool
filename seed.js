const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');
const { PrismaPg } = require('@prisma/adapter-pg');
require('dotenv').config();

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });

async function main() {
  const pass = await bcrypt.hash('123456', 10);
  
  console.log("Database mein users banaye ja rahe hain...");

  const users = [
    { name: 'Principal', email: 'principal@montfortschool.com', role: 'PRINCIPAL' },
    { name: 'Reception Desk', email: 'reception@montfortschool.com', role: 'RECEPTION' },
    { name: 'Coordinator', email: 'coordinator@montfortschool.com', role: 'COORDINATOR' },
    { name: 'Teacher User', email: 'teacher@montfortschool.com', role: 'TEACHER' },
    { name: 'Student User', email: 'student@montfortschool.com', role: 'STUDENT' },
    { name: 'Parent User', email: 'parent@montfortschool.com', role: 'PARENT' },
  ];

  for (const u of users) {
    await prisma.user.upsert({
      where: { email: u.email },
      update: { password: pass },
      create: { name: u.name, email: u.email, password: pass, role: u.role }
    });
    console.log(`✅ Ban gaya: ${u.email}`);
  }
  
  console.log("Saare users successfully ban gaye!");
}

main()
  .catch((e) => {
    console.error("Error aaya:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });