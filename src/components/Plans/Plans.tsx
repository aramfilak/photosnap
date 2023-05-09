import "./Plans.scss";
import React, { useState } from "react";
import classNames from "classnames";
import Button from "../Button/Button";

interface Plan {
  name: string;
  description: string;
  yearlyPrice: number;
  monthlyPrice: number;
  link: string;
  recommended: boolean;
}

interface PlanProps {
  plans: Plan[];
}

const Plans: React.FC<PlanProps> = ({ plans }) => {
  const [yearly, setYearly] = useState<boolean>(false);

  const switcherClassName = classNames("plan-switcher", {
    yearly: yearly,
    monthly: !yearly,
  });

  const renderedPlans = plans.map((plan, index) => {
    const { name, description, yearlyPrice, monthlyPrice, link, recommended } = plan;

    const planClassName = classNames("plan", { recommended });

    return (
      <div className={planClassName} key={index}>
        <h2 className="name">{name}</h2>
        <p className="description">{description}</p>
        <h1 className="price">{`€${yearly ? yearlyPrice.toFixed(2) : monthlyPrice.toFixed(2)}`}</h1>
        <span className="payment-type">{yearly ? "yearly" : "monthly"}</span>
        <Button primary dark={!recommended}>
          <a href={link}>prick plan</a>
        </Button>
      </div>
    );
  });

  return (
    <div className={"plans"}>
      <div className={switcherClassName}>
        <span className="monthly">Monthly</span>
        <button className="btn" onClick={() => setYearly((prv) => !prv)}></button>
        <span className="yearly">Yearly</span>
      </div>
      <div className="wrapper">{renderedPlans}</div>
    </div>
  );
};

export default Plans;
