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

  height: 442px;
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

  margin-top: -24px;
  margin-left: 135px;
`;

const TextBox = styled.div`
  height: 330px;
  width: 330px;

  margin-top: 15px;
  margin-left: 16px;
  padding-top: 3px;

  border-radius: 10px;
  background: #fff;
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.4);
`;

const InputImg = styled.div`
  width: 200px;
  height: 160px;

  margin-top: 10px;
  margin-left: 70px;

  background-color: cadetblue;
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

const Write = ({ items, setItems }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [price, setPrice] = useState("");
  const [comments, setComments] = useState([]);
  const [imgFile, setImgFile] = useState([]); // 이미지 배열
  const [isLinkButtonVisible, setLinkButtonVisible] = useState(false);

  const handleMouseEnter = () => {
    setLinkButtonVisible(true);
  };

  const handleMouseLeave = () => {
    setLinkButtonVisible(false);
  };

  const handleLinkButtonClick = (e) => {
    e.stopPropagation(); // 클릭 이벤트가 상위 요소로 전파되는 것을 막음
    // 여기서 링크 버튼 클릭 시 원하는 동작을 수행할 수 있습니다.
    console.log("링크 버튼이 클릭되었습니다.");
  };
  const upload = useRef();

  const imgUpload = () => {
    console.log(upload.current.files);
    setImgFile((prev) => [
      ...prev,
      URL.createObjectURL(upload.current.files[0]),
    ]);
  };
  //

  let id = JSON.parse(localStorage.getItem("id"));
  id = id ?? 0;

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
      // image: imgFile,
      image: imgFile.length > 0 ? imgFile : ["./images2/noImg.png"],
      date: `${year}년 ${month}월 ${day}일`,
      comments: comments,
    };

    setItems((prevItems) => [...prevItems, newItem]);

    localStorage.setItem("ITEMS", JSON.stringify([...items, newItem]));
    localStorage.setItem("id", JSON.stringify(++id));

    GoFind(newItem);
  };

  const GoFind = (newItem) => {
    setItems((prevItems) => [...prevItems, newItem]);
    navigate("/find");
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
            <select
              name="choice"
              style={{
                marginLeft: "5px",
                width: "80px",
                height: "20px",
                background: "#efefef",
              }}
            >
              <option value="new">시/도</option>
            </select>
          </ConditionDo>
          <ConditionDong>
            <select
              name="choice"
              style={{
                marginLeft: "5px",
                width: "80px",
                height: "20px",
                background: "#efefef",
              }}
            >
              <option value="new">시/도</option>
            </select>
          </ConditionDong>
        </ConditionBox>

        <TextBox>
          {/* <InputImg> */}
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
            onChange={(e) => setPrice(e.target.value)}
          ></AddPrice>
        </PriceBox>
      </ContentBox>

      <Button2 onClick={handleSave}>등록하기</Button2>
    </Container>
  );
};

export default Write;
