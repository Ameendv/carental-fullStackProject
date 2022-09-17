import React from "react";
import DefaultLayout from "../components/DefaultLayout";
import HomeSearch from "../components/User/HomeSearch";
import Chat from '../components/User/ChatWindow'


function Home() {
  return (
    <DefaultLayout>
      <HomeSearch />
        <Chat />
     
     
    </DefaultLayout>
  );
}

export default Home;
