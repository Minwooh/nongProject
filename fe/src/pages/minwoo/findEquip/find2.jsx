import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Container = styled.div`
  width: 414px;
  height: 1300px;

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
  width: 350px;
  height: 580px;

  margin-left: 36px;
  margin-top: 20px;

  border-radius: 5px;
  background: #eef3eb;
  box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.3);
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

const loggedInUserID = localStorage.getItem("loggedInUserID");
const MiddleTop = () => {
  return (
    <div
      style={{
        height: "55px",
        paddingLeft: "30px",
        paddingTop: "30px",
      }}
    >
      <img src="./images2/basic.png" />
      <TopName>{loggedInUserID}</TopName>
      <TopLevel>행복한 농부</TopLevel>
    </div>
  );
};
const MiddleDate = styled.div`
  padding-left: 238px;

  color: #225a00;
  font-family: Inter;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
const MiddleWhite = styled.div`
  width: 301px;
  height: 358px;

  margin-left: 13px;
  margin-top: 5px;
  padding: 10px;

  border-radius: 10px;
  background: #fff;
  box-shadow: 0px 0px 1px 0px rgba(0, 0, 0, 0.5);
`;

const WhiteTitle = styled.span`
  width: 230px;
  overflow: hidden;
  position: absolute;

  color: #3c3c3c;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
const WhiteContent = styled.div`
  margin-top: 170px;

  height: 100px;
  padding: 10px;

  overflow: auto;
  position: relative;

  &::-webkit-scrollbar {
    display: none;
  }

  color: #030303;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
const WhitePrice = styled.div`
  width: 104px;
  height: 27px;

  padding-left: 6px;

  margin-top: 6px;
  margin-left: 150px;

  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25) inset;
`;

const BottomBox = styled.div`
  width: 360px;
  height: 50px;

  margin-top: -80px;
  padding-top: 25px;
  padding-left: 57px;
`;
const BottomBtn = styled.button`
  width: 150px;
  height: 38px;

  margin-left: 85px;
  padding-left: 20px;
  margin-top: -20px;

  border: none;
  border-radius: 10px;
  background: #225a00;

  color: #fff;
  font-family: Inter;
  font-size: 17px;
  font-style: normal;
  font-weight: 600;
  line-height: 30px;
`;

const CommentCountBox = styled.div`
  width: 80px;
  height: 33px;

  padding-top: 10px;
  padding-left: 333px;

  margin-top: 60px;
  background: #fff;
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);

  color: #000;
  font-family: Inter;
  font-size: 17px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
const CommentsBox = styled.div`
  margin-top: 10px;
  padding: 10px;
  height: 340px;

  overflow: auto;
  position: relative;

  &::-webkit-scrollbar {
    display: none;
  }
`;
const Comment = styled.div`
  padding: 10px;
  padding-left: 30px;
  padding-top: 18px;

  width: 355px;
  word-wrap: break-word;

  flex-shrink: 0;
  background: #fff;
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);
`;

const CommentName = styled.div`
  padding-bottom: 20px;
  margin-top: -40px;
  margin-left: 50px;

  color: #000;
  font-family: Inter;
  font-size: 17px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
const ReComment = styled.button`
  width: 47px;
  height: 20px;

  margin-left: 305px;

  border: 1px solid #d6d6d6;
  background: #fff;

  color: #000;
  font-family: Inter;
  font-size: 11px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const SendBox = styled.div`
  background-color: #ffff22;
  width: 380px;
  height: 44px;
  flex-shrink: 0;

  margin-left: 20px;
  margin-top: 20px;

  background: #fff;
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);
`;
const SendInput = styled.input`
  width: 250px;
  height: 26px;

  position: absolute;
  margin-left: 12px;
  margin-top: 8px;

  border: none;

  &::placeholder {
    color: #a7a7a7;
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;

const Find2 = ({ item }) => {
  const navigate = useNavigate();
  const [imageSrc, setImageSrc] = useState("/images2/whiteHeart.png");

  const [comments, setComments] = useState([]); // 댓글 목록 상태
  const [newComment, setNewComment] = useState(""); // 새로운 댓글 입력값 상태
  const [isSecret, setIsSecret] = useState(false); // 비밀댓글 여부를 나타내는 상태

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  // URL 파라미터로부터 title, content, price 값을 가져옴
  const id = queryParams.get("id");
  const title = queryParams.get("title");
  const content = queryParams.get("content");
  const price = queryParams.get("price");
  const count = queryParams.get("count");
  const date = queryParams.get("date");

  const image = queryParams.get("image");
  const imageUrl = image ? image : null;

  const link = queryParams.get("link") || "";

  // 컴포넌트가 마운트될 때 로컬 스토리지에서 댓글 목록을 가져와서 설정
  useEffect(() => {
    const storedComments = JSON.parse(localStorage.getItem("ITEMS"));
    if (storedComments) {
      const itemIndex = storedComments.findIndex(
        (storedItem) => storedItem.id === parseInt(id, 10)
      );
      if (itemIndex !== -1) {
        setComments(storedComments[itemIndex].comments);
      }
    }
  }, []);

  useEffect(() => {
    // 이미지 상태가 바뀔 때마다 로컬 스토리지의 like 값을 업데이트
    const newLikeValue = imageSrc === "/images2/fillHeart.png";
    console.log(newLikeValue);

    updateLocalStorage(newLikeValue);
  }, [imageSrc]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("ITEMS")) || [];
    const itemIndex = items.findIndex((item) => item.id === parseInt(id, 10));

    if (itemIndex !== -1) {
      setImageSrc(
        items[itemIndex].like
          ? "/images2/fillHeart.png"
          : "/images2/whiteHeart.png"
      );
    }
  }, []);

  const updateLocalStorage = (newLikeValue) => {
    const items = JSON.parse(localStorage.getItem("ITEMS"));

    if (items) {
      const itemIndex = items.findIndex((item) => item.id === parseInt(id, 10));

      if (itemIndex !== -1) {
        // 아이템의 좋아요 상태를 업데이트합니다.
        const updatedItems = [...items];
        updatedItems[itemIndex].like = newLikeValue;

        // 업데이트된 아이템 배열을 로컬 스토리지에 저장합니다.
        //localStorage.setItem("imageSrc", imageSrc);
        localStorage.setItem("ITEMS", JSON.stringify(updatedItems));

        setImageSrc(
          newLikeValue ? "/images2/fillHeart.png" : "/images2/whiteHeart.png"
        );
      }
    }
  };

  // 댓글 작성 버튼을 누르면 호출되는 함수
  const handleCommentSubmit = () => {
    if (newComment.trim() !== "") {
      const currentTime = new Date();

      const newCommentObj = {
        id: comments.length + 1,
        content: newComment,
        time: currentTime.toLocaleString(),
      };

      if (isSecret) {
        newCommentObj.isSecret = true;
      }
      setComments([...comments, newCommentObj]);

      // 댓글 입력값 초기화
      setNewComment("");

      // 로컬 스토리지에 댓글 목록 저장
      // const savedComments = JSON.parse(localStorage.getItem("comments")) || [];
      // const updatedComments = [...savedComments, newCommentObj];
      // localStorage.setItem("comments", JSON.stringify(updatedComments));
      const items = JSON.parse(localStorage.getItem("ITEMS")) || [];
      const itemIndex = items.findIndex((item) => item.id === parseInt(id, 10));
      if (itemIndex !== -1) {
        const updatedItems = [...items];
        updatedItems[itemIndex].comments.push(newCommentObj);
        localStorage.setItem("ITEMS", JSON.stringify(updatedItems));
      }
    }
  };

  const handleClick = () => {
    setImageSrc((prevSrc) =>
      prevSrc === "/images2/whiteHeart.png"
        ? "/images2/fillHeart.png" // 두 번째 이미지의 경로로 바꿔주세요.
        : "/images2/whiteHeart.png"
    );
  };

  const GoHome = () => {
    navigate("/afterLogin");
  };

  const GoMy = () => {
    navigate("/myPage");
  };

  const GoChatt = () => {
    navigate("/chatt");
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
        <MiddleDate>{date}</MiddleDate>
        <MiddleWhite>
          <div>
            <WhiteTitle>{title}</WhiteTitle>
            <span style={{ position: "absolute", marginLeft: "240px" }}>
              <img
                src="/images2/seed.png"
                style={{
                  marginRight: "5px",
                }}
              />
              {count}
            </span>
          </div>
          {link && ( // Add conditional rendering here
            <div
              style={{
                width: "200px",
                marginTop: "15px",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              <img src="/images2/greenLink.png" style={{ width: "10px" }} />
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: " #969696",

                  fontSize: "10px",
                }}
              >
                {" "}
                {link}{" "}
              </a>
            </div>
          )}
          {imageUrl && (
            <img
              src={imageUrl}
              alt="이미지"
              style={{
                position: "absolute",
                height: "150px",
                marginLeft: "70px",
                marginTop: "20px",
              }}
            />
          )}
          <WhiteContent>{content}</WhiteContent>
          <WhitePrice>{price}</WhitePrice>
          <div style={{ marginTop: "-23px", marginLeft: "263px" }}>원</div>
        </MiddleWhite>
      </MiddleBox>

      <BottomBox>
        <BottomBtn onClick={handleClick}>
          <img
            src={imageSrc}
            style={{
              position: "absolute",
              marginTop: "8px",
              marginLeft: "-23px",
            }}
          />
          관심목록지정
        </BottomBtn>
      </BottomBox>

      <CommentCountBox>
        댓글
        <span
          style={{
            marginLeft: "10px",
            color: "#225A00",
            fontFamily: "Inter",
            fontSize: "17px",
            fontStyle: "normal",
            fontWeight: "600",
            lineHeight: "normal",
          }}
        >
          {comments.length}
        </span>
      </CommentCountBox>
      <CommentsBox>
        {comments.map((comment) => (
          <Comment key={comment.id}>
            {comment.isSecret ? (
              <div>
                <div style={{ marginBottom: "6px" }}>비밀 댓글입니다</div>
                <div
                  style={{
                    color: "#737373",
                    fontFamily: "Inter",
                    fontSize: "13px",
                    fontStyle: "normal",
                    fontWeight: 300,
                    lineHeight: "normal",
                  }}
                >
                  {comment.time}
                </div>
              </div>
            ) : (
              <div>
                <img src="/images2/basic.png" alt="" />
                <CommentName>
                  {loggedInUserID}
                  <span
                    style={{
                      color: "#225A00",
                      fontFamily: "Inter",
                      fontSize: "10px",
                      fontStyle: "normal",
                      fontWeight: "300",
                      lineHeight: "normal",
                      marginLeft: "4px",
                    }}
                  >
                    행복한 농부
                  </span>
                </CommentName>
                <div>{comment.content}</div>
                <div
                  style={{
                    color: "#737373",
                    fontFamily: "Inter",
                    fontSize: "13px",
                    fontStyle: "normal",
                    fontWeight: 300,
                    lineHeight: "normal",
                    marginTop: "6px",
                  }}
                >
                  {comment.time}
                </div>
              </div>
            )}

            <ReComment onClick={GoChatt}>채팅</ReComment>
          </Comment>
        ))}
      </CommentsBox>
      <SendBox>
        <SendInput
          type="text"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="댓글을 입력해주세요"
        ></SendInput>

        <button
          onClick={() => setIsSecret((prev) => !prev)}
          style={{
            marginTop: "6px",
            marginLeft: "278px",
            border: "none",
            background: "transparent",
          }}
        >
          <img
            src={isSecret ? "/images2/lockGreen.png" : "/images2/lockWhite.png"}
            style={{
              position: "absolute",
              width: "24px",
              height: "24px",
              marginTop: "-26px",
            }}
          />
        </button>
        <button
          onClick={handleCommentSubmit}
          style={{
            // position: "absolute",
            marginTop: "8px",
            marginLeft: "38px",
            border: "none",
            background: "transparent",
          }}
        >
          <img
            src="/images2/send (2).png"
            style={{ width: "28px", height: "28px" }}
          />
        </button>
      </SendBox>
    </Container>
  );
};

export default Find2;
