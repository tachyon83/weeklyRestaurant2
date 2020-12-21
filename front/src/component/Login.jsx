import React, { useCallback, useState } from "react";
import axios from 'axios';
import e from "cors";
const host = require("../host");

const Login = ({setIslogin}) => {

  const [loginValue, setLoginValue] = useState(
    {
      id : 'kim',
      pw : '123',
    }
  );

  const onLoginInputId = useCallback((e)=>{
    e.preventDefault();
    setLoginValue({...loginValue, id : e.target.value});
    console.log(loginValue)
  })

  const onLoginInputPassword = useCallback((e)=>{
    e.preventDefault();
    setLoginValue({...loginValue, pw : e.target.value});
    setTimeout(()=>{console.log(loginValue)}, 1000)
  })

  const handleLogin = useCallback((event) => {
    event.preventDefault();
    // setIslogin(true)
    console.log(loginValue)
    // axios.post(`${host.server}/member/login`, loginValue, {withCredentials:true}).then((result) => {
    //   console.log(result)
    //   setIslogin(true)
    // }).catch( error => { console.log('failed', error) })
  }, [setIslogin]);

  return (
    <form className="Login">
      <div className="Login__title">로그인</div>
      <div className="Login__inputWrap">
        <dl>
          <dt>ID</dt>
          <dd>
            <input type="text" onChange={onLoginInputId} value={loginValue.id} />
          </dd>
        </dl>
        <dl>
          <dt>Password</dt>
          <dd>
            <input type="password" onChange={onLoginInputPassword} value={loginValue.pw} />
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
