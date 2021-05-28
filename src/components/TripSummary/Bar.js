import React from "react";
import { motion } from "framer-motion";
import styled from "@emotion/styled";

const Bar = ({ value, role }) => {
  const config = {
    fuelchart: {
      height: (100 * value) / 11.62,
    },
    timechart: {
      height: (100 * { value }) / 16.2,
    },
  };

  console.log(config.fuelchart.height);

  return (
    <BarBorder>
      <BarValue
        height={
          role === "fuel"
            ? `${config.fuelchart.height}%`
            : `${config.timechart.height}%`
        }
        transition={{
          duration: 2,
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
  border: 1px solid black;
  border-radius: 3px 3px 0 0;
`;

const BarValue = styled(motion.div)(
  {
    width: "10px",
    background: "green",
  },
  (props) => ({ height: props.height })
);
