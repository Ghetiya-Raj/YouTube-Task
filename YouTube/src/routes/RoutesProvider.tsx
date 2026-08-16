import { Route, Routes } from "react-router";
import Login from "../pages/Login";
import Home from "../pages/Home";
import Video from "../pages/Video";
import Profile from "../pages/Profile";
import Display from "../pages/Display";
import Upload from "../pages/Upload";
import PrivateRoutes from "./PrivateRoutes";

const routes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<PrivateRoutes />}>
          <Route path="/home" element={<Home />} />
          <Route path="/home/:search" element={<Display/>} />
          <Route path="/:id" element={<Video />} />
          <Route path="/user/upload" element={<Upload />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </div>
  );
};

export default routes;
