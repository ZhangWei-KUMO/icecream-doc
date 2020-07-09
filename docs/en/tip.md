---
category: Document
type: Components
order: 6
title: Tip
---

```jsx
import { Tip,Button } from 'icecreamd';
import 'icecreamd/lib/Tip/style/index.css';
import 'icecreamd/lib/Button/style/index.css';

ReactDOM.render(
  <div>
    <Tip content="Wikipedia is a free encyclopedia, written collaboratively by the people who use it. ">
      <Button>Hover Me</Button>
    </Tip>
  </div>,
  mountNode,
);
```

## API

| Property | Description                   | Type   | Default |
| :------- | :---------------------------- | :----- | :------ |
| content  | Can be set the content of Tip | string | -       |