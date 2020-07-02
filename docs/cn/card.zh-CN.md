---
category: 文档
type: 通用
order: 2
title: Card
---

## 接口说明

## zh-CN

按钮有五种类型：主按钮、次按钮、虚线按钮、危险按钮和链接按钮。主按钮在同一个操作区域最多出现一次。



There are `primary` button, `default` button, `dashed` button, `danger` button and `link` button in antd.

```jsx
import { Card } from 'icecreamd';
import 'icecreamd/lib/Card/style/index.css';

ReactDOM.render(
  <div>
    <Card title="I only suck black dick" content="不吹不黑"></Card>
  </div>,
  mountNode,
);
```