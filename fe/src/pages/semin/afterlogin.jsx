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

const ModalOverlay = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;

  width: 358px;
  height: 219px;
  flex-shrink: 0;

  border-radius: 20px;
  background: rgba(255, 255, 255, 0.9);
  box-shadow: 0px 0px 7px 2px rgba(0, 0, 0, 0.25);

  z-index: 2;
`;

const ModalContent = styled.div`
  color: #000;
  font-family: Inter;
  font-size: 25px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const Button = styled.span`
  position: relative;
  display: inline-block;

  margin-top: -60px;
  cursor: pointer;

  img + img {
    margin-top: 80px;
    margin-left: 20px;
  }
`;

// 팝업 구현
const Popup = ({ onClose }) => {
  const navigate = useNavigate();
  const gotoLogout = () => {
    navigate("/");
  };
  const close = () => {
    onClose();
  };
  return (
    <ModalOverlay>
      <ModalContent>
        <span
          style={{
            color: "black",
            fontSize: "25px",
            fontWeight: "600",
          }}
        >
          로그아웃
        </span>
        <br />
        <span>하시겠습니까?</span>
        <Button>
          <img
            src={`${process.env.PUBLIC_URL}/images1/yes.png`}
            alt="yes"
            width="117px;"
            onClick={gotoLogout}
          />
          <img
            src={`${process.env.PUBLIC_URL}/images1/no.png`}
            alt="no"
            width="117px;"
            onClick={close}
          />
        </Button>
      </ModalContent>
    </ModalOverlay>
  );
};

// afterlogin 구현
const AfterLogin = () => {
  const [showPopup, setShowPopup] = useState(false);
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

  const handleLogoutBtnClick = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const [currentIndex, setCurrentIndex] = useState(0);

  const navigate = useNavigate();
  const gotomyPage = () => {
    navigate("/myPage");
  };
  const gotoFind = () => {
    navigate("/find");
  };

  const handleDotClick = (index) => {
    setSelectedImageIndex(index);
    setCurrentIndex(index);
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
        <span id="logout_under" onClick={handleLogoutBtnClick}>
          로그아웃
        </span>
        <span id="my_under" onClick={gotomyPage}>
          마이페이지
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
      {showPopup && <Popup onClose={handleClosePopup} />}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <Menu onClick={gotoFind}>
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

export default AfterLogin;
