import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../config/database';
import Books from '../models/Book';

async function testDatabaseConnection() {
   try {
     await sequelize.authenticate();
     console.log('Database connection has been established successfully.');
     console.log("Books: ");
     const books = await Books.findAll();
     console.log("Books:   ", books);
   } catch (error) {
     console.error('Unable to connect to the database:', error);
   }
 }
 
 testDatabaseConnection();


class Book extends Model {
  public id!: string;
  public title!: string;
  public author!: string;
  public publishedYear!: number;
}

Book.init(
  {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    author: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    publishedYear: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Book',
    tableName: 'books',
  }
);

export default Book;