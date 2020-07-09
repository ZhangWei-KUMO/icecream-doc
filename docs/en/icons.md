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
     <Col lg={4} md={6} sm={12} xs={12} >
        <center>
          <GuideBoarder/>
          <p>GuideBoarder</p>
        </center>
      </Col>
      <Col lg={4} md={6} sm={12} xs={12} >
        <center>
          <CheckBoard/>
          <p>CheckBoard</p>
        </center>
      </Col>
       <Col lg={4} md={6} sm={12} xs={12}>
        <center>
         <DoubleCheck/>
          <p>DoubleCheck</p>
         </center>
      </Col>
       <Col lg={4} md={6} sm={12} xs={12}>
          <center>
            <Finance/>
            <p>Finance</p>
          </center>
      </Col>
       <Col lg={4} md={6} sm={12} xs={12}>
         <center>
            <Feedback/>
            <p>Feedback</p>
          </center>
      </Col>
       <Col lg={4} md={6} sm={12} xs={12}>
          <center>
            <Icecream/>
            <p>Icecream</p>
          </center>
      </Col>
      <Col lg={4} md={6} sm={12} xs={12}>
          <center>
            <Industry/>
            <p>Industry</p>
          </center>
      </Col>
      <Col lg={4} md={6} sm={12} xs={12}>
          <center>
            <Navigator/>
            <p>Navigator</p>
          </center>
      </Col>
      <Col lg={4} md={6} sm={12} xs={12}>
          <center>
            <Rain/>
            <p>Rain</p>
          </center>
      </Col>
      <Col lg={4} md={6} sm={12} xs={12}>
          <center>
            <Thermometer/>
            <p>Thermometer</p>
          </center>
      </Col>
      <Col lg={4} md={6} sm={12} xs={12}>
        <center>
          <Tools/>
            <p>Tools</p>
        </center>
      </Col>
       <Col lg={4} md={6} sm={12} xs={12}>
          <center>
            <Wifi/>
            <p>Wifi</p>
          </center>
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