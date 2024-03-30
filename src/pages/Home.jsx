import React from "react";


import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import RecentChats from "../components/RecentChats";
import StudyPlan from "../components/StudyPlan";
import Library from "../components/Library";



function Home() {
  return (
    <div>
      <Navbar className="" />
      <StudyPlan/>
      <Library/>
      <RecentChats/> 
      <Footer />
    </div>
  );
}

export default Home;
