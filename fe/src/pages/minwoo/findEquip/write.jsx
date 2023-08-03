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
const AddBox = styled.div`
  width: 30px;
  height: 30px;

  margin-left: 300px;
  margin-top: -45px;

  padding-left: 8px;
  padding-top: 10px;

  background-color: rgba(53, 135, 0, 0.31);
  border-radius: 40px;
  filter: drop-shadow(0px 0px 4px rgba(0, 0, 0, 0.25));
`;
const DropdownMenu = styled.ul`
  height: 23px;
  position: absolute;
  bottom: 100%;
  left: 0;

  padding: 0px;
`;

const DropdownItem = styled.li`
  width: 30px;
  height: 30px;

  list-style-type: none;
  cursor: pointer;
  padding: 4px;

  border-radius: 40px;
  background-color: rgba(53, 135, 0, 0.31);
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.4);
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
  //const [ITEMS, setITEMS] = useState([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [imgFile, setImgFile] = useState([]); // 이미지 배열

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

  const GoInput = () => {
    navigate("/imgInput");
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
      image: imgFile,
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

  const handleMouseEnter = () => {
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setIsDropdownOpen(false);
  };

  return (
    <Container>
      <Top />
      <TitleBox>
        <img src="/images2/title.png" alt="있농" />
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
          <label for="uplaoad_img">
            <img src="/images2/img.png" alt="사진첨부" />
          </label>
          <input
            id="uplaoad_img"
            type="file"
            ref={upload}
            multiple
            onChange={imgUpload}
            accept="image/*"
            style={{
              display: "none",
              cursor: "pointer",
            }}
          />
          {isDropdownOpen && (
            <DropdownMenu>
              <DropdownItem>
                <img src="/images2/link.png" alt="링크첨부" />
              </DropdownItem>
              <DropdownItem></DropdownItem>
            </DropdownMenu>
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
