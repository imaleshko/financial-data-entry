import mongoose from "mongoose";

const parseNumber = (value) => {
  if (value === "") {
    return 0;
  }

  return Number(value);
};

const balancePeriod = {
  startOfPeriod: { type: Number, default: 0, set: parseNumber },
  endOfPeriod: { type: Number, default: 0, set: parseNumber },
};

const reportingPeriod = {
  forTheReportingPeriod: { type: Number, default: 0, set: parseNumber },
  fromTheReportingPeriodOfLastYear: {
    type: Number,
    default: 0,
    set: parseNumber,
  },
};

const financialReportSchema = new mongoose.Schema(
  {
    companyName: { type: String, required: true },
    date: { type: String, required: true },

    intangibleAssets: balancePeriod,
    basicMeans: balancePeriod,
    investmentProperty: balancePeriod,
    longTermFinancialInvestments: balancePeriod,
    deferredTaxAssets: balancePeriod,
    otherNonCurrentAssets: balancePeriod,
    reserves: balancePeriod,
    currentFinancialInvestments: balancePeriod,
    moneyAndEquivalents: balancePeriod,
    otherCurrentAssets: balancePeriod,
    registeredCapital: balancePeriod,
    additionalCapital: balancePeriod,
    reserveCapital: balancePeriod,
    deferredTaxLiabilities: balancePeriod,
    longTermBankLoans: balancePeriod,
    targetFunding: balancePeriod,
    shortTermBankLoans: balancePeriod,
    currentProvisions: balancePeriod,
    deferredIncome: balancePeriod,
    otherCurrentLiabilities: balancePeriod,

    netIncomeFromProductSales: reportingPeriod,
    costOfGoodsSold: reportingPeriod,
    grossProfit: reportingPeriod,
    grossLoss: reportingPeriod,
    otherOperatingIncome: reportingPeriod,
    operatingProfit: reportingPeriod,
    operatingLoss: reportingPeriod,
    profitBeforeTax: reportingPeriod,
    lossBeforeTax: reportingPeriod,
    netProfit: reportingPeriod,
    netLoss: reportingPeriod,
    otherComprehensiveIncomeBeforeTax: reportingPeriod,
    incomeTaxRelatedToOtherComprehensiveIncome: reportingPeriod,
    otherComprehensiveIncomeAfterTax: reportingPeriod,
    averageAnnualNumberOfCommonShares: reportingPeriod,
    netProfitLossPerCommonShare: reportingPeriod,
    dividendsPerCommonShare: reportingPeriod,

    termOfExistenceOfTheEnterprise: {
      type: Number,
      default: 0,
      set: parseNumber,
    },
    gradationOfProfitAndLossAnalysis: {
      type: Number,
      default: 0,
      set: parseNumber,
    },
    largestAmountOfCreditReceivedAndReturned: {
      type: Number,
      default: 0,
      set: parseNumber,
    },
    amountOfRequestedLoan: { type: Number, default: 0, set: parseNumber },
    amountOfOwnFundsInTheInvestment: {
      type: Number,
      default: 0,
      set: parseNumber,
    },
    valueOfOwnLiquidAssets: { type: Number, default: 0, set: parseNumber },
  },
  {
    timestamps: true,
  },
);

const FinancialReport = mongoose.model(
  "FinancialReport",
  financialReportSchema,
);

export default FinancialReport;
