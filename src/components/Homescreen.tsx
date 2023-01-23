import React from "react";
import BookCards from "./Books/BookCards";
import Booklist from "./Books/Booklist";
import DefaultBooks from "./DefaultBooks";
import Hero from "./Hero/Hero";

interface MyData {
  _id: string;
  author: string;
  authorImage: string;
  category: string;
  coverImage: string;
  title: string;
  views: string[];
}

const Homescreen = () => {
  const [searchData, setSearchData] = React.useState<MyData[]>([]);
  const [searchs, setSearchs] = React.useState<boolean>(false);

  return (
    <div>
      <Hero searchData={searchData} setSearchData={setSearchData} />
      <BookCards searchData={searchData} setSearchData={setSearchData} />

      {/* {searchs === true ? (
        <>
          <BookCards searchData={searchData} setSearchData={setSearchData} />
          <p>this is default</p>
        </>
      ) : (
        <>
          <DefaultBooks />
        </>
      )} */}
      {/* <Booklist /> */}
    </div>
  );
};

export default Homescreen;
