import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import axios from "axios";

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

const InputTitle = styled.div`
  width: 360px;
  height: 50px;
  margin-top: 28px;
  margin-left: 25px;

  padding-left: 8px;
  border: none;
  border-radius: 10px;
  background: #fff;
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.4);
`;
const Input = styled.input`
  width: 285px;
  height: 25px;

  margin-top: 10px;
  margin-left: 10px;

  border: none;
`;

const ContentBox = styled.div`
  position: absolute;

  height: 450px;
  width: 370px;

  margin-left: 23px;
  margin-top: 17px;

  border-radius: 10px;
  background-color: #ffff;
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.4);
`;
const ConditionBox = styled.div`
  height: 30px;

  padding-left: 127px;
  margin-top: 13px;
`;
const ConditionDo = styled.div`
  postion: relative;

  margin-top: -22px;
  margin-left: 40px;
`;
const ConditionDong = styled.div`
  postion: relative;

  margin-top: -22px;
  margin-left: 135px;
`;

const CustomSelect = styled.select`
  width: 80px;
  height: 23px;

  padding-left: 8px;
  margin-left: 10px;

  -moz-appearance: none;
  appearance: none;

  background: url("/images2/arrow.png") no-repeat #efefef;
  background-position: 64px;
  background-size: 10px;

  border: none;
  color: #717171;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const TextBox = styled.div`
  height: 345px;
  width: 330px;

  margin-top: 15px;
  margin-left: 16px;
  padding-top: 3px;

  border-radius: 10px;
  background: #fff;
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.4);
`;

const InputContent = styled.textarea`
  width: 300px;
  height: 115px;

  margin-top: 10px;
  margin-left: 13px;

  border: none;

  resize: none;
`;
const LabelDiv = styled.div`
  position: absolute;

  top: 50px;
  left: 0;

  width: 33px;
  height: 33px;

  padding-left: 10px;
  padding-top: 10px;

  border-radius: 38px;

  background: rgba(53, 135, 0, 0.31);
  filter: drop-shadow(0px 0px 4px rgba(0, 0, 0, 0.25));
`;
const AddBox = styled.div`
  position: relative;

  margin-left: 290px;
  margin-top: -100px;

  width: 30px;
  height: 80px;

  border-radius: 38px;

  filter: drop-shadow(0px 0px 4px rgba(0, 0, 0, 0.25));
`;

const AddLink = styled.button`
  position: absolute;

  top: 15px;
  left: 0;

  width: 45px;
  height: 45px;

  margin-left: 0px;
  margin-top: -30px;

  padding-left: 8px;
  padding-top: 8px;

  border-radius: 30px;
  border: none;

  background: rgba(53, 135, 0, 0.31);
  filter: drop-shadow(0px 0px 4px rgba(0, 0, 0, 0.25));
`;

const PriceBox = styled.div`
  margin-top: 16px;
  padding-left: 210px;
`;
const AddPrice = styled.input`
  width: 93px;
  height: 24px;

  border: none;
  margin-left: 5px;
  margin-top: 15px;

  background: #efefef;
`;
const Button2 = styled.button`
  width: 77px;
  height: 29px;

  margin-top: 470px;
  margin-left: 316px;

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

const LinkModal = styled.div`
  margin-bottom: 5px;
  margin-left: 20px;
`;

const LinkBtn = styled.button`
  width: 35px;
  height: 28px;

  margin-left: 6px;
  margin-top: 6px;

  border: none;

  border-radius: 12.717px;
  background: #7c8378;

  color: #fff;
  font-family: Inter;
  font-size: 11px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const Write = ({ items, setItems }) => {
  //내용 입력
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [price, setPrice] = useState("");
  const [comments, setComments] = useState([]);
  const [imgFile, setImgFile] = useState([]);
  const [doValue, setDoValue] = useState("new");
  const [dongValue, setDongValue] = useState("new");
  //링크
  const [isLinkModalVisible, setLinkModalVisible] = useState(false);
  const [linkUrl, setLinkUrl] = useState("");
  const [isLinkButtonVisible, setLinkButtonVisible] = useState(false);

  //id 가져오기
  let id = JSON.parse(localStorage.getItem("id"));
  id = id ?? 0;

  //마우스 오버 아웃 인지
  const handleMouseEnter = () => {
    setLinkButtonVisible(true);
  };

  const handleMouseLeave = () => {
    setLinkButtonVisible(false);
  };

  //이미지 추가
  const upload = useRef();

  const imgUpload = () => {
    console.log(upload.current.files);
    setImgFile((prev) => [
      ...prev,
      URL.createObjectURL(upload.current.files[0]),
    ]);
  };

  const navigate = useNavigate();

  useEffect(() => {
    const savedItems = localStorage.getItem("ITEMS");

    if (savedItems) {
      setItems(JSON.parse(savedItems));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(items));
  }, [items]);

  const GoMy = () => {
    navigate("/myPage");
  };

  const Logout = () => {
    navigate("/home");
  };

  const GoHome = () => {
    navigate("/afterLogin");
  };

  const Top = () => {
    return (
      <TopBox>
        <Button onClick={Logout}>로그아웃</Button>
        <Button onClick={GoMy}>마이페이지</Button>
      </TopBox>
    );
  };

  const handleSave = () => {
    const currentDate = new Date();
    const year = currentDate.getFullYear(); // Get the current year (년)
    const month = currentDate.getMonth() + 1; // Get the current month (월) (Note: Month is zero-based, so we add 1)
    const day = currentDate.getDate();

    const newItem = {
      id: id,
      title: title,
      content: content,
      price: price,
      like: false,
      count: 0,

      image: imgFile.length > 0 ? imgFile : ["./images2/noImg.png"],
      date: `${year}년 ${month}월 ${day}일`,
      comments: comments,

      do: doValue, // 선택한 시/도 값 추가
      dong: dongValue, // 선택한 시/군/구 값 추가

      link: linkUrl,
    };

    setItems((prevItems) => [...prevItems, newItem]);

    localStorage.setItem("ITEMS", JSON.stringify([...items, newItem]));
    localStorage.setItem("id", JSON.stringify(++id));

    GoFind(newItem);

    // const newItem = {
    //   id: id,
    //   title: title,
    //   content: content,
    //   price: price,
    //   like: false,
    //   count: 0,
    //   image: imgFile.length > 0 ? imgFile : ["./images2/noImg.png"],
    //   date: `${year}년 ${month}월 ${day}일`,
    //   comments: comments,
    //   do: doValue, // 선택한 시/도 값 추가
    //   dong: dongValue, // 선택한 시/군/구 값 추가
    //   links: linkUrl, // 링크 정보 추가

    //   // 이하의 필드들은 다른 정보에 따라서 수정해야 합니다.
    //   photo: null, // 이미지 처리를 위한 데이터 (이미지 URL 등) 추가 필요
    //   writer: "", // 작성자 정보 등 추가 필요
    //   replies: [], // 댓글 등 추가 필요
    //   bookmarksCount: 0, // 북마크 수 등 추가 필요
    // };

    // try {
    //   // HTTP POST 요청으로 새로운 게시물 생성
    //   axios.post("http://127.0.0.1:8000/posts/", newItem).then((response) => {
    //     // 서버로부터의 응답 처리 (생략 가능)
    //     console.log("게시물 생성 성공:", response.data);

    //     // 아래 두 줄을 서버 응답을 받기 전에 먼저 실행하여 새로운 게시물을 화면에 표시합니다.
    //     setItems((prevItems) => [...prevItems, newItem]);
    //     localStorage.setItem("ITEMS", JSON.stringify([...items, newItem]));

    //     // 이후의 동작은 서버 응답을 받은 후에 실행합니다.
    //     localStorage.setItem("id", JSON.stringify(++id));
    //     GoFind(newItem);
    //   });
    // } catch (error) {
    //   // 에러 발생 시 에러 처리
    //   console.error("Error creating new post:", error);
    //   // 에러 처리에 대한 로직 추가 필요 (예: 경고창 등으로 사용자에게 알림)
    // }
  };

  const GoFind = (newItem) => {
    setItems((prevItems) => [...prevItems, newItem]);
    navigate("/find");
  };

  // price를 정수로 변환하는 함수
  const handlePriceChange = (e) => {
    const value = e.target.value;
    const intValue = parseInt(value, 10); // 10진수로 변환

    if (isNaN(intValue) || intValue < 0) {
      alert("올바른 가격을 입력해주세요.");
      return;
    }

    setPrice(intValue);
  };

  const handleLinkButtonClick = (e) => {
    e.stopPropagation();
    setLinkModalVisible(true);
  };

  const handleLinkModalClose = () => {
    setLinkModalVisible(false);
    setLinkUrl("");
  };

  const handleLinkModalConfirm = () => {
    // 입력한 링크를 현재 아이템에 연결하거나 처리하는 로직을 추가합니다.
    console.log("입력한 링크:", linkUrl);
    // setLinkModalVisible(false); // 만약 입력 후 자동으로 모달을 닫으려면 추가합니다.
    // setLinkUrl(""); // 입력 후 자동으로 링크를 초기화하려면 추가합니다.
  };

  return (
    <Container>
      <Top />
      <TitleBox>
        <img src="/images2/title.png" alt="있농" onClick={GoHome} />
        <Line></Line>
      </TitleBox>

      <InputTitle>
        제목{" "}
        <Input value={title} onChange={(e) => setTitle(e.target.value)}></Input>
      </InputTitle>

      <ContentBox>
        <ConditionBox>
          지역
          <ConditionDo>
            <CustomSelect
              name="choice"
              value={doValue}
              onChange={(e) => setDoValue(e.target.value)}
            >
              <option value="new">시/도</option>
              <option value="do1">고양시</option>
            </CustomSelect>
          </ConditionDo>
          <ConditionDong>
            <CustomSelect
              name="choice"
              value={dongValue}
              onChange={(e) => setDongValue(e.target.value)}
            >
              <option value="new">시/도</option>
              <option value="dong1">일산서구</option>
            </CustomSelect>
          </ConditionDong>
        </ConditionBox>

        <TextBox>
          {isLinkModalVisible && (
            <LinkModal>
              <input
                type="text"
                value={linkUrl}
                onChange={(e) => setLinkUrl(e.target.value)}
              />
              <LinkBtn onClick={handleLinkModalConfirm}>확인</LinkBtn>
              <LinkBtn onClick={handleLinkModalClose}>취소</LinkBtn>
            </LinkModal>
          )}
          <div style={{ display: "flex" }}>
            {imgFile?.map((img, idx) => (
              <div
                key={idx}
                style={{ marginLeft: "90px", border: "1px solid black" }}
              >
                <img
                  style={{ width: "160px", height: "160px " }}
                  src={img}
                  alt="img"
                />
              </div>
            ))}
          </div>
          {/* </InputImg> */}
          <InputContent
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></InputContent>
        </TextBox>

        <AddBox onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <LabelDiv>
            <label for="uplaoad_img">
              <img src="/images2/img.png" alt="사진첨부" />
            </label>
          </LabelDiv>
          <input
            id="uplaoad_img"
            type="file"
            ref={upload}
            multiple
            onChange={imgUpload}
            accept="image/*"
            className="custom-input-style"
            style={{
              display: "none",
              cursor: "pointer",
            }}
          />

          {isLinkButtonVisible && (
            <AddLink className="add-link-btn" onClick={handleLinkButtonClick}>
              <img src="/images2/link.png" />
            </AddLink>
          )}
        </AddBox>

        <PriceBox>
          가격
          <AddPrice
            value={price}
            // onChange={(e) => setPrice(e.target.value)}
            onChange={handlePriceChange}
          ></AddPrice>
        </PriceBox>
      </ContentBox>

      <Button2 onClick={handleSave}>등록하기</Button2>
    </Container>
  );
};

export default Write;
