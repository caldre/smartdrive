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
  display: flex;
  flex-direction: column;
  height: 3rem;
  width: 7rem;
  border-radius: 0.5rem;
  margin: 0rem 0.5rem;
  justify-content: center;
  align-items: center;
  outline: none;
  cursor: pointer;
  border: 0px solid black;
  border-radius: 0.25rem;
  background: linear-gradient(45deg, var(--ok-gradient-1), var(--ok-gradient-2));
  color: #fff;
  font-size: 1.25rem;
  text-shadow: 0.05rem 0.1rem 0rem #79485f7a;
  box-shadow: 0rem 0rem 0.25rem #0000002e;
}

  /* :disabled {

  border: 2px solid var(--ok-gradient-1);
  background: var(--disabled);
	color: #ccc;
	box-shadow: 0rem 0rem 0rem #0000002e;
	text-shadow: 0rem 0rem 0rem #79485f7a;
  } */
`;
