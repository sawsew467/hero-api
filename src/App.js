import { Route, Routes } from "react-router";
import Output from "./pages/Output";
import Input from "./pages/Input";
import Home from "./pages/Home";
import { useState } from "react";

function App() {
  const [imgUrl, setImgUrl] = useState(
    window.localStorage.getItem("imageUrl") ??
      "/apps/dota2/images/dota_react/heroes/antimage.png?"
  );
  // console.log(window.localStorage.getItem('imageUrl'));
  console.log(imgUrl);
  return (
    <>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route
          path="/input"
          element={<Input imgUrl={imgUrl} setImgUrl={setImgUrl}></Input>}
        ></Route>
        <Route
          path="/output"
          element={<Output imgUrl={imgUrl}></Output>}
        ></Route>
      </Routes>
    </>
  );
}

export default App;
