import React from "react";


import Footer from "../components/Footer";

import RecentChats from "../components/RecentChats";
import StudyPlan from "../components/StudyPlan";
import Library from "../components/Library";

import Navbars from "../components/Navbar";

// import Chats from "../components/Chats";
 import Signup from "../components/Signup";
import Login from "../components/Login";
import Signme from "../components/Signme";



function Home() {
  return (
    // <div>
    //   <Navbars className="" />
    //   <StudyPlan/>
    //   <Library/>
    //   <RecentChats/> 
    //   <Footer />
    // </div>
    <>
        {/* <Signup/> */}
        
    <Signme/>
    <Signup/>
    </>
  );
}

export default Home;
