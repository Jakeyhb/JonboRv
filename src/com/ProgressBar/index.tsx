import React, { useState, useEffect } from 'react';
import { Box, Typography, LinearProgress, CircularProgress } from '@mui/material';
import styles from './index.module.less';

type ProgressBarProps = {
  type?: 'linear' | 'circular'; // 进度条类型
  progress?: number; // 进度值（0-100）
  label?: boolean; // 是否显示进度值标签
  simulate?: boolean; // 是否模拟进度
  interval?: number; // 模拟进度的间隔时间（毫秒）
};

const ProgressBar: React.FC<ProgressBarProps> = ({
  type = 'linear',
  progress = 0,
  label = true,
  simulate = false,
  interval = 500,
}) => {
  const [currentProgress, setCurrentProgress] = useState(progress);

  useEffect(() => {
    let timer: number = 0
    if (simulate) {
      timer = setInterval(() => {
        const randomStep = Math.floor(Math.random() * 20) + 1; // 生成 1 到 20 之间的随机数
        setCurrentProgress((prev) => Math.min(prev + randomStep, 100)); // 使用随机步长模拟进度
      }, interval);
    } else {
      setCurrentProgress(progress); // 使用外部传入的 progress
    }

    return () => {
      if (timer) clearInterval(timer); // 清除定时器
    };
  }, [simulate, progress, interval]);

  return (
    <Box className={styles.progressBarContainer}>
      {type === 'linear' ? (
        <Box className={styles.linearProgressWrapper}>
          <LinearProgress
            variant="determinate"
            value={currentProgress}
            className={styles.linearProgress}
          />
          {label && (
            <Typography variant="body2" className={styles.progressLabel}>
              {currentProgress}%
            </Typography>
          )}
        </Box>
      ) : (
        <Box className={styles.circularProgressContainer}>
          <CircularProgress
            variant="determinate"
            value={currentProgress}
            className={styles.circularProgress}
          />
          {label && (
            <Typography variant="body2" className={styles.circularProgressLabel}>
              {currentProgress}%
            </Typography>
          )}
        </Box>
      )}
    </Box>
  );
};

export default ProgressBar;
