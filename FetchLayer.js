const DOMAIN = "https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest";

/**
 * Fecthes current market data about crypto currencies by IDs
 * 
 * @param link - API link
 * @param headers - should include fields: 
 *    "Accept": "application/json",
 *    "Accept-Encoding": "deflate, gzip",
 *    "X-CMC_PRO_API_KEY": (api key),
 * @param currencyIds - search IDs 
 */
const fetchDataFromExchange = (link, headers, currencyIds) => {

  const searchUri = "id="+ currencyIds;
  const options = {
    headers: headers,
    method: "get"
  }
  const response = UrlFetchApp.fetch(link + "?" + searchUri, options);
  const resToObject = JSON.parse(response.getContentText());

  return new Promise((resolve) => {
    resolve(resToObject);
  });
};
