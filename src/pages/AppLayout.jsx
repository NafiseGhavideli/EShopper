import {  Outlet } from "react-router-dom";
import Header from "./Header";



function AppLayout() {
  return (
    <div className="bg-neutral-50 lg:px-14 min-h-screen pt-4 px-9 relative">
      <Header/>
      <Outlet />
    </div>
    
  );
}

export default AppLayout;
