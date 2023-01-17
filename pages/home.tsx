import axios from "axios";
import React, { FC, useEffect } from "react";
import Hero from "../components/others/hero";
import Sliding from "../components/others/Sliding";
import Navbar from "../components/reusable/Navbar";

const Home: FC<any> = ({
  data,
  popular,
  trending,
  blockbuster,
  suggestions,
}) => {
  return (
    <div className="homepage">
      <Hero data={data} />
      <div className="modal__header--overlay px-3 px-lg-4"></div>
      <Sliding data={data} header={"My List"} />
      <Sliding data={trending} header={"Trending"} />
      <Sliding data={blockbuster} header={"Blockbuster"} />
      <Sliding data={popular} header={"Popular"} />
      <Sliding data={suggestions} header={"Suggestions for you"} />
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
      `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&page=6`
    )
    .then((res) => {
      // console.log(res);
      return res.data;
    });
  const trending = await axios
    .get(
      `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&page=3`
    )
    .then((res) => {
      // console.log(res);
      return res.data;
    });
  const blockbuster = await axios
    .get(
      `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&page=4`
    )
    .then((res) => {
      // console.log(res);
      return res.data;
    });

  const suggestions = await axios
    .get(
      `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&page=9`
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
