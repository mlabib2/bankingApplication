import React from "react";
import CountUp from "react-countup";

const AnimatedCounter = ({ amount }: { amount: number }) => {
  return (
    <div className="w-full">
      <CountUp end={amount} decimals={2} prefix="$" duration={2.75}></CountUp>
    </div>
  );
};

export default AnimatedCounter;
