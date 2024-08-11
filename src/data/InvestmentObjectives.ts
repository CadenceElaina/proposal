export const IOs = {
  conservativeIncome: {
    name: "Conservative Income",
    risk: 1,
    assetAllocation: [
      { asset: "U.S. Large Cap Equities", percentage: 0.12 },
      { asset: "U.S. Mid Cap Equities", percentage: 0.02 },
      { asset: "U.S. Small Cap Equities", percentage: 0 },
      { asset: "Developed Market Ex-U.S. Equities", percentage: 0 },
      { asset: "Emerging Market Equities", percentage: 0 },
      { asset: "U.S. Short Term Taxable Fixed Income", percentage: 0.17 },
      {
        asset: "U.S. Intermediate Term Taxable Fixed Income",
        percentage: 0.45,
      },
      { asset: "U.S. Long Term Taxable Fixed Income", percentage: 0.14 },
      { asset: "High Yield Taxable Fixed Income", percentage: 0.03 },
      { asset: "Emerging Market Fixed Income", percentage: 0.03 },
      { asset: "Commodities", percentage: 0.02 },
      { asset: "Taxable Cash Alternatives", percentage: 0.02 },
    ],
  },
  moderateIncome: {
    name: "Moderate Income",
    risk: 2,
    assetAllocation: [
      { asset: "U.S. Large Cap Equities", percentage: 0.18 },
      { asset: "U.S. Mid Cap Equities", percentage: 0.05 },
      { asset: "U.S. Small Cap Equities", percentage: 0 },
      { asset: "Developed Market Ex-U.S. Equities", percentage: 0.04 },
      { asset: "Emerging Market Equities", percentage: 0 },
      { asset: "U.S. Short Term Taxable Fixed Income", percentage: 0.13 },
      {
        asset: "U.S. Intermediate Term Taxable Fixed Income",
        percentage: 0.36,
      },
      { asset: "U.S. Long Term Taxable Fixed Income", percentage: 0.11 },
      { asset: "High Yield Taxable Fixed Income", percentage: 0.04 },
      { asset: "Emerging Market Fixed Income", percentage: 0.05 },
      { asset: "Commodities", percentage: 0.02 },
      { asset: "Taxable Cash Alternatives", percentage: 0.02 },
    ],
  },
  aggressiveIncome: {
    name: "Aggressive Income",
    risk: 3,
    assetAllocation: [
      { asset: "U.S. Large Cap Equities", percentage: 0.21 },
      { asset: "U.S. Mid Cap Equities", percentage: 0.07 },
      { asset: "U.S. Small Cap Equities", percentage: 0 },
      { asset: "Developed Market Ex-U.S. Equities", percentage: 0.07 },
      { asset: "Emerging Market Equities", percentage: 0 },
      { asset: "U.S. Short Term Taxable Fixed Income", percentage: 0.11 },
      {
        asset: "U.S. Intermediate Term Taxable Fixed Income",
        percentage: 0.27,
      },
      { asset: "U.S. Long Term Taxable Fixed Income", percentage: 0.09 },
      { asset: "High Yield Taxable Fixed Income", percentage: 0.06 },
      { asset: "Emerging Market Fixed Income", percentage: 0.08 },
      { asset: "Commodities", percentage: 0.02 },
      { asset: "Taxable Cash Alternatives", percentage: 0.02 },
    ],
  },
  conservativeGrowthIncome: {
    name: "Conservative Growth and Income",
    risk: 4,
    assetAllocation: [
      { asset: "U.S. Large Cap Equities", percentage: 0.23 },
      { asset: "U.S. Mid Cap Equities", percentage: 0.08 },
      { asset: "U.S. Small Cap Equities", percentage: 0.02 },
      { asset: "Developed Market Ex-U.S. Equities", percentage: 0.07 },
      { asset: "Emerging Market Equities", percentage: 0.04 },
      { asset: "U.S. Short Term Taxable Fixed Income", percentage: 0.09 },
      {
        asset: "U.S. Intermediate Term Taxable Fixed Income",
        percentage: 0.23,
      },
      { asset: "U.S. Long Term Taxable Fixed Income", percentage: 0.07 },
      { asset: "High Yield Taxable Fixed Income", percentage: 0.06 },
      { asset: "Emerging Market Fixed Income", percentage: 0.05 },
      { asset: "Commodities", percentage: 0.04 },
      { asset: "Taxable Cash Alternatives", percentage: 0.02 },
    ],
  },
  moderateGrowthIncome: {
    name: "Moderate Growth and Income",
    risk: 5,
    assetAllocation: [
      { asset: "U.S. Large Cap Equities", percentage: 0.27 },
      { asset: "U.S. Mid Cap Equities", percentage: 0.1 },
      { asset: "U.S. Small Cap Equities", percentage: 0.03 },
      { asset: "Developed Market Ex-U.S. Equities", percentage: 0.08 },
      { asset: "Emerging Market Equities", percentage: 0.05 },
      { asset: "U.S. Short Term Taxable Fixed Income", percentage: 0.07 },
      {
        asset: "U.S. Intermediate Term Taxable Fixed Income",
        percentage: 0.17,
      },
      { asset: "U.S. Long Term Taxable Fixed Income", percentage: 0.06 },
      { asset: "High Yield Taxable Fixed Income", percentage: 0.06 },
      { asset: "Emerging Market Fixed Income", percentage: 0.05 },
      { asset: "Commodities", percentage: 0.04 },
      { asset: "Taxable Cash Alternatives", percentage: 0.02 },
    ],
  },
  aggressiveGrowthIncome: {
    name: "Aggressive Growth and Income",
    risk: 6,
    assetAllocation: [
      { asset: "U.S. Large Cap Equities", percentage: 0.31 },
      { asset: "U.S. Mid Cap Equities", percentage: 0.12 },
      { asset: "U.S. Small Cap Equities", percentage: 0.03 },
      { asset: "Developed Market Ex-U.S. Equities", percentage: 0.09 },
      { asset: "Emerging Market Equities", percentage: 0.06 },
      { asset: "U.S. Short Term Taxable Fixed Income", percentage: 0.04 },
      {
        asset: "U.S. Intermediate Term Taxable Fixed Income",
        percentage: 0.12,
      },
      { asset: "U.S. Long Term Taxable Fixed Income", percentage: 0.04 },
      { asset: "High Yield Taxable Fixed Income", percentage: 0.07 },
      { asset: "Emerging Market Fixed Income", percentage: 0.06 },
      { asset: "Commodities", percentage: 0.04 },
      { asset: "Taxable Cash Alternatives", percentage: 0.02 },
    ],
  },
  conservativeGrowth: {
    name: "Conservative Growth",
    risk: 7,
    assetAllocation: [
      { asset: "U.S. Large Cap Equities", percentage: 0.33 },
      { asset: "U.S. Mid Cap Equities", percentage: 0.13 },
      { asset: "U.S. Small Cap Equities", percentage: 0.05 },
      { asset: "Developed Market Ex-U.S. Equities", percentage: 0.14 },
      { asset: "Emerging Market Equities", percentage: 0.09 },
      { asset: "U.S. Short Term Taxable Fixed Income", percentage: 0.04 },
      {
        asset: "U.S. Intermediate Term Taxable Fixed Income",
        percentage: 0.09,
      },
      { asset: "U.S. Long Term Taxable Fixed Income", percentage: 0.03 },
      { asset: "High Yield Taxable Fixed Income", percentage: 0.03 },
      { asset: "Emerging Market Fixed Income", percentage: 0 },
      { asset: "Commodities", percentage: 0.05 },
      { asset: "Taxable Cash Alternatives", percentage: 0.02 },
    ],
  },
  moderateGrowth: {
    name: "Moderate Growth",
    risk: 8,
    assetAllocation: [
      { asset: "U.S. Large Cap Equities", percentage: 0.35 },
      { asset: "U.S. Mid Cap Equities", percentage: 0.14 },
      { asset: "U.S. Small Cap Equities", percentage: 0.06 },
      { asset: "Developed Market Ex-U.S. Equities", percentage: 0.15 },
      { asset: "Emerging Market Equities", percentage: 0.12 },
      { asset: "U.S. Short Term Taxable Fixed Income", percentage: 0.02 },
      {
        asset: "U.S. Intermediate Term Taxable Fixed Income",
        percentage: 0.06,
      },
      { asset: "U.S. Long Term Taxable Fixed Income", percentage: 0 },
      { asset: "High Yield Taxable Fixed Income", percentage: 0.03 },
      { asset: "Emerging Market Fixed Income", percentage: 0 },
      { asset: "Commodities", percentage: 0.05 },
      { asset: "Taxable Cash Alternatives", percentage: 0.02 },
    ],
  },
  aggressiveGrowth: {
    name: "Aggressive Growth",
    risk: 9,
    assetAllocation: [
      { asset: "U.S. Large Cap Equities", percentage: 0.37 },
      { asset: "U.S. Mid Cap Equities", percentage: 0.16 },
      { asset: "U.S. Small Cap Equities", percentage: 0.07 },
      { asset: "Developed Market Ex-U.S. Equities", percentage: 0.18 },
      { asset: "Emerging Market Equities", percentage: 0.15 },
      { asset: "U.S. Short Term Taxable Fixed Income", percentage: 0 },
      {
        asset: "U.S. Intermediate Term Taxable Fixed Income",
        percentage: 0,
      },
      { asset: "U.S. Long Term Taxable Fixed Income", percentage: 0 },
      { asset: "High Yield Taxable Fixed Income", percentage: 0 },
      { asset: "Emerging Market Fixed Income", percentage: 0 },
      { asset: "Commodities", percentage: 0.05 },
      { asset: "Taxable Cash Alternatives", percentage: 0.02 },
    ],
  },
};
