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

const loginStyles = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  width: 400,
  background: "#fff",
  borderRadius: 3,
  padding: 20,
};

const inputStyles = {
  border: "1px solid #e2e2e2",
  outline: "none",
  height: 40,
  width: "100%",
  borderRadius: 3,
  marginBottom: 20,
  padding: "0 10px",
};
