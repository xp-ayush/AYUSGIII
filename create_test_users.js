const mysql = require('mysql2');
const bcrypt = require('bcrypt');

const db = mysql.createConnection({
  host: 'bc1356rqm8fuvahhugjo-mysql.services.clever-cloud.com',
  user: 'uwyrg5s6txiistsa',
  password: 'RRH6fCmDja2D0NWKbMI1',
  database: 'bc1356rqm8fuvahhugjo',
  port: 3306,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

const testUsers = [
  {
    name: 'Test Admin',
    email: 'admin@test.com',
    password: 'admin123',
    role: 'admin'
  },
  {
    name: 'Test User',
    email: 'user@test.com',
    password: 'user123',
    role: 'user'
  }
];

async function createTestUsers() {
  for (const user of testUsers) {
    const hashedPassword = await bcrypt.hash(user.password, 10);
    const query = `
      INSERT INTO users (name, email, password, role, created_at, updated_at)
      VALUES (?, ?, ?, ?, NOW(), NOW())
    `;
    
    db.query(query, [user.name, user.email, hashedPassword, user.role], (err, result) => {
      if (err) {
        console.error(`Error creating ${user.role}:`, err);
      } else {
        console.log(`Created ${user.role} successfully`);
      }
    });
  }
}

createTestUsers().then(() => {
  console.log('Test users creation completed');
  setTimeout(() => process.exit(), 1000);
});
