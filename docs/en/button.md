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
    <Button type="primary">Primary</Button>
    <Button>Default</Button>
  </div>,
  mountNode,
);
```

## API

|Property|    Description                                |  Type | Default |
|:-------|:----------------------------------------------|:------|:---|
|type  |Can be set to `primary` `ghost` `dashed` `danger`|string |  - |