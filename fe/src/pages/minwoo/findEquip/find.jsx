import React, { useEffect, useState } from "react";
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
  padding-left: 35px;
  padding-top: 25px;
  height: 225px;
`;
const White = styled.div`
  width: 335px;
  height: 190px;
  flex-shrink: 0;

  padding-top: 10px;
  padding-left: 15px;

  border-radius: 10px;
  background: #fff;
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.4);
`;
const MiddleTitle = styled.div`
  color: #000;
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
const MiddleCondition = styled.div`
  margin-top: 8px;
  margin-bottom: 6px;
`;
const MiddleSetLine = styled.div`
  margin-top: 8px;
`;
const SetMin = styled.input`
  width: 125px;
  height: 24px;

  margin-right: 10px;
  border: none;
  background: #efefef;

  color: #717171;
  font-family: Inter;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  &::placeholder {
    color: #717171;
    font-family: Inter;
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;
const SetMax = styled.input`
  width: 125px;
  height: 24px;

  margin-left: 10px;
  border: none;
  background: #efefef;

  color: #717171;
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  &::placeholder {
    color: #717171;
    font-family: Inter;
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;
const BtnLooking = styled.button`
  width: 88px;
  height: 31px;
  flex-shrink: 0;

  margin-top: 20px;
  margin-left: 115px;

  border: none;
  border-radius: 13px;
  background: #225a00;

  color: #fff;
  font-family: Inter;
  font-size: 13px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const ConditionBox = styled.div`
  height: 45px;
  padding-left: 190px;
`;

const ListBox = styled.div`
  height: 240px;

  overflow: auto;
  position: relative;

  &::-webkit-scrollbar {
    display: none;
  }

  padding-left: 30px;
  padding-top: 5px;
`;

const WhiteBox = styled.div`
  width: 360px;
  height: 65px;

  margin-bottom: 10px;

  background: #fff;
  box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.3);
`;
const LookImg = styled.img`
  width: 50px;
  height: 50px;

  margin-left: 10px;
  margin-top: 8px;
`;
const Title = styled.div`
  height: 20px;
  width: 200px;

  white-space: no-wrap;
  overflow: hidden;
  text-overflow: ellipsis;

  position: relative;

  margin-top: -50px;
  margin-left: 80px;
`;
const Preview = styled.div`
  white-space: no-wrap;
  overflow: hidden;
  text-overflow: ellipsis;

  position: relative;
  height: 20px;
  width: 200px;
  margin-left: 80px;
`;
const SeedImg = styled.div`
  margin-left: 285px;
  margin-top: -15px;
`;
const ClickCount = styled.div`
  margin-left: 305px;
  margin-top: -24px;
`;

const ButtonWrite = styled.button`
  width: 77px;
  height: 29px;

  margin-top: 10px;
  margin-left: 316px;

  border: none;
  border-radius: 13px;
  background: #000;

  color: #fff;
  font-family: Inter;
  font-size: 13px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const FindPage = ({ items, setItems }) => {
  const navigate = useNavigate();

  // 초기 로딩 시점에 localStorage에서 items 읽어오기
  useEffect(() => {
    const savedItems = localStorage.getItem("ITEMS");
    if (savedItems) {
      setItems(JSON.parse(savedItems));
    }
  }, [setItems]);

  const GoWrite = () => {
    navigate("/posts/");
  };

  const GoMy = () => {
    navigate("/myPage");
  };

  const GoHome = () => {
    navigate("/afterLogin");
  };

  const Logout = () => {
    navigate("/");
  };

  const Top = () => {
    return (
      <TopBox>
        <Button onClick={Logout}>로그아웃</Button>
        <Button onClick={GoMy}>마이페이지</Button>
      </TopBox>
    );
  };

  const ListContent = ({ item }) => {
    const imageUrl = item.image ? item.image : "/images2/noImg.png";

    console.log(item.img);
    const GoFind2 = () => {
      // items 배열에서 아이템의 인덱스 찾기
      const itemIndex = items.findIndex((i) => i.id === item.id);
      // 특정 아이템의 카운트 업데이트

      const updatedItems = [...items];
      updatedItems[itemIndex] = { ...item, count: item.count + 1 };
      // 업데이트된 items 배열을 상태와 localStorage에 저장
      setItems(updatedItems);
      localStorage.setItem("ITEMS", JSON.stringify(updatedItems));

      navigate(
        `/find2?title=${encodeURIComponent(
          item.title
        )}&content=${encodeURIComponent(
          item.content
        )}&price=${encodeURIComponent(item.price)}&id=${encodeURIComponent(
          item.id
        )}&count=${encodeURIComponent(item.count)}
        &image=${encodeURIComponent(item.image)}
        &date=${encodeURIComponent(item.date)}`
      );
    };

    return (
      <WhiteBox key={item.id} onClick={GoFind2}>
        <LookImg src={imageUrl}></LookImg>
        <Title>{item.title}</Title>
        <Preview>{item.content}</Preview>
        <SeedImg>
          <img src="./images2/seed.png" alt="시드" />
        </SeedImg>
        <ClickCount>{item.count}</ClickCount>
      </WhiteBox>
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
        <White>
          <MiddleTitle>농기구검색</MiddleTitle>
          <MiddleCondition>
            지역
            <select
              name="choice"
              style={{ marginLeft: "10px", width: "60px", height: "20px" }}
            >
              <option value="new">시/도</option>
            </select>
            <select
              name="choice"
              style={{ marginLeft: "10px", width: "60px", height: "20px" }}
            >
              <option value="new">시/도</option>
            </select>
          </MiddleCondition>
          가격설정
          <MiddleSetLine>
            <SetMin placeholder="최소금액"></SetMin>~
            <SetMax placeholder="최대금액"></SetMax>
          </MiddleSetLine>
          <BtnLooking>매물 조회</BtnLooking>
        </White>
      </MiddleBox>
      <ConditionBox>
        {" "}
        정렬조건
        <select name="choice" style={{ marginLeft: "10px", width: "110px" }}>
          <option value="new">최신 등록순</option>
          <option value="name">이름순</option>
          <option value="old">오래된순</option>
        </select>
      </ConditionBox>
      <ListBox>
        {items.map((item) => (
          <ListContent key={item.id} item={item} />
        ))}
      </ListBox>

      <ButtonWrite onClick={GoWrite}>글쓰기</ButtonWrite>
    </Container>
  );
};

export default FindPage;
