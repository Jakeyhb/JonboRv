import React, { useState, useEffect, useRef } from 'react';
import { Box, Button } from '@mui/material';
import axios from 'axios';
import './EpubReader.less';

// 模拟电子书章节数据
const mockApiUrl = 'http://localhost:5000/api/chapters';

interface EpubReaderProps {
  currentChapter: {
    id: string;
    title: string;
    content: string;
  };
  chapterId: string; // 新增传入的章节ID
}
// 增加一个store，然后将store进行 
const EpubReader: React.FC<EpubReaderProps> = ({ chapterId }) => {
  const [chapters, setChapters] = useState<unknown[]>([]);
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

  // 根据传入的章节ID设置当前章节的索引
  useEffect(() => {
    if (chapterId && chapters.length > 0) {
      const index = chapters.findIndex((chapter: any) => chapter.id === chapterId);
      if (index !== -1) {
        loadChapter(index);
      }
    }
  }, [chapterId, chapters]);

  return (
    <Box className="epub-reader" display="flex" justifyContent="space-between" position="relative">
      <Box flex="1">
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
    </Box>
  );
};

export default EpubReader;
