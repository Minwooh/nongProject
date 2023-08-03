import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  width: 414px;
  height: 736px;

  margin: 0px auto;

  border: 1px solid #000;
  background: #fff;
`;

const TopBox = styled.div`
  margin-top: 10px;
  padding-left: 290px;
`;

const TopName = styled.div`
  position: relative;
  margin-top: -45px;
  margin-left: 53px;

  color: #000;
  font-family: Inter;
  font-size: 17px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
const TopLevel = styled.div`
  margin-left: 53px;
  color: #225a00;
  font-family: Inter;
  font-size: 10px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
`;
const MiddleTop = () => {
  return (
    <div
      style={{
        height: "55px",
        paddingLeft: "30px",
        paddingTop: "18px",
      }}
    >
      <img src="./images2/basic.png" />
      <TopName>민지아님</TopName>
      <TopLevel>행복한 농부</TopLevel>
    </div>
  );
};

const Button = styled.button`
  border: none;
  background-color: #ffffff00;

  color: #000;
  font-family: Inter;
  font-size: 9.389px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  text-decoration-line: underline;
`;

const TitleBox = styled.div`
  margin-top: 15px;
  padding-left: 80px;
`;
const Line = styled.div`
  width: 350px;
  height: 2px;
  margin-top: 10px;
  margin-left: -45px;
  background-color: #358700;
`;

const MiddleBox = styled.div`
  background: #00ff22;
  width: 370px;
  height: 500px;

  margin-left: 23px;
`;
const BottomBox = styled.div`
  width: 347px;
  height: 45px;

  padding-top: 10px;
  padding-left: 10px;
  margin-top: 10px;
  margin-left: 32px;

  border-radius: 10px;
  border: 1px solid #878787;
  background: rgba(217, 217, 217, 0);
`;
const BottomInput = styled.input`
  position: absolute;

  width: 230px;
  height: 26px;

  margin-left: 45px;

  border: none;
`;

const ChattPage = () => {
  const navigate = useNavigate();

  const GoMy = () => {
    navigate("/myPage");
  };

  const Logout = () => {
    navigate("/home");
  };

  const Top = () => {
    return (
      <TopBox>
        <Button onClick={Logout}>로그아웃</Button>
        <Button onClick={GoMy}>마이페이지</Button>
      </TopBox>
    );
  };

  return (
    <Container>
      <Top />
      <TitleBox>
        <img src="/images2/title.png" alt="있농" />
        <Line></Line>
      </TitleBox>

      <MiddleBox>
        <MiddleTop />
      </MiddleBox>

      <BottomBox>
        <span style={{ position: "absolute", marginTop: "6px" }}>입력</span>
        <BottomInput></BottomInput>
        <button
          style={{
            border: "none",
            background: "000000",
          }}
        >
          <img
            src="/images2/send (3).png"
            style={{ width: "30px", height: "30px", marginLeft: "295px" }}
          />
        </button>
      </BottomBox>
    </Container>
  );
};

export default ChattPage;
