import { ReactNode } from 'react';

import '../styles/components/Wrapper.css';

interface WrapperProps {
  animation?: {
    appear?: boolean;
    move?: boolean;
  };
  children: ReactNode;
}

export default function Wrapper({ animation = {}, children }: WrapperProps) {
  return (
    <main
      className={`wrapper ${animation.appear && 'wrapper--appear'} ${
        animation.move && 'wrapper--move'
      }`}
    >
      {children}
    </main>
  );
}
