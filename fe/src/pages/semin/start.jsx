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

  margin-top: 7px;
  margin-bottom: 20px;
`;

const Underlinebtn = styled.div`
  position: relative;

  color: #0e0e0e;
  font-family: Inter;
  font-size: 13px;
  font-style: normal;
  font-weight: 600;

  margin-bottom: 18px;

  span {
    cursor: pointer;
    border-bottom: 1.5px solid #0e0e0e; /* Add underline with 1px height */
    padding-bottom: 1px; /* Add spacing below the text equal to 3px */
  }

  span + span {
    margin-left: 50px;
  }

  span:hover {
    color: #225a00;
    border-color: #225a00;
  }
`;

const Images = styled.div`
  position: relative;

  margin-bottom: 3px;
`;

const DotsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-left: auto;
`;

const Dots = styled.div`
  position: relative;
  display: flex;

  width: 7px;
  height: 7px;
  flex-shrink: 0;

  border-radius: 50%;
  background-color: rgba(34, 90, 0, 0.5);
  margin-right: 8px;

  background-color: ${({ active }) =>
    active ? "rgba(34, 90, 0, 0.9)" : "rgba(34, 90, 0, 0.5)"};
`;

const Content = styled.div`
  position: relative;

  margin-top: 20px;
`;

const Menu = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 110.578px;
  height: 110.578px;
  flex-shrink: 0;

  border-radius: 33.174px;
  background: #fff;
  box-shadow: 0px 0px 4.423137187957764px 0px rgba(0, 0, 0, 0.25);

  color: #000;
  text-align: center;
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;

  margin: 14px;
  cursor: pointer;

  &:hover {
    box-shadow: 0px 0px 4.423137187957764px 0px #000;
  }
`;

const Down = styled.div`
  position: relative;
  margin-top: -5px;
`;

const Start = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const [currentIndex, setCurrentIndex] = useState(0);

  const navigate = useNavigate();
  const gotoLogin = () => {
    navigate("/login");
  };
  const gotoAgree = () => {
    navigate("/agreement");
  };

  const handleDotClick = (index) => {
    setSelectedImageIndex(index);
  };

  const images = [
    `${process.env.PUBLIC_URL}/images1/image1.png`,
    `${process.env.PUBLIC_URL}/images1/image2.png`,
    `${process.env.PUBLIC_URL}/images1/image3.png`,
    `${process.env.PUBLIC_URL}/images1/image4.png`,
  ];

  const changeImage = () => {
    // 다음 이미지 인덱스 계산, 마지막인 경우 첫번째로
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  useEffect(() => {
    const slideshowInterval = setInterval(changeImage, 3500); // 3.5초마다 이미지 변경

    // 컴포넌트가 언마운트될 때 인터벌을 정리
    return () => clearInterval(slideshowInterval);
  }, []); // currentIndex가 변경될 때마다 useEffect 실행

  useEffect(() => {
    setSelectedImageIndex(currentIndex);
  }, [currentIndex]);

  return (
    <Container>
      <Logo>
        <img
          src={`${process.env.PUBLIC_URL}/images1/logo.png`}
          alt="logo"
          width="250px"
        />
      </Logo>
      <Underlinebtn>
        <span id="login_under" onClick={gotoLogin}>
          로그인
        </span>
        <span id="join_under" onClick={gotoAgree}>
          회원가입
        </span>
      </Underlinebtn>
      <Images>
        <img
          src={images[currentIndex]}
          alt={`image${currentIndex + 1}`}
          width="414px"
        />
      </Images>
      <DotsContainer>
        {images.map((_, index) => (
          <Dots
            key={index}
            onClick={() => handleDotClick(index)}
            active={index === selectedImageIndex}
          />
        ))}
      </DotsContainer>
      <Content>
        <span
          style={{
            color: "#225A00",
            fontFamily: "Pretendard",
            fontSize: "15.562px",
            fontStyle: "normal",
            fontWeight: "549",
            lineHeight: "normal",
          }}
        >
          이제껏 경험하지 못했던 쉽고 편리한 거래 서비스
          <br /> 농촌의{" "}
        </span>
        <span
          style={{
            color: "#225A00",
            fontFamily: "Pretendard",
            fontSize: "15.562px",
            fontStyle: "normal",
            fontWeight: "800",
            lineHeight: "normal",
          }}
        >
          모든 거래
        </span>
        <span
          style={{
            color: "#225A00",
            fontFamily: "Pretendard",
            fontSize: "15.562px",
            fontStyle: "normal",
            fontWeight: "549",
            lineHeight: "normal",
          }}
        >
          가 쉬워질 거예요.
        </span>
      </Content>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <Menu>
          농기구
          <br />
          검색
        </Menu>
        <Menu>
          토지
          <br />
          검색
        </Menu>
        <Menu>품앗이</Menu>
        <Menu>
          거래
          <br />
          채팅
        </Menu>
      </div>
      <Down>
        <img
          src={`${process.env.PUBLIC_URL}/images1/down.png`}
          alt="down"
          width="26px"
        />
      </Down>
    </Container>
  );
};

export default Start;
