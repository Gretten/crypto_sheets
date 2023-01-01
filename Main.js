const main = () => {

  const input = filterInputDataFromDublicates(
    getDataFromCols(INPUT_COORDS, ASSETS_SHEET)
  );
  const queryIds = formIndexesToStringQuery(input, CURRENCIES_ID);
  const response = fetchDataFromExchange(CURRENCIES_BY_IDS_DOMAIN, headers, queryIds);

  response.then(res => {
    const filteredResponse = transformFetchedData(res);
    setPricesIntoColumn(filteredResponse, ASSETS_SHEET);
  });
};