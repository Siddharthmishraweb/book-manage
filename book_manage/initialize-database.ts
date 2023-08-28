// import { Sequelize } from 'sequelize';
// import Book from './src/models/Book';
// // Initialize and sync the database

// const sequelize = new Sequelize('new_prac', 'root', 'password', {
//    host: 'localhost',
//    dialect: 'mysql',
//  });

// async function initializeDatabase() {
//    try {
//      // Sync all defined models to the database
//      await sequelize.sync();
//      console.log('Database synchronized successfully.');

//    } catch (error) {
//      console.error('Error synchronizing database:', error);
//    }
//  }
 

//  async function testDatabaseConnection() {
//    try {
//      await sequelize.authenticate();
//      console.log('Database connection has been established successfully.');
//      const Book = new Book();
//      const books = await Book.findAll(); // Use the Book model
//      console.log("Books:   ", books);
//    } catch (error) {
//      console.error('Unable to connect to the database:', error);
//    }
//  }

// testDatabaseConnection();

//  // Call the initialization function
//  initializeDatabase();
 






// import { Sequelize } from 'sequelize';
// import  Book  from './src/models/Book'; // Import the Book class directly
// // Initialize and sync the database

// const sequelize = new Sequelize('new_prac', 'root', 'password', {
//   host: 'localhost',
//   dialect: 'mysql',
// });

// async function initializeDatabase() {
//   try {
//     // Sync all defined models to the database
//     await sequelize.sync();
//     console.log('Database synchronized successfully.');
//   } catch (error) {
//     console.error('Error synchronizing database:', error);
//   }
// }

// async function testDatabaseConnection() {
//   try {
//     await sequelize.authenticate();
//     console.log('Database connection has been established successfully.');

//     const bookInstance = new Book(); // Instantiate a new Book
//     const books = await bookInstance.findAll(); // Use the instance to call the method
//     console.log("Books:   ", books);
//   } catch (error) {
//     console.error('Unable to connect to the database:', error);
//   }
// }

// testDatabaseConnection();

// // Call the initialization function
// initializeDatabase();






import { Sequelize } from 'sequelize';
import { Book } from './src/models/Book'; // Import the Book class directly
// Initialize and sync the database

const sequelize = new Sequelize('new_prac', 'root', 'password', {
  host: 'localhost',
  dialect: 'mysql',
});

async function initializeDatabase() {
  try {
    // Sync all defined models to the database
    await sequelize.sync();
    console.log('Database synchronized successfully.');
  } catch (error) {
    console.error('Error synchronizing database:', error);
  }
}

async function testDatabaseConnection() {
  try {
    await sequelize.authenticate();
    console.log('Database connection has been established successfully.');

    const books = await Book.findAll(); // Use the static method directly
    console.log("Books:   ", books);
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

testDatabaseConnection();

// Call the initialization function
initializeDatabase();
