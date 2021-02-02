import Wrapper from '../components/Wrapper';
import BotLogo from '../components/BotLogo';

import '../styles/pages/Splash.css';

export default function Splash({ onClick }: { onClick: () => void }) {
  return (
    <Wrapper>
      <section className="container">
        <BotLogo className="container__logo" />

        <h1 className="container__title">MH Bot</h1>
        <h2 className="container__subtitle">O guia de Monsenhor Hipólito</h2>

        <button type="button" className="container__button" onClick={onClick}>
          Começar agora
        </button>
      </section>
    </Wrapper>
  );
}
