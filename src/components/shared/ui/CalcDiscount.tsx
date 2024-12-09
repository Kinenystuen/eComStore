import React from "react";

interface CalcDiscountProps {
  price: number;
  discountedPrice: number;
  className?: string;
}

const CalcDiscount: React.FC<CalcDiscountProps> = ({
  price,
  discountedPrice,
  className
}) => {
  if (price === 0) return <div className={className}>0%</div>;
  const discountPercentage = ((price - discountedPrice) / price) * 100;
  return <div className={className}>{discountPercentage.toFixed(1)}%</div>;
};

export default CalcDiscount;
