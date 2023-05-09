import "./Compare.scss";
import React from "react";
import checked from "../../assets/pricing/desktop/check.svg";
interface Feature {
  name: string;
  basic: boolean;
  pro: boolean;
  business: boolean;
}

interface CompareProps {
  features: Feature[];
}

const Compare: React.FC<CompareProps> = ({ features }) => {
  const renderedFeatures = features.map((feature, index) => {
    return (
      <tr key={index}>
        <td className="name">{feature.name}</td>
        <td>
          <span className="plan">basic</span> <br />
          {feature.basic && <img src={checked} alt="checked" />}
        </td>
        <td>
          <span className="plan">pro</span> <br />
          {feature.pro && <img src={checked} alt="checked" />}
        </td>
        <td>
          <span className="plan">business</span>
          <br />
          {feature.business && <img src={checked} alt="checked" />}
        </td>
      </tr>
    );
  });
  return (
    <div className="compare">
      <h2 className="title">compare</h2>
      <table className="compare-table">
        <thead>
          <tr>
            <th>The Features </th>
            <th> Basic</th>
            <th>Pro</th>
            <th>Business </th>
          </tr>
        </thead>
        <tbody>{renderedFeatures}</tbody>
      </table>
    </div>
  );
};

export default Compare;
