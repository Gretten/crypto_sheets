/**
 * The helper fetches all cryptocurrencies from coinmarketcap and shows it in a console.
 * 
 * @param link - the api link to get currencies
 * @param headers - headers should include fields:
 *    "Accept": "application/json",
 *    "Accept-Encoding": "deflate, gzip",
 *    "X-CMC_PRO_API_KEY": (api key),
 * @param callback - the function compatable to the Array.map iterator
 * @returns Promise with formatted array of cryptocurrencies
 */
const getCryptoIds = async (link, headers, callback) => {

  const options = {
    headers: headers,
    method: "get",
  };

  const response = await UrlFetchApp.fetch(link, options);

  const responseToObject = JSON.parse(response.getContentText());

  const { data } = responseToObject;

  const result = data.map(callback);

  return new Promise((resolve) => {
    resolve(result);
  });
};

/**
 * Exchange result formatter
 * @returns {
    *  name: string;
    *  symbol: string;
    *  id: number | string;
 * }
 */
const formatResult = (currency) => ({
    name: currency.name || 'no name',
    symbol: currency.symbol || 'not found',
    id: Math.floor(currency.id) || 'no ID',
});

const init = () => {

  const headers = {
      COMMON_HEADERS,
      "X-CMC_PRO_API_KEY": API_KEY,
  };

  const results = getCryptoIds(CURRENCIES_MAP_LINK, headers, formatResult);

  results.then(res => {
    res.forEach(el => {
      Logger.log(el);
    });
  });
};
