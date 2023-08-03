import React, { useState } from "react";
import styled from "styled-components";
import "./CustomScrollbar.css";
import { useNavigate } from "react-router-dom";

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
  height: 536px;

  border-radius: 20px;
  border: 1px solid #fff;
  background: rgba(125, 125, 125, 0);
  box-shadow: 0px 0px 4px 1px rgba(0, 0, 0, 0.25);

  margin-top: 10px;
`;

const JoinTitle = styled.div`
  color: #000;
  text-align: center;
  font-family: Inter;
  font-size: 25px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  width: 130px;
  height: 38px;
  flex-shrink: 0;

  margin-top: 25px;
`;

const Line = styled.div`
  width: 110px;
  height: 4px;

  background: #225a00;

  margin-bottom: 10px;
`;

const SmallGraybox = styled.div`
  position: relative;
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 302px;
  max-height: 110px;
  flex-shrink: 0;

  border-radius: 3px;
  background: #fff;
  box-shadow: 0px 0px 4px 1px rgba(0, 0, 0, 0.25);

  margin-top: 5px;
`;

const Content = styled.div`
  color: #000;
  font-family: Inter;
  font-size: 10px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;

  overflow-y: auto;
  margin-left: 12px;
`;

const Gray = styled.div`
  width: 304px;
  height: 32px;
  flex-shrink: 0;

  border-radius: 0px 0px 3px 3px;
  background: #f2f2f2;
  margin-bottom: 6px;
`;

const Checkbox = styled.div`
  position: relative;

  width: 13px;
  height: 13px;
  flex-shrink: 0;

  border-radius: 3px;
  border: 1px solid #5a5a5a;
  margin-top: 9px;
  left: 250px;

  background-color: ${(props) => (props.checked ? "#5a5a5a" : "transparent")};
  cursor: pointer;
`;

const Agree = styled.div`
  position: relative;

  width: 34px;

  color: #5a5a5a;
  font-family: Inter;
  font-size: 13px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;

  left: 265px;
  top: -17px;
`;

const Nextbtn = styled.div`
  position: relative;

  left: 105px;
  top: 15px;

  cursor: pointer;
`;

const Agreement = () => {
  const navigate = useNavigate();

  const gotoJoin = () => {
    if (isChecked1 && isChecked2) {
      navigate("/join");
    }
  };

  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);

  const handleCheckbox1Click = () => {
    setIsChecked1((prevChecked) => !prevChecked);
  };

  const handleCheckbox2Click = () => {
    setIsChecked2((prevChecked) => !prevChecked);
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
        <JoinTitle>회원가입</JoinTitle>
        <Line></Line>
        <SmallGraybox>
          <Content>
            <span
              style={{
                color: "black",
                fontSize: "13px",
                fontWeight: "500",
                marginTop: "5px",
                marginBottom: "5px",
              }}
            >
              <br />
              회원약관 동의
            </span>
            <span
              style={{
                color: "#0E6400",
                fontSize: "13px",
                fontWeight: "500",
                marginTop: "5px",
                marginBottom: "5px",
              }}
            >
              (필수)
              <br />
            </span>
            <br />
            회원약관 <br />제 1장 총칙 <br />제 1조 (목적) <br />이 약관은
            농림축산식품부(가) 제공하는 농기구대여시스템 이용 에 관한 조건 및
            절차와 기타 필요한 사항을 규정하는 것을 목적으로 합니다.
            <br />.
            <br />.
            <br />.
          </Content>
        </SmallGraybox>
        <Gray>
          <Checkbox
            checked={isChecked1}
            onClick={handleCheckbox1Click}
          ></Checkbox>
          <Agree>동의</Agree>
        </Gray>
        <SmallGraybox>
          <Content>
            <span
              style={{
                color: "black",
                fontSize: "13px",
                fontWeight: "500",
                marginTop: "5px",
                marginBottom: "5px",
              }}
            >
              <br />
              개인정보 처리 방침
            </span>
            <span
              style={{
                color: "#0E6400",
                fontSize: "13px",
                fontWeight: "500",
                marginTop: "5px",
                marginBottom: "5px",
              }}
            >
              (필수)
              <br />
            </span>
            <br />
            모든 사용자들은 해당 개인정보 처림 방침에 대해 동의합니다.
            <br />
            해당 방침은 2023년 6월 30일부터 시행됩니다.
            <br />.
            <br />.
            <br />.
            <br />.
            <br />.
            <br />.
          </Content>
        </SmallGraybox>
        <Gray>
          <Checkbox
            checked={isChecked2}
            onClick={handleCheckbox2Click}
          ></Checkbox>
          <Agree>동의</Agree>
        </Gray>
        <SmallGraybox>
          <Content>
            <span
              style={{
                color: "black",
                fontSize: "13px",
                fontWeight: "500",
                marginTop: "5px",
                marginBottom: "5px",
              }}
            >
              <br />
              개인정보 처리의 위탁
            </span>
            <span
              style={{
                color: "#0E6400",
                fontSize: "13px",
                fontWeight: "500",
                marginTop: "5px",
                marginBottom: "5px",
              }}
            >
              (필수)
              <br />
            </span>
            <br />
            원활한 서비스 운영을 위하여 다음과 같이 개인정보 처리업무 를
            위탁하고 있습니다. <br />
            1. 계좌 번호 <br />
            2. 위탁받는 자(수탁자)
            <br />.
            <br />.
            <br />.
            <br />.
            <br />.
            <br />.
          </Content>
        </SmallGraybox>
      </Graybox>
      <Nextbtn>
        <img
          src={`${process.env.PUBLIC_URL}/images1/nextbtn.png`}
          alt="nextbtn"
          width="90px"
          onClick={gotoJoin}
        />
      </Nextbtn>
    </Container>
  );
};

export default Agreement;
