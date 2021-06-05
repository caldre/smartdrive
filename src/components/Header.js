import React from "react";
import styled from "@emotion/styled";
import { Card, ContentContainer } from "./styled";

const Header = () => {
  return (
    <Card>
      <ContentContainer>
        <h1>Drive Smarter</h1>
        <Slogan>
          <em>How much faster can you get there and is it worth it?</em>
        </Slogan>
      </ContentContainer>
    </Card>
  );
};

export default Header;

const Slogan = styled.h2`
  color: #666;
  font-size: 0.8rem;
`;
