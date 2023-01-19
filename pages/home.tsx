import axios from "axios";
import React, { FC, useEffect, useState } from "react";
import Hero from "../components/others/hero";
import Sliding from "../components/others/Sliding";
import ModalOthers from "../components/reusable/modalOthers";
import Navbar from "../components/reusable/Navbar";

const Home: FC<any> = ({
  data,
  popular,
  trending,
  blockbuster,
  suggestions,
}) => {
  const [stateData, setStateData] = useState<any>();
  const [results, setResults] = useState<any>();
  const modalItem = (data: any, results: any) => {
    setStateData(data);
    setResults(results);
  };
  return (
    <div className="homepage">
      <Navbar />
      <Hero data={data} />
      <div className="modal__header--overlay px-3 px-lg-4"></div>
      <Sliding data={data} header={"My List"} modalItem={modalItem} />
      <Sliding data={trending} header={"Trending"} modalItem={modalItem} />
      <Sliding
        data={blockbuster}
        header={"Blockbuster"}
        modalItem={modalItem}
      />
      <Sliding
        data={suggestions}
        header={"Suggestions for you"}
        modalItem={modalItem}
      />
      <Sliding data={popular} header={"Popular"} modalItem={modalItem} />
      <ModalOthers item={stateData} results={results} />
    </div>
  );
};

export default Home;

export async function getServerSideProps() {
  const data = await axios
    .get(
      `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US`
    )
    .then((res) => {
      // console.log(res);
      return res.data;
    });
  const popular = await axios
    .get(
      `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&page=21`
    )
    .then((res) => {
      // console.log(res);
      return res.data;
    });
  const trending = await axios
    .get(
      `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&page=26`
    )
    .then((res) => {
      // console.log(res);
      return res.data;
    });
  const blockbuster = await axios
    .get(
      `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&page=27`
    )
    .then((res) => {
      // console.log(res);
      return res.data;
    });

  const suggestions = await axios
    .get(
      `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&page=29`
    )
    .then((res) => {
      // console.log(res);
      return res.data;
    });
  // console.log(popular);
  return {
    props: {
      data,
      popular,
      trending,
      blockbuster,
      suggestions,
    },
  };
}
