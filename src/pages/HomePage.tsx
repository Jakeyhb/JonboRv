// src/pages/HomePage.tsx
import React, { useState, useEffect } from 'react';
import { Affix, Button } from 'antd';  // 引入 Affix 组件
import EpubReader from '../com/Eudp/ceshi/source/index';

const HomePage: React.FC = () => {
  // 用来跟踪滚动的位置
  const [scrolling, setScrolling] = useState(false);
  const [logoVisible, setLogoVisible] = useState(true);
  const [shortcutsVisible, setShortcutsVisible] = useState(true);

  // 监听滚动事件
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      // 控制logo的显示与隐藏
      if (scrollPosition > 70) { // 设定logo消失的位置
        setLogoVisible(false);
      } else {
        setLogoVisible(true);
      }

      // 控制快捷入口的显示与隐藏
      if (scrollPosition > 200) { // 设定快捷入口消失的位置
        setShortcutsVisible(false);
      } else {
        setShortcutsVisible(true);
      }

      // 控制搜索框是否固定
      if (scrollPosition > 70) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // 清理事件监听器
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const epubUrl = 'https://flowus.cn/yutongxue/share/02c720be-6126-482e-a791-883fa7b9832d?code=892434【FlowUs 息流】The-Path-to-Breaking-Free-From-Addiction.epub'
  return (
    <div>
      {/* 第一部分： */}
      <div>
        {/* Logo 显示 */}
        <div
          style={{
            height: '70px',
            background: 'blue',
            opacity: logoVisible ? 1 : 0,
            transition: 'opacity 0.3s ease-out',
          }}
        >
          <img src="https://via.placeholder.com/150" alt="Logo" style={{ height: '70px' }} />
        </div>

        {/* 搜索框，固定在 TabBar 下方 */}
        <div
          style={{
            height: '100px',
            background: 'lightgray',
            position: scrolling ? 'fixed' : 'relative', // 当滚动到一定位置时固定
            top: scrolling ? '70px' : 'auto', // 如果固定，距离顶部 70px
            backgroundColor: scrolling ? '#FFF' : 'red', // 如果固定，距离顶部 70px
            width: '1240px', 
            transition: 'top 0.3s ease-out', // 平滑过渡效果
            zIndex: 100,
          }}
        >
          <input type="text" placeholder="Search..." style={{ width: '90%', height: '100%' }} />
        </div>

        {/* 快捷入口，滚动一定位置后隐藏 */}
        <div
          style={{
            height: '200px',
            background: 'lightgreen',
            opacity: shortcutsVisible ? 1 : 0,
            transition: 'opacity 0.3s ease-out', // 平滑过渡效果
          }}
        >
          <div>快捷入口</div>
        </div>
      </div>

      {/* 使用 Ant Design 的 Affix 组件固定一个按钮 */}
      <div style={{ height: '500px' }}> {/* 用于演示滚动效果的占位符 */}
        <Affix offsetTop={210}>
          <Button type="primary">固定按钮</Button>
        </Affix>
      </div>

      {/* 第二部分： */}
      <div style={{ height: '1240px', background: '#f5f5f5' }}>
        <p>这是页面的内容部分，高度为 1240px。</p>


        {/* <EpubReader /> */}
        <EpubReader resourceUrl={epubUrl} />
       
      </div>
      {/* 第二部分： */}

    </div>
  );
};

export default HomePage;
