// components/Greeting.tsx
import React, { FC } from 'react';

interface GreetingProps {
  name: string;
}

const Greeting: FC<GreetingProps> = ({ name }) => {
  return <h1>Olá, {name}!</h1>;
}

export default Greeting;
