import fs from "fs";
import { genHeaderCells, readXlsx, writeXlsx } from "./lib";

const columns = [
  {
    title: "Name",
    key: "name",
    children: [
      {
        title: "First Name",
        key: "firstName",
        _width: 200,
        _fill: "--",
      },
      {
        title: "Last Name",
        key: "lastName",
        _width: 200,
        _fill: "--",
      },
    ],
  },
  {
    title: "age",
    key: "age",
  },
  {
    title: "sex",
    key: "sex",
    _fill: "--",
  },
];

test("should write xlsx file", () => {
  const rows = [
    {
      firstName: "Magic",
      lastName: "Captain",
      age: 32,
      sex: "male",
    },
    {
      firstName: "Trump",
      lastName: "Donald",
      age: 76,
      sex: "unknown",
    },
    {
      age: 88,
    },
    {},
  ];

  writeXlsx({
    columns,
    rows,
  });
});

test("should read xlsx", () => {
  const fileData = fs.readFileSync("./tmp.xlsx");

  readXlsx({
    columns,
    fileData,
  });
});

test("should gen header cells", () => {
  const ret = genHeaderCells(columns);

  expect(ret).toMatchObject({
    headerCells: {
      A1: {
        v: "Name",
        t: "s",
      },
      A2: {
        v: "First Name",
        t: "s",
      },
      B2: {
        v: "Last Name",
        t: "s",
      },
      C1: {
        v: "age",
        t: "s",
      },
      D1: {
        v: "sex",
        t: "s",
      },
      "!merges": [
        {
          s: {
            r: 0,
            c: 0,
          },
          e: {
            r: 0,
            c: 1,
          },
        },
        {
          s: {
            c: 2,
            r: 0,
          },
          e: {
            c: 2,
            r: 1,
          },
        },
        {
          s: {
            c: 3,
            r: 0,
          },
          e: {
            c: 3,
            r: 1,
          },
        },
      ],
      "!ref": "A1:E2",
    },
    flattenCs: [
      {
        title: "First Name",
        key: "firstName",
      },
      {
        title: "Last Name",
        key: "lastName",
      },
      {
        title: "age",
        key: "age",
      },
      {
        title: "sex",
        key: "sex",
      },
    ],
    maxDeep: 1,
  });
});
