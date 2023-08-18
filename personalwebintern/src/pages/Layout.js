import { Outlet } from "react-router";
import Upper from "../components/Upper";
const Layout = () => {
  return (
    <>
      <Upper></Upper>
      <Outlet></Outlet>
    </>
  );
};
export default Layout;
