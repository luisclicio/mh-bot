import { FormEvent, useRef, useState } from 'react';
import { BiInfoCircle as InfoIcon, BiSend as SendIcon } from 'react-icons/bi';
import ReactMarkdown from 'react-markdown';

import Wrapper from '../components/Wrapper';
import BotLogo from '../components/BotLogo';

import MHBot from '../mhbot';
import suggestions from '../mhbot/suggestions';

import '../styles/pages/Chat.css';

interface MessageItem {
  from: 'bot' | 'user';
  text: string;
}

const initialMessages: MessageItem[] = [
  {
    from: 'bot',
    text: 'Olá, sou o **MH Bot**! Estou aqui para te ajudar!',
  },
  {
    from: 'bot',
    text: 'Pergunte sobre algo, buscarei informações relacionadas.',
  },
];

export default function Chat({ onClick }: { onClick: () => void }) {
  const [messages, setMessages] = useState<MessageItem[]>(initialMessages);
  const [message, setMessage] = useState('');

  const messagesContainer = useRef<HTMLElement>(null);
  const messageInput = useRef<HTMLInputElement>(null);

  function scrollMessagesContainerToBottom() {
    messagesContainer.current?.scrollBy({
      top: messagesContainer.current.scrollHeight,
      behavior: 'smooth',
    });
  }

  function loadResponses(message: string) {
    const botResponses: MessageItem[] = MHBot(message).map((response) => ({
      from: 'bot',
      text: response,
    }));

    setMessages([
      ...messages,
      {
        from: 'user',
        text: message,
      },
      ...botResponses,
    ]);

    setTimeout(scrollMessagesContainerToBottom, 0);
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    messageInput.current?.focus();

    if (!message) {
      return;
    }

    loadResponses(message);
    setMessage('');
  }

  return (
    <Wrapper animation={{ appear: true }}>
      <section className="chat-container">
        <header className="chat-container__header">
          <div className="chat-container__header__profile">
            <BotLogo className="chat-container__header__profile__logo" />
            <span className="chat-container__header__profile__text">
              MH Bot
            </span>
          </div>

          <button
            type="button"
            className="chat-container__header__button"
            title="Informações sobre o MH Bot"
            onClick={onClick}
          >
            <InfoIcon size={24} color="#fafafa" />
          </button>
        </header>

        <section className="chat-container__messages" ref={messagesContainer}>
          {messages.map((message, index) => (
            <article
              key={`message_${index}`}
              className={`chat-container__messages__message chat-container__messages__message--${message.from}`}
            >
              <ReactMarkdown>{message.text}</ReactMarkdown>
            </article>
          ))}
        </section>

        <footer className="chat-container__user-input">
          <div className="chat-container__user-input__suggestions">
            {suggestions.map((suggestion) => (
              <input
                type="button"
                value={suggestion.toLocaleLowerCase()}
                className="chat-container__user-input__suggestions__suggestion"
                key={suggestion}
                onClick={() => loadResponses(suggestion)}
              />
            ))}
          </div>

          <form
            className="chat-container__user-input__form"
            onSubmit={handleSubmit}
          >
            <input
              placeholder="Digite uma mensagem"
              className="chat-container__user-input__form__input"
              ref={messageInput}
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              onClick={scrollMessagesContainerToBottom}
            />

            <button
              type="submit"
              className="chat-container__user-input__form__button"
            >
              <SendIcon
                size={24}
                color="#4a6afe"
                className="chat-container__user-input__form__button__icon"
              />
            </button>
          </form>
        </footer>
      </section>
    </Wrapper>
  );
}
