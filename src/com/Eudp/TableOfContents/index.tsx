import React from 'react';
import { Box, List, ListItem, ListItemText, Typography, IconButton } from '@mui/material';
import { Close } from '@mui/icons-material';

interface Chapter {
  title: string;
  content: string;
}

interface TableOfContentsProps {
  chapters: Chapter[];
  onChapterSelect: (index: number) => void;
  onClose: () => void;
}

const TableOfContents: React.FC<TableOfContentsProps> = ({ chapters, onChapterSelect, onClose }) => {
  return (
    <Box
      sx={{
        width: 300,
        right:"80px",
        top:"50%",
        height: 'auto',
        bgcolor: 'background.paper',
        boxShadow: 3,
        overflowY: 'auto',
        p: 2,
        position: 'absolute',
        zIndex: 1000,
      }}
    >
      {/* 关闭按钮 */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography variant="h6">目录</Typography>
        <IconButton onClick={onClose} aria-label="关闭">
          <Close />
        </IconButton>
      </Box>

      {/* 章节列表 */}
      <List>
        {chapters.map((chapter, index) => (
          <ListItem button key={index} onClick={() => onChapterSelect(index)}>
            <ListItemText primary={chapter.title} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default TableOfContents;
