// src/components/ImageDisplay/index.tsx
import React from 'react';
import { Box, Avatar, Typography } from '@mui/material';
import { imageData } from './data';  // 引入配置数据
import styles from './index.module.less';  // 引入样式

const ImageDisplay: React.FC = () => {
  return (
    <div className={styles.container}>
      {imageData.map((item) => (
        <Box key={item.id} className={styles.card}>
          <a href={item.link} target="_blank" rel="noopener noreferrer" className={styles.link}>
            <Avatar alt={item.label} src={item.imageUrl} className={styles.avatar} />
            <Box className={styles.labelWrapper}>
              <img src={item.icon} alt={`${item.label} icon`} className={styles.icon} />
              <Typography variant="body2" className={styles.label}>
                {item.label}
              </Typography>
            </Box>
          </a>
        </Box>
      ))}
    </div>
  );
};

export default ImageDisplay;
