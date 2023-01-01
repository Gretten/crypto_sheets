const main = () => {

  const input = getDataFromCols(INPUT_COORDS, ASSETS_SHEET);
  const inputWithoutDuplicates = filterInputDataFromDublicates(input);
  const queryIds = formIndexesToStringQuery(inputWithoutDuplicates, CURRENCIES_ID);
  const response = fetchDataFromExchange(CURRENCIES_BY_IDS_DOMAIN, headers, queryIds);

  response.then(res => {
    const filteredResponse = transformFetchedData(res);
    setPricesIntoColumn(filteredResponse, TEST_SHEET);
  })
  
};