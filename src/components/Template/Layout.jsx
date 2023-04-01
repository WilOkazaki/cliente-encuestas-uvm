import { useState } from "react";
import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import SideBar from "./SideBar";

function Layout() {

	const [sidebartoggle, setSidebartoggle] = useState(false);

  return (
    <>
      <SideBar sidebartoggle={sidebartoggle} setSidebartoggle={setSidebartoggle}/>
      <NavBar sidebartoggle={sidebartoggle} setSidebartoggle={setSidebartoggle}/>

      <Container>
        <Outlet />
      </Container>
			
      
    </>
  );
}

export default Layout;
