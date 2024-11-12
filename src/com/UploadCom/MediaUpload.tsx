import React, { useState } from 'react';
import { Upload, Button, UploadFile } from 'antd';
import { UploadOutlined, CloseOutlined } from '@ant-design/icons';
import styles from './index.module.less';

interface MediaUploadProps {}

const MediaUpload: React.FC<MediaUploadProps> = () => {
  const [fileList, setFileList] = useState<UploadFile[]>([]);

  // 上传文件回调
  const handleChange = (info: { fileList: UploadFile[] }) => {
    let newFileList = [...info.fileList];
    setFileList(newFileList);
  };

  // 删除文件
  const handleRemove = (file: UploadFile) => {
    setFileList(fileList.filter((item) => item.uid !== file.uid));
  };

  // 自定义文件列表展示
  const renderMediaList = () => (
    <div className={styles.mediaList}>
      {fileList.map((file) => (
        <div key={file.uid} className={styles.mediaItem}>
          {file.type?.startsWith('image') ? (
            <img
              src={URL.createObjectURL(file.originFileObj as Blob)}
              alt={file.name}
              className={styles.mediaContent}
            />
          ) : (
            <video
              src={URL.createObjectURL(file.originFileObj as Blob)}
              className={styles.mediaContent}
              controls={false}
            />
          )}
          <div
            onClick={() => handleRemove(file)}
            className={styles.deleteIcon}
          >
            <CloseOutlined />
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div>
      <Upload
        accept="image/*,video/*"
        customRequest={({ file, onSuccess }) => {
          setTimeout(() => {
            onSuccess && onSuccess("ok"); // 模拟上传成功
          }, 1000);
        }}
        onChange={handleChange}
        fileList={fileList}
        showUploadList={false} // 不使用默认的文件列表
      >
        <Button icon={<UploadOutlined />}>上传图片/视频</Button>
      </Upload>
      {renderMediaList()}
    </div>
  );
};

export default MediaUpload;
