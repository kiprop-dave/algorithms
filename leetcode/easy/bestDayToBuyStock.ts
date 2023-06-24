//You are given an array prices where prices[i] is the price of a given stock on the ith day.
//You want to maximize your profit by choosing a single day to buy one stock and choosing a 
//different day in the future to sell that stock.
//Solution: Ensure that the price for the buyingDay is always smaller than the sellingDay
function maxProfit(prices: number[]): number {
  let buyingDay = 0, sellingDay = 1, maxProfit = 0;

  while (sellingDay < prices.length) {
    let buyingPrice = prices[buyingDay];
    let sellingPrice = prices[sellingDay];
    const profit = sellingPrice - buyingPrice;
    if (profit > 0) {
      maxProfit = Math.max(maxProfit, profit);
    } else {
      buyingDay = sellingDay;
    }
    sellingDay++;
  }
  return maxProfit;
};
