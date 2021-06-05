import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const Card = styled(motion.div)`
  display: flex;
  flex-direction: column;
  max-width: 768px;
  width: 90%;
  margin: 0.5rem 0;
  padding: 0.5rem 1rem;
  box-shadow: 2px 2px 10px #ccc;
  background: rgb(255, 255, 255, 0.8);
`;

export const ContentContainer = styled.div`
  max-width: 768px;
  width: 100%;
  flex-wrap: wrap;
`;

export const SliderContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 1rem;
`;

export const SliderInput = styled.input`
  flex-grow: 1;
  cursor: pointer;
  margin-right: 2rem;
`;

export const NumberInput = styled.input`
  width: 4rem;
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

export const ComparisonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 350px;
  border-bottom: thin solid #ccc;
  margin-bottom: 2rem;
`;

export const BarArea = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
`;
