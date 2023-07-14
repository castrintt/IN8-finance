import React from "react";
import UseLoginController from "./Login.controller";

const Login = () => {
  const { Actions, Helpers } = UseLoginController();

  return (
    <div>
      <form onSubmit={Actions.onSubmit}>
        <label>
          <span>Name</span>
          <input type="text" {...Helpers.input("name")} />
        </label>
        <label>
          <span>Password</span>
          <input type="password" {...Helpers.input("password")} />
        </label>
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
};

export default Login;
