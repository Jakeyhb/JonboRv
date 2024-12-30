// server.mjs (or server.js if you prefer to keep .js and use 'import')
import express from 'express';
import path from 'path';
import cors from 'cors';
import fs from 'fs';
import ePub from 'epubjs';  // If you're using a package that supports ES modules
import { fileURLToPath } from 'url';
const app = express();
const port = 5000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
console.log(__dirname, '------dirname')
// Enable CORS
app.use(cors());

// Mock API to get chapters
app.get('/api/chapters', (req, res) => {
  const chapters = [
    { title: "Chapter 1", content: "This is the content of chapter 1This is the content of chapter 1This is the content of chapter 1This is the content of chapter 1This is the content of chapter 1This is the content of chapter 1This is the content of chapter 1This is the content of chapter 1This is the content of chapter 1This is the content of chapter 1This is the content of chapter 1This is the content of chapter 1This is the content of chapter 1This is the content of chapter 1This is the content of chapter 1This is the content of chapter 1This is the content of chapter 1This is the content of chapter 1This is the content of chapter 1This is the content of chapter 1This is the content of chapter 1This is the content of chapter 1." },
    { title: "Chapter 2", content: "This is the content of chapter 2." },
    { title: "Chapter 3", content: "This is the content of chapter 3." },
    { title: "Chapter 4", content: "This is the content of chapter 4." },
  ];
  res.json(chapters);
});

// API to serve the EPUB file
app.get('/api/ebook', (req, res) => {
  const filePath = path.join(__dirname, 'mock.epub'); 
  res.sendFile(filePath);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
