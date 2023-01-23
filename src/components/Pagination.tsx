import React from "react";
import styled from "styled-components";
interface props {
  totalPosts: any;
  perPage: any;
  setCurrent: any;
}

const Pagination: React.FC<props> = ({ totalPosts, perPage, setCurrent }) => {
  let pages = [];
  for (let x = 1; x <= Math.ceil(totalPosts / perPage); x++) {
    pages.push(x);
  }
  return (
    <div>
      <Container>
        {pages.map((page, index) => {
          return (
            <Button key={index} onClick={() => setCurrent(page)}>
              {page}{" "}
            </Button>
          );
        })}
      </Container>
    </div>
  );
};

export default Pagination;

const Container = styled.div`
  /* background-color: red; */

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button`
  background-color: black;
  color: white;
  margin-right: 30px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 1px solid white;
  font-weight: bold;
  transition: all ease-in-out 400ms;
  cursor: pointer;

  :hover {
    background-color: purple;

    transform: scale(0.98);
  }

  /* display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column; */
`;
