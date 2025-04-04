import React from 'react';

type UserProps = {
  name: string;
  isLoggedIn?: boolean;
};

const LoginHeader = ({ name, isLoggedIn = false }: UserProps) => {
  return (
    <>
      <div className="header_home">ホーム</div>
      <MainText />
      <div className="header_user">
        <p>{isLoggedIn ? name : ''}</p>
      </div>
    </>
  );
};

const MainText = () => {
  return (
    <div className="header_main">
      <p id="header_main_text">日本語キム</p>
    </div>
  );
};

export default LoginHeader;