import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Styled from "styled-components";
//pages/minwoo
import MyPage from "./pages/minwoo/myPage";
import WritePage from "./pages/minwoo/findEquip/write";
import FindPage from "./pages/minwoo/findEquip/find";
import Find2 from "./pages/minwoo/findEquip/find2";
import Chatt from "./pages/minwoo/chatting/chattPage";
//pages/semin
import Agreement from "./pages/semin/agreement";
import Join from "./pages/semin/join";
import Login from "./pages/semin/login";
import Start from "./pages/semin/start";
import AfterLogin from "./pages/semin/afterlogin";

const App = () => {
  const [items, setItems] = useState([]);

  return (
    <BrowserRouter>
      <div
        style={{
          maxWidth: "1280px",
          margin: "0px auto",
          minHeight: "100vh",
          position: "relative",
        }}
      >
        <Styled />
        <Routes>
          {/* 사용할 때 아래의 경로들 잠깐 주석처리하고 쓰기  */}
          <Route
            // path="/write"
            path="/posts/"
            element={<WritePage items={items} setItems={setItems} />}
          />
          <Route
            path="/find2"
            element={<Find2 items={items} setItems={setItems} />}
          />
          <Route path="/home" element={<Start />} />

          <Route
            path="/find"
            element={<FindPage items={items} setItems={setItems} />}
          />
          <Route
            path="/myPage"
            element={<MyPage items={items} setItems={setItems} />}
          />
          <Route
            path="/find2"
            element={<Find2 items={items} setItems={setItems} />}
          />
          <Route path="/chatt" element={<Chatt />} />
          {/*세민쓰가 적은 경로*/}
          <Route path="/agreement" element={<Agreement />} />
          <Route path="/join" element={<Join />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Start />} />
          <Route path="/afterlogin" element={<AfterLogin />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
