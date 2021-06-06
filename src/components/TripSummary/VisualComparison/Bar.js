import React from "react";
import { motion } from "framer-motion";
import styled from "@emotion/styled";
import { formatTime } from "../../../utilities/helperFunctions";

const Bar = ({ type, name, max, value }) => {
  return (
    <BarContainer>
      <Value>{type === "time" ? formatTime(value) : value + "l"}</Value>
      <BarBorder>
        <BarValue
          height={`${(100 * value) / max}%`}
          animate={{ xHeight: 100 }}
          transition={{
            type: "spring",
            stiffness: 7000,
            damping: 30,
          }}
        ></BarValue>
      </BarBorder>
      <Name>{name}</Name>
    </BarContainer>
  );
};

export default Bar;

const BarContainer = styled.div`
  position: relative;
  align-self: flex-end;
`;

const Value = styled.p`
  position: absolute;
  top: -2.2rem;
  width: 80px;
  transform: rotate(-25deg);
  font-size: 0.8rem;
  margin-bottom: 1rem;
`;

const BarBorder = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 100px;
  width: 10px;
  border: thin solid #ccc;
  border-radius: 3px 3px 0 0;
`;

const BarValue = styled(motion.div)(
  {
    width: "10px",
    background: "linear-gradient(45deg, var(--primary-1), var(--primary-6))",
  },
  (props) => ({ height: props.height })
);

const Name = styled.p`
  position: absolute;
  left: -0.7rem;
  width: 80px;
  text-transform: uppercase;
  font-size: 0.8rem;
`;
