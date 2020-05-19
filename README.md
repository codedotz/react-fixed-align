# react-fixed-align

`react-fixed-align` is a very simple react component to create fixed positioned, full width and full height wrappper components. It uses `position: fixed` and `display: flex` internally which you could do this by yourself. Or if you are lazy enough (like me 🥱) to repeat this in your apps you could use the plugin. 😀✌️

### Example

```js
import React from "react";
import FixedScreen from "sample";
import classNames from "./App.module.scss";

function App() {
  return (
    <FixedScreen xAlign="center" yAlign="middle" className={classNames.wrapper}>
      <div style={loginStyles}>
        <h1>Login</h1>
        <input style={inputStyles} type="email" placeholder="email" />
        <input style={inputStyles} type="password" placeholder="password" />
        <button>Login</button>
      </div>
    </FixedScreen>
  );
}

export default App;
```

**Note: If you set `middleAlign` to `true` then `xAlign` and `yAlign` will be ignored.**

| Prop          | Type      | Default | Required | Description                                           |
| ------------- | --------- | ------- | -------- | ----------------------------------------------------- |
| el            | `String`  | "div"   | no       | Wrapper element. Any html element                     |
| enableXScroll | `Boolean` | false   | no       | Enable full width scrolling for content overflow      |
| enableYScroll | `Boolean` | false   | no       | Enable full height scrolling for content overflow     |
| className     | `string`  | -       | no       | Ddd additional styles                                 |
| middleAlign   | `Boolean` | false   | no       | Middle align content                                  |
| xAlign        | `String`  | "left"  | no       | Horizontally align content ["left", "center", "right] |
| style         | `Object`  | -       | no       | Override styles or add addtional styles               |

### ENJOY 😀🤚
