import React from 'react';

const LoginPage = () => {
  return (
    <>
    <LoginText />
    <LoginForm />
    </>
  );
};

const LoginText = () => {
  return (
  <>
  <div className="text-end" id="login_text">
    <p>JLPT N1を勉強しましょう！</p>
    <br></br>
    <p>Created By HK</p>
  </div>
  </>
  )
}

const LoginForm = () => {
  return (
  <>
  <div className="login_form">
    <p>メールアドレス</p>
    <input type="text" name="user_mail" id="login_mail" placeholder='メールアドレス'/>
    <button type="submit">送信</button>
  </div>
  </>
  )
}

export default LoginPage;