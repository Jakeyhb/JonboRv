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
  const ceshi = async (action: any, form: any) => {
    let loadingStatus = 0;  // 0: 未开始, 1: 上传中, 2: 完成
    let uploadResult = {
      filePath: '',
      fileName: '',
      size: 0,
      progress: 0,  // 进度条百分比
    };
  
    // 显示上传的loading状态
    const setLoadingStatus = (status: number) => {
      loadingStatus = status;
      console.log('loadingStatus:', loadingStatus);  // 可以在这里更新UI
    };
  
    // 开始上传文件
    setLoadingStatus(1);  // 上传中
    try {
      await uploadAction(action, form, (progressEvent: ProgressEvent) => {
        const { total, loaded } = progressEvent;
        const progress = total ? Math.round((loaded / total) * 100) : 0;
  
        // 更新进度
        uploadResult.progress = progress;
  
        // 更新UI中的进度条
        console.log(`Progress: ${progress}%`);
      });
  
      // 上传完成后，处理返回的数据
      const response = await action(form);  // 假设action返回的是上传后的接口响应
      uploadResult.filePath = response.filePath;
      uploadResult.fileName = response.fileName;
      uploadResult.size = response.size;
  
      // 完成上传
      setLoadingStatus(2);  // 上传完成
      console.log('Upload completed:', uploadResult);
  
    } catch (error) {
      setLoadingStatus(0);  // 上传失败
      console.error('Upload failed:', error);
    }
  };
  

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
