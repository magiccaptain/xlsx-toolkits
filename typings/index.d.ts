declare module "@magicjs/xlsx-toolkits" {
  interface ColumnItem {
    title: String;
    key: String;
    dataIndex?: String;
    children?: [ColumnItem];
    _width?: Number;
    _fill?: String;
  }

  interface WriteXlsxParams {
    columns: [ColumnItem];
    distFile: String;
    rows: [object];
    type?: "xlsx" | "csv";
    sheetName?: String;
  }

  interface ReadXlsxParams {
    columns: [ColumnItem];
    fileData: Buffer;
  }

  export function writeXlsx(params: WriteXlsxParams): void;
  export function readXlsx(params: ReadXlsxParams): void;
}
