// either current or futur configuration
export type Status = "current" | "futur";

// our item
export interface Apple {
  id: string;
  content: string;
}

// either basket or apple list
export interface Column {
  name: string;
  items: Apple[];
}

// object including apple list and baskets
export interface Columns {
  appleList: Column;
  column1: Column;
  column2: Column;
  column3: Column;
  column4: Column;
}

// state of all columns for one status
export interface ColumnsState {
  columns: Columns;
  columnsOrder: string[];
  removedColumns: string[];
}

// state of all columns for both status
export interface ReduxColumnsState {
  current: ColumnsState;
  futur: ColumnsState;
}

// redux's action for columns reducer
export interface ReduxColumnsAction {
  type: string;
  payload: {
    status: Status;
    newColumns?: Columns;
  };
}

// object including options of all baskets for one status
export interface BasketsParamsState {
  [key: string]: string[];
}

// object including options of all baskets for both status
export interface ReduxBasketsParamsState {
  current: BasketsParamsState;
  futur: BasketsParamsState;
}

// redux's action for basketsParams reducer
export interface ReduxBasketsParamsAction {
  type: string;
  payload: {
    basketFormId: string;
    paramIndex: number;
    paramValue: string;
    status: Status;
  };
}

// futurConfig
export interface ReduxFuturConfigState {
  growthDate: string[];
  plantDate: string;
  slot: number | string;
  isoDateActivated: boolean;
  isoBasketActivated: boolean;
}

export interface ReduxFuturConfigAction {
  type: string;
  payload?: {
    key: string;
    value: string | number;
    columnIndex: number | null;
  };
}

export type DispatchFuturConfigReducer = (
  action: ReduxFuturConfigAction
) => void;

// function type
export type DispatchToColumnsReducer = (action: ReduxColumnsAction) => void;
export type DispatchToBasketsParamsReducer = (
  action: ReduxBasketsParamsAction
) => void;

// app interface
export interface ReduxAppleSorterState {
  basketsParams: ReduxBasketsParamsState;
  columns: ReduxColumnsState;
  futurConfig: ReduxFuturConfigState;
}
