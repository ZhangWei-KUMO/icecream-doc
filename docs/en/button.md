---
category: Document
type: Components
order: 0
title: Button
---


```jsx
import { Button } from 'icecreamd';
import 'icecreamd/lib/Button/style/index.css';

ReactDOM.render(
  <div>
    <Button>Default</Button>
    <Button type="primary">Primary</Button>
    <Button type="danger">Error</Button>
    <Button type="warn">Warn</Button>
    <Button type="option">Submit</Button>
  </div>,
  mountNode,
);
```

## API

| Property | Description                                      | Type   | Default |
| :------- | :----------------------------------------------- | :----- | :------ |
| type     | Can be set to `primary` `warn` `option` `danger` | string | -       |