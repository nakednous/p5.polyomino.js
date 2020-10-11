
import { configuration } from '@codedoc/core';

import { theme } from './theme';


export const config = /*#__PURE__*/configuration({
  theme,                                  // --> add the theme. modify `./theme.ts` for chaning the theme.
  dest: {
    // ...
    html: 'dist',
    assets: 'dist'
  },
  page: {
    title: {
      base: 'P5.polyomino.js'             // --> the base title of your doc pages
    }
  },
  
});
