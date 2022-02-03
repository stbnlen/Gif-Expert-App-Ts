import React from 'react';

import { Card } from './styles';

type GifProps = {
  title: string;
  url: string;
};

export const GifGridItem: React.FC<GifProps> = ({ title, url }) => {
  return (
    <Card className="animate__animated animate__zoomIn">
      <img src={url} alt={title} />
      <p>{title}</p>
    </Card>
  );
};
