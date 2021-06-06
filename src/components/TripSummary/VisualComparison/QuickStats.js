import React from "react";
import styled from "@emotion/styled";
import { formatTime } from "../../../utilities/helperFunctions";

const QuickStats = ({ type, trip, difference }) => {
  return (
    <Stats>
      <H3>{trip ? trip.name : ""}</H3>
      <p>
        {difference
          ? type === "time"
            ? `${formatTime(difference)} less`
            : `${difference.toFixed(2)} liters less`
          : ""}
      </p>
      <Stamp>
        {difference === 0 ? "equal" : type === "time" ? "faster" : "economical"}
      </Stamp>
    </Stats>
  );
};

export default QuickStats;

const Stats = styled.div`
  display: flex;
  flex-direction: column;
  width: 6rem;
  align-items: center;
  font-size: 0.8rem;
`;

const H3 = styled.h3``;

const Stamp = styled.div`
margin-top: 1rem;
  color: var(--support-1);
	transform: rotate(-14deg);
  border-radius: 0.5rem;
	font-size: 1rem;
	font-weight: 700;
	border: 0.3rem solid var(--support-1);
	display: inline-block;
	padding: 0.25rem 1rem;
	text-transform: uppercase;
	font-family: 'Courier';
	-webkit-mask-image: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/8399/grunge.png');
  -webkit-mask-size: 944px 604px;
  -webkit-mask-position: 13rem 6rem;
  mix-blend-mode: multiply;
  
  
} 
`;
