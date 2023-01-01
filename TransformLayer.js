const filterInputDataFromEmptyCells = (inputDataArray) => (
  inputDataArray.filter(function(el) {
      return el !== "";
    })
);

const filterInputDataFromDublicates = (filteredDataArray) => (
  filteredDataArray
    .reduce((result, item) => {
      return result.includes(item) ? result : [... result, item];
    }, [])
);

const formIndexesToStringQuery = (inputCurrencies, currenciesMap) => {
  const idKeysInLibrary = Object.keys(currenciesMap);

  return inputCurrencies.reduce(function(result, el) {
      return idKeysInLibrary.includes(el) ? [...result, currenciesMap[el]] : result;
  }, []).join(',')
};

const transformPriceToSheetFormat = (price) => String(price).replace('.', ',');

const transformFetchedData = (res) => {
    return Object.values(res.data).map((el) => {
      const priceToNumber = Number(el.quote.USD.price);
      const priceToFixedFloat = parseFloat(priceToNumber).toFixed(2);
      const priceInCorrectFormat = transformPriceToSheetFormat(priceToFixedFloat);

      return {
        name: el.symbol,
        price: priceInCorrectFormat,
      }
    });
};