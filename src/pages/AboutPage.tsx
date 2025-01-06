import React, { useState } from 'react';
import EpubReader from '../com/Eudp';
import { Box, IconButton, Typography } from '@mui/material';
import { Bookmark, Menu, Settings, NightlightRound, Close } from '@mui/icons-material';
import TableOfContents from '../com/Eudp/TableOfContents';

const AboutPage: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
  const [sidebarContent, setSidebarContent] = useState<string>('');
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [chapters, setChapters] = useState([
    { title: 'Chapter 1', content: 'Content of chapter 1' },
    { title: 'Chapter 2', content: 'Content of chapter 2' },
    { title: 'Chapter 3', content: 'Content of chapter 3' },
    { title: 'Chapter 4', content: 'Content of chapter 4' },
  ]);
  const [currentChapterIndex, setCurrentChapterIndex] = useState<number>(0);

  // 打开目录
  const handleOpenSidebar = (content: string) => {
    setSidebarContent(content);
    setSidebarOpen(true);
  };

  // 关闭目录
  const handleCloseSidebar = () => {
    setSidebarOpen(false);
    setSidebarContent('');
  };

  // 切换章节
  const handleChapterSelect = (index: number) => {
    setCurrentChapterIndex(index);
    handleCloseSidebar();
  };

  // 切换夜间模式
  const toggleNightMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div>
      <h1>EPUB Reader</h1>
      <EpubReader chapterId={currentChapterIndex} />
      {/* 右侧操作按钮 */}
      <Box
        position="absolute"
        right="-10px"
        top="50%"
        transform="translateY(-50%)"
        display="flex"
        flexDirection="column"
        alignItems="center"
        gap="16px"
      >
        <IconButton color="primary" aria-label="目录" onClick={() => handleOpenSidebar('目录')}>
          <Menu />
        </IconButton>
        <IconButton color="primary" aria-label="加入书架" onClick={() => handleOpenSidebar('加入书架')}>
          <Bookmark />
        </IconButton>
        {/* 夜间模式切换 */}
        <IconButton color="primary" aria-label="夜间" onClick={toggleNightMode}>
          <NightlightRound />
        </IconButton>
        <IconButton color="primary" aria-label="页面设置" onClick={() => handleOpenSidebar('页面设置')}>
          <Settings />
        </IconButton>
      </Box>

      {/* 目录组件 */}
      {sidebarOpen && sidebarContent === '目录' && (
        <TableOfContents
          chapters={chapters}
          onChapterSelect={handleChapterSelect}
          onClose={handleCloseSidebar}
        />
      )}

      {/* 夜间模式的全局样式 */}
      <style jsx global>{`
        body {
          background-color: ${darkMode ? '#333' : '#fff'};
          color: ${darkMode ? '#fff' : '#000'};
          transition: background-color 0.3s, color 0.3s;
        }
      `}</style>
    </div>
  );
};

export default AboutPage;
