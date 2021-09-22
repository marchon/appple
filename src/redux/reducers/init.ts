import { uuid } from "uuidv4";
import { Apple, Columns, ColumnsState } from "./interface";

export const initColumnsState = (applesFromBackend: Apple[]): ColumnsState => {
  const columns: Columns = initColumns(applesFromBackend);
  const columnsOrder: string[] = [...Object.keys(columns)];

  return {
    columns,
    columnsOrder,
    removedColumns: []
  };
};

const initColumns = (applesFromBackend: Apple[]): Columns => {
  return {
    appleList: {
      name: "apple List",
      items: [...applesFromBackend]
    },
    column1: {
      name: "Basket 1",
      items: []
    },
    column2: {
      name: "Basket 2",
      items: []
    },
    column3: {
      name: "Basket 3",
      items: []
    },
    column4: {
      name: "Basket 4",
      items: []
    }
  };
};

export const initApples = (): Apple[] => {
  let apples: Apple[] = [];
  for (let index = 0; index < 20; index++) {
    apples.push({
      id: uuid(),
      content: "apple " + (index + 1).toString()
    });
  }

  return apples;
};
