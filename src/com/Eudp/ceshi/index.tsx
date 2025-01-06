import React, { useState, useEffect, useRef } from 'react';
import ePub from 'epubjs';
import { Box, Button, LinearProgress, Typography } from '@mui/material';

const EpubReader: React.FC = () => {
  const [book, setBook] = useState<any>(null); // 保存加载的 EPUB 对象
  const [toc, setToc] = useState<any[]>([]); // 目录
  const [currentChapter, setCurrentChapter] = useState<string>(''); // 当前章节内容
  const [loading, setLoading] = useState<boolean>(false); // 是否加载中
  const contentRef = useRef<HTMLDivElement | null>(null);
  const renditionRef = useRef<any>(null); // 用来存储 rendition 对象

  // 选择文件
  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = async () => {
        setLoading(true); // 开始加载
        const epubBook = ePub(reader.result as ArrayBuffer); // 使用 epub.js 解析文件
        setBook(epubBook);

        // 渲染到指定 DOM 元素
        const rendition = epubBook.renderTo(contentRef.current as HTMLElement, {
          width: "100%",
          height: 600,
        });

        renditionRef.current = rendition; // 保存 rendition 对象

        // 获取目录
        try {
          const nav = await epubBook.loaded.navigation;
          setToc(nav.toc); // 设置目录
          setCurrentChapter(nav.toc[0].href); // 默认显示第一章
        } catch (error) {
          console.error("Error loading navigation:", error);
        } finally {
          setLoading(false); // 完成加载
        }
      };
      reader.readAsArrayBuffer(file);
    }
  };

  // 加载章节
  const loadChapter = (chapter: string) => {
    if (renditionRef.current) {
      renditionRef.current.display(chapter); // 使用 rendition.display() 来加载章节
      setCurrentChapter(chapter); // 更新当前章节
    }
  };

  // 处理目录点击事件
  const handleTocClick = (href: string) => {
    loadChapter(href); // 加载点击的章节
  };

  return (
    <Box>
      <input
        type="file"
        accept=".epub"
        onChange={handleFileSelect}
        style={{ marginBottom: '16px' }}
      />
      
      {/* 显示加载进度条 */}
      {loading && (
        <Box sx={{ width: '100%' }}>
          <LinearProgress />
        </Box>
      )}

      <Box display="flex" justifyContent="space-between">
        <div>
          <h2>电子书目录</h2>
          <ul>
            {toc.map((item, index) => (
              <li key={index}>
                <Button onClick={() => handleTocClick(item.href)}>
                  {item.label}
                </Button>
              </li>
            ))}
          </ul>
        </div>
        
        <div
          ref={contentRef}
          style={{
            width: '60%',
            height: '500px',
            overflowY: 'auto',
            border: '1px solid #ddd',
            padding: '10px',
          }}
        >
          {/* 章节内容将渲染在这里 */}
          <Typography variant="body1">{currentChapter}</Typography>
        </div>
      </Box>
    </Box>
  );
};

export default EpubReader;
