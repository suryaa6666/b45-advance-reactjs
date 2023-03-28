// import necessary utility from rrd
import { Outlet, Navigate } from "react-router-dom";

// create component here
const PrivateRoute = ({ isLogin }) => {
  if (isLogin) {
    return <Outlet />;
  } else {
    return <Navigate to={"/signin"} />;
  }
};

export default PrivateRoute;
