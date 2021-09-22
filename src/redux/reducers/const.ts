import { initApples, initColumnsState } from "./init";
import {
  Apple,
  Column,
  Columns,
  ColumnsState,
  ReduxColumnsState,
  BasketsParamsState,
  ReduxBasketsParamsState
} from "./interface";

/* COLUMNS */

export const applesFromBackend: Apple[] = initApples();

const initialCurrentColumnsState: ColumnsState = initColumnsState(
  applesFromBackend
);
const initialFuturColumnsState: ColumnsState = initColumnsState(
  applesFromBackend
);

export const initialColumnsState: ReduxColumnsState = {
  current: initialCurrentColumnsState,
  futur: initialFuturColumnsState
};

/* BASKETS PARAMS */

const optionsSelect1: string[] = ["Secteur", "2/02", "03/03", "04/04", "05/05"];
const optionsSelect2: string[] = ["Color", "blue", "red", "yellow", "green"];
const optionsSelect3: string[] = [...optionsSelect1];
const optionsSelect4: string[] = [...optionsSelect2];

export const optionsSelects: string[][] = [
  [...optionsSelect1],
  [...optionsSelect2],
  [...optionsSelect3],
  [...optionsSelect4]
];

const initialParamsOfOneBasket: string[] = optionsSelects.map(
  (options) => options[0]
);
const keysCurrentColumns: string[] = [
  ...initialCurrentColumnsState.columnsOrder
];

const initialCurrentBasketsParamsState: BasketsParamsState = {
  [keysCurrentColumns[1]]: [...initialParamsOfOneBasket],
  [keysCurrentColumns[2]]: [...initialParamsOfOneBasket],
  [keysCurrentColumns[3]]: [...initialParamsOfOneBasket],
  [keysCurrentColumns[4]]: [...initialParamsOfOneBasket]
};
const keysFuturColumns: string[] = [...initialFuturColumnsState.columnsOrder];
const initialFuturBasketsParamsState: BasketsParamsState = {
  [keysFuturColumns[1]]: [...initialParamsOfOneBasket],
  [keysFuturColumns[2]]: [...initialParamsOfOneBasket],
  [keysFuturColumns[3]]: [...initialParamsOfOneBasket],
  [keysFuturColumns[4]]: [...initialParamsOfOneBasket]
};

export const initialBasketsParamsState: ReduxBasketsParamsState = {
  current: { ...initialCurrentBasketsParamsState },
  futur: { ...initialFuturBasketsParamsState }
};

// futur config
export const growthDatesForOneColumn = [
  "Growth",
  "02/02",
  "03/03",
  "04/04",
  "05/05"
];
export const growthDatesOptions = [
  growthDatesForOneColumn[0],
  growthDatesForOneColumn[0],
  growthDatesForOneColumn[0],
  growthDatesForOneColumn[0]
];
export const plantDatesOptions = ["Plant", "03/02", "04/03", "05/04", "06/05"];
export const slotOptions = ["Slot", 1, 2, 3, 4, 5, 6, 7];
