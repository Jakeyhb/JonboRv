import React from 'react';
import { Avatar, Typography, Box } from '@mui/material';

type AvatarWithLabelProps = {
  label: string;
  img: string;  // 头像图片的 URL
};

const AvatarWithLabel: React.FC<AvatarWithLabelProps> = ({ label, img }) => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
      <Avatar
        alt={label}
        src={img}
        sx={{ width: 56, height: 56 }}
      />
      <Typography
        variant="body2"
        sx={{
          position: 'absolute',
          bottom: -20,  // 向下移动 20px
          width: '100%',  // 保证标签宽度与头像一致
          textAlign: 'center',
          backgroundColor: 'rgba(255, 255, 255, 0.7)', // 半透明背景
          padding: '0 4px',  // 给标签加点左右内边距
          borderRadius: '4px', // 可选：为标签加圆角
        }}
      >
        {label}
      </Typography>
    </Box>
  );
};

export default AvatarWithLabel;
