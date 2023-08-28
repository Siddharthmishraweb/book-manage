import express from 'express'; // Import express module

import { Request, Response } from 'express';
import Book from '../models/Book';

export async function getAllBooks(req: Request, res: Response) {
  try {
    const books = await Book.findAll();
    console.log("Books:   ", books)
    res.json(books);
  } catch (error) {
   console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%")
   console.log(error, "error   ***")
    res.status(500).json({ error: 'Internal server error' });
  }
}

export async function getBookById(req: Request, res: Response) {
  const { id } = req.params;

  try {
    const book = await Book.findByPk(id);
    if (book) {
      res.json(book);
    } else {
      res.status(404).json({ error: 'Book not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
}

export async function addBook(req: Request, res: Response) {
   const { title, author, publishedYear } = req.body;
   console.log(req.body)
 
   if (!title || !author || !publishedYear) {
     return res.status(400).json({ error: 'Missing required fields' });
   }
 
   try {
     const book = await Book.create({
       title,
       author,
       publishedYear,
     });
 
     res.json(book);
   } catch (error) {
     console.log(error);
     res.status(500).json({ error: 'Internal server error' });
   }
 }
 

export async function updateBook(req: Request, res: Response) {
  const { id } = req.params;
  const { title, author, publishedYear } = req.body;

  if (!title || !author || !publishedYear) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
    const book = await Book.findByPk(id);
    if (book) {
      await book.update({
        title,
        author,
        publishedYear,
      });
      res.json(book);
    } else {
      res.status(404).json({ error: 'Book not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
}

export async function deleteBook(req: Request, res: Response) {
  const { id } = req.params;

  try {
    const book = await Book.findByPk(id);
    if (book) {
      await book.destroy();
      res.json({ message: 'Book deleted successfully' });
    } else {
      res.status(404).json({ error: 'Book not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
}
