import { ReactNode } from 'react';

import '../styles/components/Wrapper.css';

export default function Wrapper({ children }: { children: ReactNode }) {
  return <main className="wrapper">{children}</main>;
}
