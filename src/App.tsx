import React from 'react';
import MyWork from './com/MyWork';
import CustomUpload from './com/UploadCom';
import MediaUpload from './com/UploadCom/MediaUpload';
import CollapsiblePanel from './com/Accordion';
import Demo from './com/ProgressBar/demo';
import AvatarWithLabel from './com/Avatar';


const App: React.FC = () => {


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
    </div>
  );
};

export default App;
