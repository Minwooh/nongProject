import React, { useState, useEffect } from "react";
import styled from "styled-components";
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
  align-items: center;

  width: 302px;
  height: 364px;
  flex-shrink: 0;

  border-radius: 3px;
  background: #fff;
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);

  margin-top: 5px;
`;

const Content = styled.div`
  color: #000;
  font-family: Inter;
  font-size: 10px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;

  margin-left: 12px;
`;

const SmallTitle = styled.div`
  color: #000;
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  margin-top: -10px;
  margin-bottom: 20px;
  margin-left: -5px;
`;

const Label = styled.div`
  position: relative;

  color: #000;
  font-family: Inter;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  margin-bottom: 8px;
`;
const ID = Label;
const PW = Label;
const PWCheck = Label;
const Phone = Label;

const Form = styled.input`
  position: relative;

  width: 246px;
  height: 30px;
  flex-shrink: 0;

  margin-bottom: 15px;
`;
const IDForm = Form;
const PWForm = Form;
const PWCheckForm = Form;

const PhoneForm1 = styled.input`
  position: relative;

  width: 51px;
  height: 23px;
  flex-shrink: 0;

  margin-right: 15px;
`;

const MiddleForm = styled.input`
  position: relative;

  width: 78px;
  height: 25px;
  flex-shrink: 0;
  flex-shrink: 0;

  margin-right: 15px;
`;
const PhoneForm2 = MiddleForm;
const PhoneForm3 = MiddleForm;

const Joinbtn = styled.div`
  position: relative;

  margin-top: 20px;
  cursor: pointer;
`;

const ModalOverlay = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;

  width: 343px;
  height: 536px;

  flex-shrink: 0;
  border-radius: 20px;
  border: 1px solid #fff;
  background: #fff;
  box-shadow: 0px 0px 4px 1px rgba(0, 0, 0, 0.25);
`;

const ModalContent = styled.div`
  color: #000;
  font-family: Inter;
  font-size: 31.667px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const ReLoginButton = styled.span`
  position: relative;

  top: 50px;
  cursor: pointer;
`;

// 팝업 구현
const Popup = ({ onClose }) => {
  const navigate = useNavigate();
  const gotoReLogin = () => {
    onClose();
    navigate("/login");
  };
  return (
    <ModalOverlay>
      <ModalContent>
        <span
          style={{
            color: "black",
            fontSize: "31.667px",
            fontWeight: "600",
          }}
        >
          회원가입
        </span>
        이 <br />
        완료되었습니다
        <ReLoginButton onClick={gotoReLogin}>
          <img
            src={`${process.env.PUBLIC_URL}/images1/reloginbtn.png`}
            alt="reloginbtn"
            width="180px"
          />
        </ReLoginButton>
      </ModalContent>
    </ModalOverlay>
  );
};

// join 구현
const Join = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleJoinBtnClick = () => {
    if (
      id.trim() === "" ||
      pw.trim() === "" ||
      pwcheck.trim() === "" ||
      phone1.trim() === "" ||
      phone2.trim() === "" ||
      phone3.trim() === ""
    ) {
      return;
    }
    if (pw !== pwcheck) {
      return;
    }
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  useEffect(() => {
    // showPopup 상태가 변경될 때마다 팝업 띄우기와 닫기를 수행합니다.
    if (showPopup) {
      // 팝업 열기
      document.body.style.overflow = "hidden"; // 팝업이 떠있는 동안 스크롤 막기
    } else {
      // 팝업 닫기
      document.body.style.overflow = "auto"; // 팝업이 닫히면 스크롤 다시 활성화
    }
  }, [showPopup]);

  const [id, setID] = useState("");
  const [pw, setPW] = useState("");
  const [pwcheck, setPWCheck] = useState("");
  const [phone1, setPhone1] = useState("");
  const [phone2, setPhone2] = useState("");
  const [phone3, setPhone3] = useState("");

  const handleID = (event) => {
    setID(event.target.value);
  };
  const handlePW = (event) => {
    setPW(event.target.value);
  };
  const handlePWCheck = (event) => {
    setPWCheck(event.target.value);
  };
  const handlePhone1 = (event) => {
    setPhone1(event.target.value);
  };
  const handlePhone2 = (event) => {
    setPhone2(event.target.value);
  };
  const handlePhone3 = (event) => {
    setPhone3(event.target.value);
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
            <SmallTitle>개인정보 입력</SmallTitle>
            <ID>아이디</ID>
            <IDForm type="text" value={id} onChange={handleID}></IDForm>
            <PW>비밀번호</PW>
            <PWForm type="password" value={pw} onChange={handlePW}></PWForm>
            <PWCheck>비밀번호 확인</PWCheck>
            <PWCheckForm
              type="password"
              value={pwcheck}
              onChange={handlePWCheck}
            ></PWCheckForm>
            <Phone>휴대폰</Phone>
            <PhoneForm1
              type="text"
              value={phone1}
              onChange={handlePhone1}
            ></PhoneForm1>
            <PhoneForm2
              type="text"
              value={phone2}
              onChange={handlePhone2}
            ></PhoneForm2>
            <PhoneForm3
              type="text"
              value={phone3}
              onChange={handlePhone3}
            ></PhoneForm3>
          </Content>
        </SmallGraybox>
        <Joinbtn onClick={handleJoinBtnClick}>
          <img
            src={`${process.env.PUBLIC_URL}/images1/joinbtn.png`}
            alt="joinbtn"
            width="110px"
          />
        </Joinbtn>
        {showPopup && <Popup onClose={handleClosePopup} />}
      </Graybox>
    </Container>
  );
};

export default Join;
