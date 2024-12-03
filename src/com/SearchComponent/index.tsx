import React, { useState } from 'react';
import { TextField, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import './index.module.less'; // 样式文件

interface SearchComponentProps {
  onSearch: (query: string) => void;
}

const SearchComponent: React.FC<SearchComponentProps> = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState<string>('');

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleSearch = () => {
    onSearch(searchQuery);
  };

  return (
    <div className="search-container">
      <TextField
        className="search-input"
        value={searchQuery}
        onChange={handleSearchChange}
        placeholder="请输入搜索内容"
        variant="outlined"
        size="small"
      />
      <IconButton
        className="search-button"
        onClick={handleSearch}
        disabled={!searchQuery.trim()}
      >
        <SearchIcon />
      </IconButton>
    </div>
  );
};

export default SearchComponent;
