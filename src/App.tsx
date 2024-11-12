import React, { useEffect, useState } from 'react';
import MyWork from './com/MyWork';
import CustomUpload from './com/UploadCom';
import MediaUpload from './com/UploadCom/MediaUpload';


const App: React.FC = () => {


  return (
    <div>
      <MyWork />
      <CustomUpload />
      <MediaUpload />
    </div>
  );
};

export default App;
