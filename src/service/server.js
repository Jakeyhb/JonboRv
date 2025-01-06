// server.mjs (or server.js if you prefer to keep .js and use 'import')
import express from 'express';
import path from 'path';
import cors from 'cors';
import ePub from 'epubjs';  // 使用正确的方式导入 epub.js
import fs from 'fs'; // If you're using a package that supports ES modules
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
    { 
      id: "chapter-1",
      title: "Chapter 1", 
      content: "This is the content of chapter 1This is the content of chapter 1This is the content of chapter 1This is the content of chapter 1This is the content of chapter 1This is the content of chapter 1This is the content of chapter 1This is the content of chapter 1This is the content of chapter 1This is the content of chapter 1This is the content of chapter 1This is the content of chapter 1This is the content of chapter 1This is the content of chapter 1This is the content of chapter 1This is the content of chapter 1This is the content of chapter 1This is the content of chapter 1This is the content of chapter 1This is the content of chapter 1This is the content of chapter 1This is the content of chapter 1." 
    },
    { 
      id: "chapter-2",
      title: "Chapter 2", 
      content: "This is the content of chapter 1This is the content of chapter 1This is the content of chapter 1This is the content of chapter 1This is the content of chapter 1This is the content of chapter 1This is the content of chapter 1This is the content of chapter 1This is the content of chapter 1This is the content of chapter 1This is the content of chapter 1This is the content of chapter 1This is the content of chapter 1This is the content of chapter 1This is the content of chapter 1This is the content of chapter 1This is the content of chapter 1This is the content of chapter 1This is the content of chapter 1This is the content of chapter 1This is the content of chapter 1This is the content of chapter 1." 
    },
    { 
      id: "chapter-3",
      title: "Chapter 3", 
      content: "This is the content of chapter 1This is the content of chapter 1This is the content of chapter 1This is the content of chapter 1This is the content of chapter 1This is the content of chapter 1This is the content of chapter 1This is the content of chapter 1This is the content of chapter 1This is the content of chapter 1This is the content of chapter 1This is the content of chapter 1This is the content of chapter 1This is the content of chapter 1This is the content of chapter 1This is the content of chapter 1This is the content of chapter 1This is the content of chapter 1This is the content of chapter 1This is the content of chapter 1This is the content of chapter 1This is the content of chapter 1." 
    },

  ];
  res.json(chapters);
});
// 模拟返回本地的 EPUB 文件
app.get('/api/chapter/epub', (req, res) => {
  const epubPath = path.join(__dirname, 'mock.epub'); // 你的 mock.epub 文件路径

  // 使用 ePub.js 加载文件，注意这里是直接调用 ePub() 函数，而不是 new
  const epub = ePub(epubPath);

  // 打开 EPUB 文件并解析目录
  epub.open().then(() => {
    // 获取章节内容
    const chapters = epub.toc.map((tocItem, index) => {
      return {
        id: `chapter-${index + 1}`,
        title: tocItem.label,
        content: tocItem.content
      };
    });
    res.json(chapters); // 返回解析的章节内容
  }).catch((err) => {
    console.error("Error parsing EPUB:", err);
    res.status(500).json({ error: 'Error parsing EPUB file' });
  });
});



app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
