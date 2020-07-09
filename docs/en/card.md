---
category: Document
type: Components
order: 4
title: Card
---


```jsx
import { Row, Col } from 'antd';
import { Card } from 'icecreamd';
import 'icecreamd/lib/Card/style/index.css';

ReactDOM.render(
  <div>
    <Row>
    <Col lg={8}>
      <Card title="Icecream Blocks"
            content="A simple React UI Components library and create enjoyabled fontend work"
            image="https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*yQqmQ514NNIAAAAAAAAAAABkARQnAQ"
            moment="2020-02-12"
            link="https://cloud-wave.cn/icecream/"
      />
        </Col>  
        <Col lg={8}>
      <Card title="Icecream BlocksIcecream BlocksIcecream BlocksIcecream BlocksIcecream Blocks"
            content="A simple React UI Components library and create enjoyabled fontend workA simple React UI Components library and create enjoyabled fontend workA simple React UI Components library and create enjoyabled fontend workA simple React UI Components library and create enjoyabled fontend workA simple React UI Components library and create enjoyabled fontend workA simple React UI Components library and create enjoyabled fontend work"
            image="https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*yQqmQ514NNIAAAAAAAAAAABkARQnAQ"
            moment="2020-02-12"
            link="https://cloud-wave.cn/icecream/"

        />
        </Col>  
        <Col lg={8}>
        <Card />
          </Col>  
    </Row>
  </div>,
  mountNode,
);
```

## API

| Property | Description                       | Type   | Default |
| :------- | :-------------------------------- | :----- | :------ |
| title    | Can be set the title of Card      | string | -       |
| content  | Can be set the content of Card    | string | -       |
| image    | Can be set the image of Card      | string | -       |
| moment   | Can be set the buttonName of Card | string | -       |
| link     | Can be set the link of Card       | string | "/#"    |