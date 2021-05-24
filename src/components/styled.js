import styled from "@emotion/styled";

export const InputCard = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 32em;
  margin: 4rem 0 2rem 0;
  padding: 2rem;
  box-shadow: 2px 2px 10px #ccc;
  background: #fff;
`;

export const SliderContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 2rem;
`;

export const SliderInput = styled.input`
  display: flex;
  flex-grow: 1;
`;

export const NumberInput = styled.input`
  display: flex;
  border: 1px solid black;
  border-top-style: hidden;
  border-right-style: hidden;
  border-left-style: hidden;
  outline: none;
  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  input[type="number"] {
    -moz-appearance: textfield;
  }
`;

export const Title = styled.h3`
  margin-bottom: 2rem;
  :before {
    content: attr(title);
  }
`;
