# @yao-react/use-timeout

React hook to treat timeout effect as state.

## Install

```
npm install @yao-react/use-timeout
```

```
yarn add @yao-react/use-timeout
```

## Getting started

```tsx
import { useTimeout } from '@yao-react/use-timeout';

const Demo = () => {
  const done = useTimeout(1000);
  return <div>{done ? 'Done' : 'Not yet'}</div>;
};
```

## API

| name | type                                   | required | description               |
| ---- | -------------------------------------- | -------- | ------------------------- |
| ms   | null \| undefined \| boolean \| number | false    | the milliseconds to delay |
| deps | Array<any>                             | false    |                           |

- When `ms` is `null | undefined | false | Infinity`, it will never done and there will be no timer
- When `ms` is `true | <0`, it is done immediately and there will be no timer
