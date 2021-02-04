import Wrapper from '../components/Wrapper';
import BotLogo from '../components/BotLogo';

import '../styles/pages/Splash.css';

export default function Splash({ onClick }: { onClick: () => void }) {
  return (
    <Wrapper animation={{ appear: true, move: true }}>
      <section className="splash-container">
        <BotLogo className="splash-container__logo" />

        <h1 className="splash-container__title">MH Bot</h1>
        <h2 className="splash-container__subtitle">
          O guia de Monsenhor Hipólito
        </h2>

        <button
          type="button"
          className="splash-container__button"
          onClick={onClick}
        >
          Começar agora
        </button>
      </section>
    </Wrapper>
  );
}
