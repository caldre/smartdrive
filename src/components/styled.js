import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const InputCard = styled(motion.div)`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 768px;
  margin: 0.5rem 0;
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
  flex-grow: 1;
  cursor: pointer;
`;

export const NumberInput = styled.input`
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

export const Meter = styled(motion.div)``;
