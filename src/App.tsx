// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { AppBar, Tab, Tabs } from '@mui/material';
import { styled } from '@mui/system'; // 使用 styled API

// 引入页面组件
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

// 使用 styled API 替代 makeStyles
const Root = styled('div')({
  display: 'flex',                // 使用 Flexbox 来进行居中
  justifyContent: 'center',       // 水平居中
  minWidth: '1240px',             // 最小宽度为 1240px
  margin: '0 auto',               // 居中
  paddingTop: '60px',             // 留出顶部 AppBar 的空间
  paddingLeft: '20px',
  paddingRight: '20px',
  width: '100%',                  // 让页面宽度可以伸缩
  backgroundColor: '#f5f5f5',     // 根元素背景色为灰色
});

const Content = styled('div')({
  width: '100%',                  // 确保内容宽度为 100%
  maxWidth: '1240px',             // 最大宽度为 1240px，保证页面不会超宽
  paddingTop: '80px',             // 留出固定 TabBar 的空间
  backgroundColor: '#fff',        // 内容区域背景色为白色
  boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)', // 添加阴影效果
  borderRadius: '8px',            // 可选：为内容区域添加圆角边框
});

const TabBar = styled(AppBar)({
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  zIndex: 1200, // 确保 TabBar 在最上层
});

const App: React.FC = () => {
  const [selectedTab, setSelectedTab] = React.useState(0);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setSelectedTab(newValue);
  };

  return (
    <Router>
      {/* TabBar */}
      <TabBar>
        <Tabs value={selectedTab} onChange={handleTabChange} centered>
          <Tab label="Home" component={Link} to="/" />
          <Tab label="About" component={Link} to="/about" />
          <Tab label="Contact" component={Link} to="/contact" />
        </Tabs>
      </TabBar>

      {/* 主体内容 */}
      <Root>
        <Content>
          <Routes>
            <Route path="/" element={<HomePage />} />
            {/* <Route path="/about" element={<AboutPage />} /> */}
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </Content>
      </Root>
    </Router>
  );
};

export default App;
