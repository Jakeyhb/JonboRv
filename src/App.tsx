import React from 'react';
import MyWork from './com/MyWork';
import CustomUpload from './com/UploadCom';
import MediaUpload from './com/UploadCom/MediaUpload';
import CollapsiblePanel from './com/Accordion';
import Demo from './com/ProgressBar/demo';
import AvatarWithLabel from './com/Avatar';
import ImageDisplay from './com/Custim';
import SearchComponent from './com/SearchComponent';


const App: React.FC = () => {
  const handleSearch = (query: string) => {
    console.log('Searching for:', query);
    // 这里可以加入处理搜索逻辑，例如 API 请求
  };

  return (
    <div>
      <MyWork />
      <CustomUpload />
      <MediaUpload />
      <CollapsiblePanel />
      <Demo />
      <AvatarWithLabel
        label="John Doe"
        img="https://example.com/avatar.jpg"
      />
      <AvatarWithLabel
        label="Jane Smith"
        img="https://example.com/avatar2.jpg"
      />

      <h1>Image Display Component</h1>
      <ImageDisplay />  {/* 使用 ImageDisplay 组件 */}


      <SearchComponent onSearch={handleSearch} />
    </div>
  );
};

export default App;
