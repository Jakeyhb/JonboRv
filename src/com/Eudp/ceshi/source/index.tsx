import React, { useEffect, useRef, useState } from 'react';
import ePub from 'epubjs';

interface EpubReaderProps {
  resourceUrl: string;  // EPUB 文件的 URL
}

const EpubReader: React.FC<EpubReaderProps> = ({ resourceUrl }) => {
  const viewerRef = useRef<HTMLDivElement | null>(null); // 用于显示 EPUB 内容的容器
  const [book, setBook] = useState<any>(null);  // 用于保存 EPUB 实例
  const [loading, setLoading] = useState<boolean>(true);  // 加载状态
  const [currentPage, setCurrentPage] = useState<number>(0);  // 当前页码

  // 加载并初始化 EPUB
  useEffect(() => {
    if (resourceUrl && viewerRef.current) {
      const bookInstance = ePub(resourceUrl);

      setLoading(true);  // 开始加载

      bookInstance.ready.then(() => {
        setBook(bookInstance);
        setLoading(false);

        // 渲染到指定容器
        bookInstance.renderTo(viewerRef.current);

        // 监听章节变化
        bookInstance.on('renderer:pageChanged', (pageNumber: number) => {
          setCurrentPage(pageNumber);
        });

        // 强制渲染第一页
        bookInstance.display();
      });

      return () => {
        // 清理
        if (bookInstance) {
          bookInstance.destroy();
        }
      };
    }
  }, [resourceUrl]);

  // 下一章
  const goToNextChapter = () => {
    if (book) {
      book.next();
    }
  };

  // 上一章
  const goToPreviousChapter = () => {
    if (book) {
      book.prev();
    }
  };

  return (
    <div>
      {/* 加载提示 */}
      {loading && <p>加载中...</p>}

      {/* EPUB 内容渲染区域 */}
      <div
        ref={viewerRef}
        style={{ height: '80vh', overflowY: 'auto', border: '2px solid #ccc' }}  // 添加边框帮助调试
      ></div>

      {/* 显示当前页码 */}
      <div>
        <p>当前页: {currentPage}</p>
      </div>

      {/* 控制按钮 */}
      <div>
        <button onClick={goToPreviousChapter}>上一章</button>
        <button onClick={goToNextChapter}>下一章</button>
      </div>
    </div>
  );
};

export default EpubReader;
