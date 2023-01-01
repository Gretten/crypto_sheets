// expects coordinates of a column and a sheet address
// returns an array of cell values of the column
const getDataFromCols = (coords, sheet) => {
  const { rowStart, colStart, rowEnd, colEnd } = coords;  
  
  return sheet.getSheetValues(rowStart, colStart, rowEnd, colEnd).map(el => {
    return el[0];
  })
};

const setPricesIntoColumn = (result, sheet) => {
  const currencyColumns = getDataFromCols(INPUT_COORDS, TEST_SHEET);

  const newArray = new Array(currencyColumns.length);

  for(let i = 0; i <= currencyColumns.length; i++) {
    const currencyToCheck = currencyColumns[i];

    for(let k = 0; k < result.length; k++) {
      const {name, price} = result[k];
      if(currencyToCheck === name) {
        newArray[i] = price;
      }
    }
  }
  
  for(let i = 0; i < newArray.length; i++) {
    // target coords. should be replaced with constants
    sheet.getRange(i + OUTPUT_COORDS_ROW_OFFSET, OUTPUT_COORDS_COLUMN).setValue(newArray[i])
  }
};
