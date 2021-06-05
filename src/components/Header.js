import React from "react";
import styled from "@emotion/styled";

const Header = () => {
  return (
    <Container>
      <h1 style={{ paddingLeft: "1rem" }}>Drive Smarter</h1>
      <Slogan>
        <em>How much faster can you get there and is it worth it?</em>
      </Slogan>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  display: flex;
  padding: 0rem 2rem;
  flex-direction: row;
  align-items: center;
  max-width: 768px;
  width: 100%;
  justify-content: space-evenly;
  background: rgb(255, 255, 255, 0.8);
  margin-bottom: 0.5rem;
  box-shadow: 2px 2px 10px #ccc;
`;

const Slogan = styled.h2`
  color: #666;
  font-size: 0.8rem;
`;
