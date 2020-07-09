---
category: Document
type: Components
order: 1
title: Icons
---

```jsx
import {Row,Col} from 'antd';
import { 
  GuideBoarder,
  CheckBoard,
  DoubleCheck,
  Finance,
  Feedback,
  Icecream,
  Industry,
  Navigator,
  Rain,
  Thermometer,
  Tools,
  Wifi,
  } from 'react-dynamic-vector-icons';

ReactDOM.render(
  <Row>
     <Col span={4}>
        <GuideBoarder/>
        <p>GuideBoarder</p>
      </Col>
      <Col span={4}>
        <CheckBoard/>
         <p>CheckBoard</p>
      </Col>
       <Col span={4}>
         <DoubleCheck/>
          <p>DoubleCheck</p>
      </Col>
       <Col span={4}>
         <Finance/>
          <p>Finance</p>
      </Col>
       <Col span={4}>
        <Feedback/>
         <p>Feedback</p>
      </Col>
       <Col span={4}>
         <Icecream/>
          <p>Icecream</p>
      </Col>
      <Col span={4}>
         <Industry/>
          <p>Industry</p>
      </Col>
      <Col span={4}>
         <Navigator/>
          <p>Navigator</p>
      </Col>
      <Col span={4}>
         <Rain/>
          <p>Rain</p>
      </Col>
      <Col span={4}>
         <Thermometer/>
          <p>Thermometer</p>
      </Col>
      <Col span={4}>
         <Tools/>
          <p>Tools</p>
      </Col>
       <Col span={4}>
         <Wifi/>
          <p>Wifi</p>
      </Col>
  </Row>,
  mountNode,
);
```

> Notice: For reducing size, we sperate the icons as a single package from icecreamd.

```bash
yarn add react-dynamic-vector-icons
# or
npm install react-dynamic-vector-icons
```