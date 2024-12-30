// src/pages/AboutPage.tsx
import React from 'react';
import EpubReader from '../com/Eudp';

const AboutPage: React.FC = () => {
  return (
    <div>
      <div>
      <h1>EPUB Reader</h1>
      <EpubReader />
    </div>
    </div>
  );
};

export default AboutPage;
