// The link returns a list of all currencies including their IDs
const CURRENCIES_MAP_LINK = 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/map';
const CURRENCIES_BY_IDS_DOMAIN = "https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest";

const COMMON_HEADERS = {
  "Accept": "application/json",
  "Accept-Encoding": "deflate, gzip",
};

// Rename
const headers = {
    COMMON_HEADERS,
    "X-CMC_PRO_API_KEY": API_KEY,
};

// The current list of currencies I need to fetch
const CURRENCIES_ID = {
  BTC: "1",
  ETH: "1027",
  SOL: "5426",
  TRX: "1958",
  TWT: "5964",
  BNB: "1839",
};

const INPUT_COORDS = {
  rowStart: 12, colStart: 10, rowEnd: 7, colEnd: 3
};
const OUTPUT_COORDS_ROW_OFFSET = 12;
const OUTPUT_COORDS_COLUMN = 13;

const ASSETS_SHEET = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
const TEST_SHEET = SpreadsheetApp.getActiveSpreadsheet().getSheets()[1];


