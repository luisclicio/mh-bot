import botLogo from '../assets/BotLogo.svg';

export default function BotLogo({ ...props }) {
  return (
    <img src={botLogo} alt="Logotipo do MH Bot" loading="lazy" {...props} />
  );
}
