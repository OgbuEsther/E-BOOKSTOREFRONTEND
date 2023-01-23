import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
export const Header = () => {
  return (
    <Container>
      <Logo>
        {/* <Pcs /> */}
        <Text>E-BookStore</Text>
      </Logo>
      <Button to="/uploads">Uploads Books</Button>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  width: 95%;
  height: 10vh;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
`;
const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Pcs = styled.img`
  height: 50px;
  width: 70px;
  object-fit: cover;
`;
const Text = styled.div`
  font-size: 20px;
  font-weight: bold;
  font-family: sans-serif;
`;
const Button = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  text-decoration: none;
  color: white;
  background-color: black;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 5px;

  @media screen and (max-width: 375px) {
    padding: 5px 9px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
