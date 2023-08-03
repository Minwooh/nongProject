import React, { useState } from "react";
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
        marginLeft: "-200px",
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
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 370px; /* 상위 컨테이너인 MiddleBox의 너비를 고정 */
  margin-left: 23px;
`;
const MiddleContent = styled.div`
  height: 420px;
  width: 100%; /* Content의 너비를 100%로 설정 */

  display: flex;
  flex-direction: column;
  align-items: flex-end; /* 오른쪽 정렬 */
  justify-content: flex-start; /* 아래쪽 정렬 */
`;
const Content = styled.div`
  height: auto; /* 높이 자동으로 조절되도록 변경 */
  margin-top: 10px;
  padding: 5px;

  border-radius: 10px;
  background: #93d283;
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.4);
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

  const [message, setMessage] = useState(""); // 입력한 메시지를 저장하는 상태 변수
  const [messages, setMessages] = useState([]);

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSend = () => {
    if (message.trim() !== "") {
      setMessages([...messages, message]);
      setMessage(""); // 메시지 전송 후 입력 필드 초기화
    }
  };

  const GoMy = () => {
    navigate("/myPage");
  };

  const GoHome = () => {
    navigate("/afterLogin");
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
        <img src="/images2/title.png" alt="있농" onClick={GoHome} />
        <Line></Line>
      </TitleBox>

      <MiddleBox>
        <MiddleTop />
        <MiddleContent>
          {messages.map((msg, index) => (
            <Content key={index}>{msg}</Content>
          ))}
        </MiddleContent>
      </MiddleBox>

      <BottomBox>
        <span style={{ position: "absolute", marginTop: "6px" }}>입력</span>
        <BottomInput
          value={message}
          onChange={handleMessageChange}
          placeholder="메시지를 입력하세요..."
        ></BottomInput>
        <button
          style={{
            border: "none",
            background: "000000",
          }}
          onClick={handleSend}
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
