---
category: Document
type: Components
order: 4
title: Bar
---

测试一下会不会显示

```jsx
import { GradientBar } from 'icecreamd';
import 'icecreamd/lib/GradientBar/style/index.css';

ReactDOM.render(
  <div>
   <GradientBar
       image="https://github.githubassets.com/images/modules/marketplace/action-icon-white.png"
       content="The more you like yourself, the less you are like anyone else, which makes you unique."
       buttonName="Expand More"
       link="https://github.com"
   />
  </div>,
  mountNode,
);
```

## API

| Property   | Description                      | Type   | Default       |
| :--------- | :------------------------------- | :----- | :------------ |
| title      | Can be set the title of bar      | string | "Your Title"  |
| image      | Can be set the image of bar      | string | -             |
| buttonName | Can be set the buttonName of bar | string | "Expand More" |
| link       | Can be set the link of bar       | string | "/"           |