import React from "react";
import SliderComponent from "./common/SliderComponent";

const SliderSelect = ({data, setData}) => {
  const bank_limit = 10000;
  return (
    <div>
      <SliderComponent
        amount={data.homeValue}
        unit="$"
        defaultValue={data.homeValue}
        value={data.homeValue}
        min={1000}
        max={bank_limit}
        step={100}
        label="Home Value"
        onChange={(e,value) => setData({
          //	homeValue: e.target.value
          // spread operator
          ...data,
          homeValue:value,
          downPayment:value * 0.20,
          loanAmount:value * 0.8
        })}
        
      ></SliderComponent>

      <SliderComponent
        amount={data.downPayment}
        unit="$"
        defaultValue={data.downPayment}
        value={data.downPayment}
        min={0}
        max={data.homeValue}
        step={100}
        onChange={(e,value) => setData({
          //	downPayment: e.target.value
          // spread operator
          ...data,
          downPayment:value,
          loanAmount:data.homeValue - value
        })}
        label="Down Payment"
      ></SliderComponent>

      <SliderComponent
        amount={data.loanAmount}
        unit="$"
        defaultValue={data.loanAmount}
        value={data.loanAmount}
        min={0}
        max={data.homeValue}
        step={100}
        onChange={(e,value) => setData({
          //	loanAmount: e.target.value
          // spread operator
          ...data,
          loanAmount:value,
          downPayment:data.homeValue - value
        })}
        label="Loan Amount"
      ></SliderComponent>

      <SliderComponent
        amount={data.interestRate}
        unit="%"
        defaultValue={data.interestRate}
        value={data.interestRate}
        min={2}
        max={18}
        step={0.5}
        onChange={(e,value) => setData({
          //	downPayment: e.target.value
          // spread operator
          ...data,
          interestRate:value,
        })}
        label="Interest Rate"
      ></SliderComponent>
    </div>
  );
};

export default SliderSelect;
