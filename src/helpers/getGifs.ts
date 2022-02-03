// Esto retorna una promera que se va a resolver en GifGrid
type Data = {
  id: string;
  title: string;
  images: Imgs;
};

type Imgs = {
  downsized_medium: Url;
};

type Url = {
  url: string;
};

export const getGifs = async (category: string) => {
  const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
    category,
  )}&limit=12&api_key=${'TkiFwkpRt1RiKGtnkuV4YJjRiaOWzSJ8'}`;
  const resp = await fetch(url);
  const { data } = await resp.json();

  const gifs = data.map((img: Data) => {
    return {
      id: img.id,
      title: img.title,
      url: img.images?.downsized_medium.url,
    };
  });

  return gifs;
};
