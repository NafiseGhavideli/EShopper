import {  Outlet } from "react-router-dom";
import Header from "./Header";



function AppLayout() {
  return (
    <div className="bg-neutral-50 px-16 min-h-screen pt-4 relative">
      <Header/>
      <Outlet />
    </div>
    
  );
}

export default AppLayout;
