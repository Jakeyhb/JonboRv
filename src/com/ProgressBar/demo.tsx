import React from 'react';
import { Box, Button } from '@mui/material';
import ProgressBar from './index'; // 导入进度条组件

const Demo = () => {
  const [simulate, setSimulate] = React.useState(false);
  const [progress, setProgress] = React.useState(0);

  const startSimulation = () => {
    setSimulate(true); // 开始模拟进度
  };

  const stopSimulation = () => {
    setSimulate(false); // 停止模拟
  };

  const resetProgress = () => {
    setProgress(0); // 重置进度
  };

  return (
    <Box sx={{ padding: 2 }}>
      <h2>进度条示例</h2>
      
      {/* 控制进度条的按钮 */}
      <Button variant="contained" color="primary" onClick={startSimulation}>
        开始模拟
      </Button>
      <Button variant="outlined" color="secondary" onClick={stopSimulation} sx={{ marginLeft: 2 }}>
        停止模拟
      </Button>
      <Button variant="text" color="error" onClick={resetProgress} sx={{ marginLeft: 2 }}>
        重置进度
      </Button>

      {/* 线性进度条 */}
      <ProgressBar
        type="linear"
        simulate={simulate}
        interval={500}  // 每次进度更新的间隔
        progress={progress}  // 控制进度
        label={true}  // 显示进度百分比
      />
      
      {/* 环形进度条 */}
      <ProgressBar
        type="circular"
        simulate={simulate}
        interval={500}
        progress={progress}
        label={true}
      />
    </Box>
  );
};

export default Demo;
