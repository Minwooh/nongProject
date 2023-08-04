import React, { useState } from "react";
import styled from "styled-components";
import "./Placeholder.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Container = styled.div`
  position: relative;
  text-align: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 414px;
  height: 736px;

  border: 1px solid #000;
  background: #fff;
  margin: 0px auto;
`;

const Logo = styled.div`
  position: relative;
  text-align: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 259px;
  height: 80px;
  flex-shrink: 0;

  margin-top: 2px;
  margin-bottom: 20px;
`;

const Graybox = styled.div`
  position: relative;
  text-align: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 343px;
  height: 505px;

  border-radius: 20px;
  border: 1px solid #fff;
  background: rgba(125, 125, 125, 0);
  box-shadow: 0px 0px 4px 1px rgba(0, 0, 0, 0.25);

  margin-top: 10px;
`;

const LoginTitle = styled.div`
  color: #000;
  font-family: Inter;
  font-size: 30px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  width: 130px;
  height: 38px;
  flex-shrink: 0;

  margin-top: -20px;
  margin-bottom: 10px;
`;

const Line = styled.div`
  width: 110px;
  height: 4px;

  background: #225a00;

  margin-bottom: 10px;
`;

const SmallTitle = styled.div`
  color: #000;
  text-align: center;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  margin-top: 10px;
  margin-bottom: 30px;
`;

const Content = styled.div`
  color: #000;
  font-family: Inter;
  font-size: 10px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
`;

const Form = styled.input`
  position: relative;

  width: 258px;
  height: 58px;
  flex-shrink: 0;

  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  background: #fff;

  margin-bottom: 15px;

  color: #000;
  font-family: Inter;
  font-size: 23px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const IDForm = Form;
const PWForm = Form;

const Loginbtn = styled.div`
  position: relative;

  margin-top: 20px;
  margin-bottom: 12px;
  cursor: pointer;
`;

const Find = styled.div`
  position: relative;
`;

const Login = () => {
  const navigate = useNavigate();

  const gotoAfterLogin = () => {
    if (id.trim() === "" || pw.trim() === "") {
      return;
    }
    const loginData = {
      username: id,
      password: pw,
    };

    const backendUrl = "http://127.0.0.1:8000/rest-auth/login/";

    axios
      .post(backendUrl, loginData)
      .then((response) => {
        console.log("로그인 성공:", response.data);
        // 로그인이 성공하면 로그인된 사용자의 정보를 저장하고, 이동할 경로를 설정합니다.
        localStorage.setItem("loggedInUserID", id);
        navigate("/afterlogin");
      })
      .catch((error) => {
        console.error("로그인 실패:", error);
        // 로그인이 실패하면 실패 처리를 수행하거나 에러 메시지를 보여줄 수 있습니다.
      });
  };

  const [id, setID] = useState("");
  const [pw, setPW] = useState("");

  const handleID = (event) => {
    setID(event.target.value);
  };
  const handlePW = (event) => {
    setPW(event.target.value);
  };

  return (
    <Container>
      <Logo>
        <img
          src={`${process.env.PUBLIC_URL}/images1/logo.png`}
          alt="logo"
          width="250px"
        />
      </Logo>
      <Graybox>
        <LoginTitle>로그인</LoginTitle>
        <Line></Line>
        <SmallTitle>
          당신의 시작이 쉬울 수 있도록
          <br />
          거래를 틔우는 곳
        </SmallTitle>
        <Content>
          <IDForm
            type="text"
            value={id}
            onChange={handleID}
            placeholder="아이디"
          ></IDForm>
          <PWForm
            type="password"
            value={pw}
            onChange={handlePW}
            placeholder="비밀번호"
          ></PWForm>
        </Content>
        <Loginbtn>
          <img
            src={`${process.env.PUBLIC_URL}/images1/loginbtn.png`}
            alt="loginbtn"
            width="110px"
            onClick={gotoAfterLogin}
          />
        </Loginbtn>
        <Find>아이디 찾기 | 비밀번호 찾기</Find>
      </Graybox>
    </Container>
  );
};

export default Login;
