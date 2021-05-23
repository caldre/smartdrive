import React from "react";
import styled from "@emotion/styled";

const CountBtn = () => {
  return (
    <React.Fragment>
      <Button disabled onClick={(e) => e.preventDefault()}>
        COUNT
      </Button>
    </React.Fragment>
  );
};

export default CountBtn;

const Button = styled.button`
outline: none;
cursor: pointer;
border-radius: 0.25rem;
background: linear-gradient(45deg, var(--ok-gradient-1), var(--ok-gradient-2));
color: #fff;
font-size: 1.25rem;
box-shadow: 0rem 0rem 0.25rem #0000002e;
text-shadow: 0.05rem 0.1rem 0rem #79485f7a;
}

:disabled {
background: var(--disabled);
color: #bdbdbdbd;
}
`;
