---
category: Document
type: Components
order: 4
title: Card
---


```jsx
import { Card } from 'icecreamd';
import 'icecreamd/lib/Card/style/index.css';

ReactDOM.render(
  <div>
    <div style={{display:"grid",gridTemplateColumns:'1fr 1fr 1fr', gridGap: "2em"}}>
      <Card title="Icecream Blocks"
            content="A simple React UI Components library and create enjoyabled fontend work"
            image="https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*yQqmQ514NNIAAAAAAAAAAABkARQnAQ"
            moment="2020-02-12"
      />
          
      <Card title="Icecream BlocksIcecream BlocksIcecream BlocksIcecream BlocksIcecream Blocks"
            content="A simple React UI Components library and create enjoyabled fontend workA simple React UI Components library and create enjoyabled fontend workA simple React UI Components library and create enjoyabled fontend workA simple React UI Components library and create enjoyabled fontend workA simple React UI Components library and create enjoyabled fontend workA simple React UI Components library and create enjoyabled fontend work"
            image="https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*yQqmQ514NNIAAAAAAAAAAABkARQnAQ"
            moment="2020-02-12"
        />
        <Card />
    </div>
  </div>,
  mountNode,
);
```