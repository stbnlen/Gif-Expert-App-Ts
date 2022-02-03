import { getGifs } from 'helpers/getGifs';
import { useEffect, useState } from 'react';

type Gifs = {
  id: string;
  title: string;
  url: string;
};

type State = {
  data: Gifs[];
  loading: boolean;
};

export const useFetchGifs = (category: string) => {
  const [state, setState] = useState<State>({
    data: [],
    loading: true,
  });

  useEffect(() => {
    getGifs(category).then((imgs: Gifs[]) => {
      setState({
        data: imgs,
        loading: false,
      });
    });
  }, [category]);

  return state;
};
