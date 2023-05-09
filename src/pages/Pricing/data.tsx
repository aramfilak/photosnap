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

interface Plan {
  name: string;
  description: string;
  yearlyPrice: number;
  monthlyPrice: number;
  link: string;
  recommended: boolean;
}

const plans: Plan[] = [
  {
    name: "basic",
    description:
      "Includes basic usage of our platform. Recommended for new and aspiring photographers.",
    yearlyPrice: 190.0,
    monthlyPrice: 19.0,
    link: "#",
    recommended: false,
  },
  {
    name: "pro",
    description:
      "More advanced features available. Recommended for photography veterans and professionals.",
    yearlyPrice: 390.0,
    monthlyPrice: 39.0,
    link: "#",
    recommended: true,
  },
  {
    name: "business",
    description:
      "Additional features available such as more detailed metrics. Recommended for business owners.",
    yearlyPrice: 990.0,
    monthlyPrice: 99.0,
    link: "#",
    recommended: false,
  },
];

export { features, plans };
