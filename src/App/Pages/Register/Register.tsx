import React from "react";
import UseRegisterController from "./Register.controller";

const Register = () => {
  const { Actions, Register } = UseRegisterController();
  return (
    <div>
      <form onSubmit={Actions.onSubmit}>
        <label>
          <span>Name</span>
          <input type="text" {...Register.input("name")} />
        </label>
        <label>
          <span>Password</span>
          <input type="password" {...Register.input("password")} />
        </label>
        <label>
          <span>Password</span>
          <input type="password" {...Register.input("confirmPassword")} />
        </label>
        <button type="submit">Criar</button>
      </form>
    </div>
  );
};

export default Register;
