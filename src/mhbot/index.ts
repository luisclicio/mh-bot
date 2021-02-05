import Bot from '../lib/bot';
import queries from './queries';

const MHBot = Bot(
  queries,
  'Desculpe, não encontrei conteúdo relacionado ao que você perguntou.'
);

export default MHBot;
