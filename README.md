`react-fixed-align` is a very simple react component to create fixed positioned, full width and full height wrappper components. It uses `position: fixed` and `display: flex` internally which you could do easily by yourself. Really its that simple. But if you are lazy enough (like me 🥱) to repeat this in so many screens in your apps you could use the plugin. 😀✌️

[![Build Status](https://travis-ci.org/codedotz/react-fixed-align.svg?branch=master)](https://travis-ci.org/codedotz/react-fixed-align)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
![GitHub](https://img.shields.io/github/license/codedotz/react-fixed-align)
![npm (scoped)](https://img.shields.io/npm/v/@code.z/react-fixed-align)

### Install

**npm**
`npm i @code.z/react-fixed-align`

**yarn**
`yarn add @code.z/react-fixed-align`

### Example

```js
import React from "react";
import FixedScreen from "@code.z/react-fixed-align";
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
| yAlign        | `String`  | "top"   | no       | vertically align content ["top", "middle", "bottom"]  |
| style         | `Object`  | -       | no       | Override styles or add addtional styles               |

### ENJOY 😀🤚
