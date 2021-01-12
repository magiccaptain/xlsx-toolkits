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

  interface AppendXlsxParams {
    columns: [ColumnItem];
    srcFileData: Buffer;
    rows: [object];
    type?: "xlsx" | "csv";
    sheetName?: String;
    distFile: String;
  }

  export function writeXlsx(params: WriteXlsxParams): void;
  export function readXlsx(params: ReadXlsxParams): void;
  export function appendXlsx(params: AppendXlsxParams): void;
}
