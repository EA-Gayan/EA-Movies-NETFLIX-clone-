import React from "react";
import Main from "../components/Main";
import Row1 from "../components/Row1";
import requests from "../Requests";

const Home = () => {
  return (
    <>
      <Main />
      <Row1 rowID="1" title="UpComing" fetchURL={requests.requestUpcoming} />
      <Row1 rowID="2" title="Popular" fetchURL={requests.requestPopular} />
      <Row1 rowID="3" title="Trending" fetchURL={requests.requestTrending} />
      <Row1 rowID="4" title="Top Rated" fetchURL={requests.requestTopRated} />
    </>
  );
};

export default Home;
