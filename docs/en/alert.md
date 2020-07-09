---
category: Document
type: Components
order: 2
title: Alert
---

```jsx
import { Alert } from 'icecreamd';
import 'icecreamd/lib/Alert/style/index.css';

ReactDOM.render(
  <div>
    <Alert
      image="https://github.githubassets.com/images/modules/site/sponsors/logo-mona.svg"
      title="Icecream library Tips" 
      content="Live as if you were to die tomorrow. Learn as if you were to live forever"
    />
  </div>,
  mountNode,
);
```

## API

| Property | Description                     | Type   | Default |
| :------- | :------------------------------ | :----- | :------ |
| title    | Can be set the title of Alert   | string | -       |
| image    | Can be set the image of Alert   | string | -       |
| content  | Can be set the content of Alert | string | -       |
