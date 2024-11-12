import React, { useState } from 'react';
import { Upload, Button } from 'antd';
import { UploadOutlined, CloseOutlined } from '@ant-design/icons';

const CustomUpload = () => {
  const [fileList, setFileList] = useState([]);

  // 上传文件回调
  const handleChange = (info) => {
    let newFileList = [...info.fileList];
    setFileList(newFileList);
  };

  // 删除文件
  const handleRemove = (file) => {
    setFileList(fileList.filter((item) => item.uid !== file.uid));
  };

  // 自定义文件列表展示
  const renderFileList = () => (
    <div>
      {fileList.map((file) => (
        <div
          key={file.uid}
          style={{
            display: 'flex',
            alignItems: 'center',
            width: 275,
            borderBottom: '1px solid #e8e8e8',
            padding: '8px 0'
          }}
        >
          <div
            style={{
              maxWidth: 260,
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis'
            }}
          >
            {file.name}
          </div>
          <CloseOutlined
            onClick={() => handleRemove(file)}
            style={{ marginLeft: 'auto', cursor: 'pointer' }}
          />
        </div>
      ))}
    </div>
  );

  return (
    <div>
      <Upload
        customRequest={({ file, onSuccess }) => {
          setTimeout(() => {
            onSuccess("ok"); // 模拟上传成功
          }, 1000);
        }}
        onChange={handleChange}
        fileList={fileList}
        showUploadList={false} // 不使用默认的文件列表
      >
        <Button icon={<UploadOutlined />}>上传文件</Button>
      </Upload>
      {renderFileList()}
    </div>
  );
};

export default CustomUpload;
