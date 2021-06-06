import React from "react";
import styled from "@emotion/styled";
import { Card, ContentContainer } from "./styled";

const Header = () => {
  return (
    <Card
      style={{ background: "var(--neutral-4)", margin: "0", padding: "0 1rem" }}
    >
      <ContentContainer>
        <h1 style={{ color: "var(--neutral-10)" }}>Drive Smarter</h1>
        <Slogan>
          <em>How fast can you get there and is it worth it?</em>
        </Slogan>
      </ContentContainer>
    </Card>
  );
};

export default Header;

const Slogan = styled.h2`
  color: var(--primary-10);
  font-size: 0.8rem;
`;
