---
category: Document
type: Components
order: 0
title: IconCard
---


```jsx
import { IconCard } from 'icecreamd';
import 'icecreamd/lib/IconCard/style/index.css';

ReactDOM.render(
  <div>
    <IconCard 
      title="React Components"
      icon="https://cloud-wave.cn/images/vpn-icon.png"
      iconColor="#fff"
      color="#fff"
      background="https://cloud-wave.cn/images/vpn-bc.jpeg"
      link="https://cloud-wave.cn"
    />
  </div>,
  mountNode,
);
```

## API

|Property|    Description                                |  Type | Default |
|:-------|:----------------------------------------------|:------|:---|
|title  |Can be set any title |string |  - |
|icon  |Can be set your icon link |string |  - |
|background  |Can be set your background link |string |  - |
|link  |Can be set card link |string |  # |
|iconColor  |Can be set icon background color |string |  green |
|color  |Can be set card title color |string |  #000 |