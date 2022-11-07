import { faker } from "@faker-js/faker";

export type TableData = {
  quoteNumber: number;
  adress: string;
  contractNumber: string;
  status: string;
  subRows?: TableData[];
};

const range = (len: number) => {
  const arr = [];
  for (let i = 0; i < len; i++) {
    arr.push(i);
  }
  return arr;
};

const newTableData = (): TableData => {
  return {
    quoteNumber: faker.datatype.number({ min: 10000000, max: 99999999 }),
    adress: faker.address.streetName(),
    contractNumber: faker.datatype.string(),
    status: faker.helpers.shuffle<TableData["status"]>([
      "Offen",
      "Abgelehnt",
      "Angenommen",
    ])[0]!,
  };
};

export function makeData(...lens: number[]) {
  const makeDataLevel = (depth = 0): TableData[] => {
    const len = lens[depth]!;
    console.log(len);
    return range(len).map((): TableData => {
      return {
        ...newTableData(),
        subRows: lens[depth + 1] ? makeDataLevel(depth + 1) : undefined,
      };
    });
  };

  return makeDataLevel();
}
