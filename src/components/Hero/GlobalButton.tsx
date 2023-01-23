import axios from "axios";
import React from "react";
import styled from "styled-components";

interface Iprops {
  text: string;
}

const GlobalButton: React.FC<Iprops> = ({ text }) => {
  const [searchs, setSearchs] = React.useState<any>();

  const searchCategory = async () => {
    await axios
      .get(
        `https://bookstore-z52r.onrender.com/server/search?category=${searchs}`
      )
      .then((res) => {
        setSearchs(res);
      });
  };
  return (
    <>
      <Button onClick={searchCategory}>{text}</Button>
    </>
  );
};

export default GlobalButton;

const Button = styled.button`
  height: 40px;
  padding: 20px 40px;
  background-color: rgba(0, 0, 0, 0.6);
  color: white;
  border: none;
  outline: none;
  border-radius: 20px;
  transition: all 350ms;
  cursor: pointer;
  margin: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  :hover {
    transform: scale(0.95);
    background-color: white;
    color: black;
  }
`;
