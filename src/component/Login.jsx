import React, { useCallback } from "react";

const Login = ({setIslogin}) => {

  const handleLogin = useCallback((event) => {
    event.preventDefault();
    setIslogin(true)
  }, [setIslogin]);

  return (
    <form className="Login">
      <div className="Login__title">로그인</div>
      <div className="Login__inputWrap">
        <dl>
          <dt>ID</dt>
          <dd>
            <input type="text" />
          </dd>
        </dl>
        <dl>
          <dt>Password</dt>
          <dd>
            <input type="password" />
          </dd>
        </dl>
        <div className="Login__buttonWrap">
          <button className="Login__button" onClick={handleLogin}>
            로그인
          </button>
        </div>
      </div>
    </form>
  );
};

export default Login;
