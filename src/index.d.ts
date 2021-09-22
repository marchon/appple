import { Apple, Column, Status } from "./redux/reducers/interface";

export interface PropsModalAppleSorter {
  isModalOpen: boolean;
  view: string;
  toggle: () => void;
}

export interface PropsAppleSorter {
  status: Status;
}

export interface PropsBasket {
  column: Column;
  columnId: string;
  index: number;
  status: Status;
}

export interface PropsApple {
  item: Apple;
  index: number;
  key: string;
  status: Status;
}

export interface PropsColumnComponent {
  columnsOrder: string[];
  column: Column;
  columnId: string;
  index: number;
  key: string;
  status: Status;
}

export interface PropsBasketsHandler {
  numberOfBasket: number;
  status: Status;
}

export interface PropsColumnForm {
  status: Status;
  index: number;
  columnId: string;
}

interface PropsColumnInput {
  status: Status;
  paramIndex: number;
  options: string[];
  columnId: string;
}
