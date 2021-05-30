import React from "react";
import { motion } from "framer-motion";
import styled from "@emotion/styled";

const Bar = ({ type, value }) => {
  const config = {
    fuelchart: {
      height: (100 * value) / 11.62,
    },
    timechart: {
      height: (100 * value) / 60000000,
    },
  };

  return (
    <BarBorder>
      <BarValue
        height={
          type === "fuel"
            ? `${config.fuelchart.height}%`
            : `${config.timechart.height}%`
        }
        animate={{ xHeight: 100 }}
        transition={{
          type: "spring",
          stiffness: 7000,
          damping: 30,
        }}
      ></BarValue>
    </BarBorder>
  );
};

export default Bar;

const BarBorder = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 100px;
  width: 10px;
  border: 1px solid #ccc;
  border-radius: 3px 3px 0 0;
`;

const BarValue = styled(motion.div)(
  {
    width: "10px",
    background: "green",
  },
  (props) => ({ height: props.height })
);
