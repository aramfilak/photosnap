import "./Compare.scss";
import React from "react";
import checked from "../../assets/pricing/desktop/check.svg";
interface Feature {
  name: string;
  basic: boolean;
  pro: boolean;
  business: boolean;
}
const features: Feature[] = [
  { name: "unlimited story posting", basic: true, pro: true, business: true },
  { name: "unlimited photo upload", basic: true, pro: true, business: true },
  { name: "embedding custom content", basic: false, pro: true, business: true },
  { name: "customize metadata", basic: false, pro: true, business: true },
  { name: "advanced metrics", basic: false, pro: false, business: true },
  { name: "photo downloads ", basic: false, pro: false, business: true },
  { name: "search engine indexing", basic: false, pro: false, business: true },
  { name: "custom analytics", basic: false, pro: false, business: true },
];
const Compare: React.FC = () => {
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
