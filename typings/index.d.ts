declare module "@magicjs/xlsx-toolkits" {
  interface ColumnItem {
    title: String;
    key: String;
    dataIndex?: String;
    children?: [ColumnItem];
    _width?: Number;
    _fill?: String;
  }

  interface WriteFileParams {
    columns: [ColumnItem];
    distFile: String;
    rows: [object];
    type?: "xlsx" | "csv";
    sheetName?: String;
  }

  interface ReadFileParams {
    columns: [ColumnItem];
    fileData: Buffer;
  }

  export function writeFile(params: WriteFileParams): void;
  export function readFile(params: ReadFileParams): void;
}
