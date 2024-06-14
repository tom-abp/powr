import 'styled-components';

declare module 'styled-components'{
  export interface DefaultTheme{
    background:{
      main: string,
      clickable: string
    },
    sizing:{
      '0': string,
      '1': string,
      '2': string,
      '3': string,
      '4': string,
      '5': string,
      '6': string,
      '7': string,
      '8': string,
      '9': string,
      '10': string,
      '11': string,
    }
  }
}