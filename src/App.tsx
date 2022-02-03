import { AddCategory } from 'AddCategory';
import { GifGrid } from 'GifGrid';
import React, { useState } from 'react';
import { GlobalStyle } from 'styles/GlobalStyles';

function App() {
  const [categories, setCategories] = useState<string[]>(['One Punch']);
  return (
    <div>
      <GlobalStyle />
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={setCategories} />
      <hr />
      <ol>
        {categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
      </ol>
    </div>
  );
}

export default App;
