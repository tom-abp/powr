import {DefaultTheme} from 'styled-components';

export function getTheme(color: 'light' | 'dark', lgMode: boolean = false): DefaultTheme{
  return{
    background:{
      body: color === 'light' ? '#fff' : '#000',
      clickable: color === 'light' ? 'red' : '#333'
    },
    border:{
      clickable: 'none',
    },
    color:{
      body: color === 'light' ? '#000' : '#fff'
    },
    sizing:{
      0: '0rem',
      1: nSizing(1, lgMode),
      2: nSizing(2, lgMode),
      3: nSizing(3, lgMode),
      4: nSizing(4, lgMode),
      5: nSizing(5, lgMode),
      6: nSizing(6, lgMode),
      7: nSizing(7, lgMode),
      8: nSizing(8, lgMode),
      9: nSizing(9, lgMode),
      10: nSizing(10, lgMode),
      11: nSizing(11, lgMode),
    }
  }
}

function nSizing(n: number, lgMode: boolean): string{
  const base = 0.125;
  const fib = [0, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233];
  const val = fib[lgMode ? n + 1 : n] || 1;

  return `${val * base}rem`;
}