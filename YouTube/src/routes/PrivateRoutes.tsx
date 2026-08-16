import { Outlet } from "react-router";
import { Navigate } from "react-router";

const PrivateRoutes = () => {
  let getdata = sessionStorage.getItem("accessToken");
  if (!getdata) {
    return <Navigate to="/" replace />;
  }
  return <Outlet />;
};

export default PrivateRoutes;
