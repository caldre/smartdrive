import React from "react";
import styled from "@emotion/styled";

const Header = () => {
  return (
    <Container>
      <h1>Drive Smarter</h1>
      <h4>
        <em style={{ color: "#666" }}>
          How much faster can you get there and is it worth it?
        </em>
      </h4>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  width: 100vw;
  background: rgb(255, 255, 255, 0.8);
  margin-bottom: 0.5rem;
  box-shadow: 2px 2px 10px #ccc;
`;
