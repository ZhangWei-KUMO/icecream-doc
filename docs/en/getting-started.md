---
category: Overview
order: 1
title: Getting Started
---

##  Using icecreamD component

Replace the content of index.js with the following code. As you can see, there is no difference between icecreamD's components and typical React components.

If you already set up by Install and Initialization section of "Use in create-react-app", Please replace the content of /src/index.js

```js
import React, { useState } from 'react';
import { render } from 'react-dom';
import { Bar, Button } from 'antd';
import 'antd/dist/antd.css';
import './index.css';

const App = () => {
  return (
    <div style={{ width: 400, margin: '100px auto' }}>
      <Bar title="Welcome to Shanghai" />
      <Button>
       Submit
      </Button>
    </div>
  );
};

render(<App />, document.getElementById('root'));
```