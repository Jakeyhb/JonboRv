// EpubReader.tsx
import React, { useState, useEffect, useRef } from 'react';
import { Box, Button } from '@mui/material';
import axios from 'axios';
import './EpubReader.less';

// 模拟电子书章节数据
const mockApiUrl = 'http://localhost:5000/api/chapters';

const EpubReader = () => {
  const [chapters, setChapters] = useState<any[]>([]);
  const [currentChapterIndex, setCurrentChapterIndex] = useState(0);
  const [scrolling, setScrolling] = useState(false);
  
  const containerRef = useRef<HTMLDivElement | null>(null);

  // 请求章节数据
  const fetchChapters = async () => {
    try {
      const response = await axios.get(mockApiUrl);
      setChapters(response.data);
    } catch (error) {
      console.error("Error fetching chapters:", error);
    }
  };

  // 加载章节
  const loadChapter = (index: number) => {
    if (index >= 0 && index < chapters.length) {
      setCurrentChapterIndex(index);
    }
  };

  // 下一章
  const nextChapter = () => {
    if (currentChapterIndex < chapters.length - 1) {
      loadChapter(currentChapterIndex + 1);
    }
  };

  // 上一章
  const prevChapter = () => {
    if (currentChapterIndex > 0) {
      loadChapter(currentChapterIndex - 1);
    }
  };

  // 处理滚动事件
  const handleScroll = (e: React.WheelEvent) => {
    if (scrolling) return;

    setScrolling(true);

    // 判断滚动方向：向下为下一章，向上为上一章
    if (e.deltaY > 0) {
      nextChapter();
    } else {
      prevChapter();
    }

    setTimeout(() => setScrolling(false), 500); // 防止频繁切换
  };

  useEffect(() => {
    fetchChapters(); // 获取章节数据
  }, []);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.addEventListener("wheel", handleScroll);
    }

    return () => {
      if (containerRef.current) {
        containerRef.current.removeEventListener("wheel", handleScroll);
      }
    };
  }, [scrolling]);

  return (
    <Box className="epub-reader">
      <h2>{chapters[currentChapterIndex]?.title}</h2>
      <div
        ref={containerRef}
        className="content-container"
        style={{ height: '400px', overflowY: 'auto', padding: '20px', border: '1px solid #ddd' }}
      >
        <p>{chapters[currentChapterIndex]?.content}</p>
      </div>

      <Box className="controls">
        <Button onClick={prevChapter} variant="contained">Previous Chapter</Button>
        <Button onClick={nextChapter} variant="contained">Next Chapter</Button>
      </Box>
    </Box>
  );
};

export default EpubReader;
