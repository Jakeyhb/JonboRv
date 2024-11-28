import React from 'react';
import { Box, Typography } from '@mui/material';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import styles from './index.module.less';

type FilePreviewProps = {
  fileType: number;
  fileUrl: string;
  fileName: string;
};

const FilePreview: React.FC<FilePreviewProps> = ({ fileType, fileUrl, fileName }) => {
  const isImage = fileType === 6;
  const isVideo = fileType === 7;

  return (
    <Box className={styles.previewContainer}>
      {isImage ? (
        <img src={fileUrl} alt={fileName} className={styles.media} />
      ) : isVideo ? (
        <video src={fileUrl} controls className={styles.media} />
      ) : (
        <Box className={styles.fileIconContainer}>
          <InsertDriveFileIcon fontSize="large" />
          <Typography variant="body2" className={styles.fileName}>
            {fileName}
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default FilePreview;
