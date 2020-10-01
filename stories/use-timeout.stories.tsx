import * as React from 'react';
import { useState } from 'react';
import { Meta } from '@storybook/react';
import { useTimeout } from '../src';

const meta: Meta = {
  title: 'use-timeout',
};

export default meta;

export const UseTimeout = () => {
  const [userInput, setUserInput] = useState('1000');

  const ms = parseMS(userInput);

  const done = useTimeout(ms);

  return (
    <div>
      <input
        type="text"
        value={userInput}
        onChange={e => setUserInput(e.target.value)}
      />
      <p>ms: {String(ms)}</p>
      <p>done: {String(done)}</p>
    </div>
  );
};

function parseMS(str: string) {
  try {
    const result = JSON.parse(str);
    if (
      !(
        result == null ||
        typeof result === 'boolean' ||
        typeof result === 'number'
      )
    ) {
      return undefined;
    } else {
      return result;
    }
  } catch {
    return undefined;
  }
}
