import React, { useState } from 'react';
import { Box, IconButton, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

const CollapsiblePanel = () => {
  const [expanded, setExpanded] = useState(false); // 控制展开/折叠的状态

  const togglePanel = () => {
    setExpanded(!expanded);  // 切换状态
  };

  return (
    <Box sx={{ width: '100%', border: '1px solid #ddd', borderRadius: '4px' }}>
      <Box sx={{ padding: 2 }}>
        <Typography variant="h6">Collapsible Panel</Typography>
      </Box>
      
      <Box
        sx={{
          maxHeight: expanded ? 'none' : '100px',  // 设定固定的高度，展开时为自动高度
          overflow: 'hidden',  // 隐藏溢出的内容
          transition: 'max-height 0.3s ease',  // 平滑过渡
          padding: 2,
        }}
      >
        <Typography>
          This is a collapsible panel. You can put any content here, such as text, images, or other components.
          This is a collapsible panel. You can put any content here, such as text, images, or other components.
          This is a collapsible panel. You can put any content here, such as text, images, or other components.
          This is a collapsible panel. You can put any content here, such as text, images, or other components.
          This is a collapsible panel. You can put any content here, such as text, images, or other components.
          This is a collapsible panel. You can put any content here, such as text, images, or other components.
          This is a collapsible panel. You can put any content here, such as text, images, or other components.
          This is a collapsible panel. You can put any content here, such as text, images, or other components.
          This is a collapsible panel. You can put any content here, such as text, images, or other components.
          This is a collapsible panel. You can put any content here, such as text, images, or other components.
          This is a collapsible panel. You can put any content here, such as text, images, or other components.
          This is a collapsible panel. You can put any content here, such as text, images, or other components.
          This is a collapsible panel. You can put any content here, such as text, images, or other components.
          This is a collapsible panel. You can put any content here, such as text, images, or other components.
          This is a collapsible panel. You can put any content here, such as text, images, or other components.
        </Typography>
        <Typography>
          More content here! This content will be hidden when the panel is collapsed.
        </Typography>
        <Typography>
          Even more content can go here, and it will be hidden when collapsed!
        </Typography>
      </Box>
      
      <Box 
        sx={{
          padding: 1, 
          display: 'flex', 
          justifyContent: 'center',  // 中心对齐
          alignItems: 'center',      // 垂直居中
          
          backgroundColor: '#F7F7F700',  // 半透明的背景色
          borderRadius: '50%', // 圆形背景
        //   boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',  // 阴影效果
          cursor: 'pointer',  // 鼠标悬停时显示指针
          background: 'linear-gradient(180deg, #F7F7F700 0%, #F7F7F700 100%)',  // 添加渐变背景
        //   transition: 'background-color 0.3s ease',  // 背景色渐变效果
          ':hover': {
            // backgroundColor: 'rgba(0, 0, 0, 0.2)', // 鼠标悬停时改变背景透明度
          },
        }}
      >
        <IconButton onClick={togglePanel}>
          {expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </IconButton>
      </Box>
    </Box>
  );
};

export default CollapsiblePanel;
