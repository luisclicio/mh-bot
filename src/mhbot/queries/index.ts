import { QueryItem } from '../../lib/bot';

const queries: QueryItem[] = [
  {
    pattern: /info|sobre/i,
    response: () => {
      return 'Sou o **MH Bot**, desenvolvido pelo [Luís Clício](https://github.com/darktechlc), estou aqui para te auxiliar!';
    },
  },
  {
    pattern: /oi|ol(á|a)|hi|hello/i,
    response: () => {
      return 'Olá! Em que posso ajudar?';
    },
  },
  {
    pattern: /loja|mercado/i,
    response: () => {
      return `Lojas/Mercados da cidade:
  - [Mercado 1](#)
  - [Mercado 2](#)
`;
    },
  },
];

export default queries;
