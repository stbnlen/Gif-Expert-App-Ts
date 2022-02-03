import { GifGridItem } from 'GifGridItem';
import React from 'react';

import { useFetchGifs } from '../hooks/useFetchGifs';
import { CardGrid } from './styles';

type Props = {
  category: string;
};

type Img = {
  id: string;
  title: string;
  url: string;
};

export const GifGrid: React.FC<Props> = ({ category }) => {
  const { data: images, loading } = useFetchGifs(category);
  return (
    <>
      <h3 className="animate__animated animate__fadeInDown">{category}</h3>

      {loading && <p className="animate__animated animate__flash">Loading</p>}

      <CardGrid>
        {images.map((img: Img) => (
          <GifGridItem key={img.id} title={img.title} url={img.url} />
        ))}
      </CardGrid>
    </>
  );
};
