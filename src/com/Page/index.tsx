import AppBar from '@mui/material/AppBar/AppBar';
import React, { useEffect, useCallback, useRef, useState } from 'react';
import CustomUpload from '../UploadCom';
import MediaUpload from '../UploadCom/MediaUpload';
import CollapsiblePanel from '../Accordion';
import AvatarWithLabel from '../Avatar';
import ImageDisplay from '../Custim';
import SearchComponent from '../SearchComponent';

const Page = () => {
  const [isSearchSticky, setIsSearchSticky] = useState(false);
  const [isCollapsiblePanelSticky, setIsCollapsiblePanelSticky] = useState(false);
  const collapsiblePanelRef = useRef<HTMLDivElement>(null);

  const handleScroll = useCallback(() => {
    // 固定 Search
    if (window.scrollY >= 320) {
      setIsSearchSticky(true);
    } else {
      setIsSearchSticky(false);
    }

    // 固定 CollapsiblePanel
    if (collapsiblePanelRef.current) {
      const panelPosition = collapsiblePanelRef.current.getBoundingClientRect().top;
      if (panelPosition <= window.innerHeight && panelPosition >= 0) {
        setIsCollapsiblePanelSticky(true);
      } else {
        setIsCollapsiblePanelSticky(false);
      }
    }
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // 清理事件监听
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  const handleSearch = () => {
    throw new Error('Function not implemented.');
  };

  return (
    <div className="page">
    <div className="tabBar">
      <AppBar /> 
    </div>

    <div className={`customUpload ${isSearchSticky ? 'sticky' : ''}`}>
      <CustomUpload />
    </div>

    <div className={`mediaUpload ${isSearchSticky ? 'sticky' : ''}`}>
      <MediaUpload />
    </div>

    <div className={`collapsiblePanel ${isCollapsiblePanelSticky ? 'sticky' : ''}`} ref={collapsiblePanelRef}>
      <CollapsiblePanel />
    </div>



    <div className="avatars">
      <AvatarWithLabel label="John Doe" img="https://example.com/avatar.jpg" />
      <AvatarWithLabel label="Jane Smith" img="https://example.com/avatar2.jpg" />
    </div>

    <div className="imageDisplay">
      <ImageDisplay />  {/* 使用 ImageDisplay 组件 */}
    </div>

    <div className="searchComponent">
      <SearchComponent onSearch={handleSearch} />
    </div>
  </div>
  );
};

export default Page;
