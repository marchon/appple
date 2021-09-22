import { MOVE_APPLE_BASKET } from "../actionsTypes";
import {
  Status,
  Apple,
  Column,
  Columns,
  ColumnsState,
  DispatchToColumnsReducer
} from "./interface";
import { DropResult } from "react-beautiful-dnd";

// remove apples from baskets
export const resetBaskets = (
  newColumnsState: ColumnsState,
  applesFromBackend: Apple[]
) => {
  const keyAppleList: string = newColumnsState.columnsOrder[0];

  for (const key in newColumnsState.columns) {
    // remove all basket's apples
    if (key !== keyAppleList) {
      newColumnsState.columns[key].items = [];
    } else {
      // re-init apples
      newColumnsState.columns[key].items = applesFromBackend;
    }
  }
};

const createListApplesInRandomBasket = (
  listApplesNotInBasket: Apple[],
  numberOfBasket: number
): Apple[][] => {
  let listApplesInRandomBasket: Apple[][] = [],
    randomBasketIndex: number,
    apple: Apple;

  for (const indexApple in listApplesNotInBasket) {
    apple = listApplesNotInBasket[indexApple];

    // create a random index between available basket
    randomBasketIndex = Math.floor(Math.random() * numberOfBasket);

    // if the row isn't create we will create it, then we just push into an existing row
    if (listApplesInRandomBasket[randomBasketIndex] === undefined) {
      listApplesInRandomBasket[randomBasketIndex] = [];
    }

    listApplesInRandomBasket[randomBasketIndex].push(apple);
  }

  return listApplesInRandomBasket;
};

const fillNewColumnsWithList = (
  newColumns: Columns,
  listApplesInRandomBasket: Apple[][],
  keyAppleList: string
) => {
  let indexBasket: number = 0;

  // remove all apples thant aren't in basket
  newColumns[keyAppleList].items = [];

  // iterate over basket
  for (const keyBasket in newColumns) {
    // inserting apples only in basket column
    if (keyBasket !== keyAppleList) {
      if (listApplesInRandomBasket[indexBasket] !== undefined) {
        newColumns[keyBasket].items = newColumns[keyBasket].items.concat(
          listApplesInRandomBasket[indexBasket]
        );
      }

      indexBasket++;
    }
  }
};

export const filldBasketRandomApple = (newColumnsState: ColumnsState) => {
  const { columns, columnsOrder } = newColumnsState;
  const numberOfBasket: number = columnsOrder.length - 1;

  // get list of apple that aren't in basket
  const listApplesNotInBasket: Apple[] = columns[columnsOrder[0]].items;

  // create a list of apple randomly inserted in left basket
  let listApplesInRandomBasket: Apple[][] = createListApplesInRandomBasket(
    listApplesNotInBasket,
    numberOfBasket
  );

  // create a copy of current columns and fill it with the list of apple in random basket
  let newColumns: Columns = { ...columns };
  fillNewColumnsWithList(newColumns, listApplesInRandomBasket, columnsOrder[0]);

  newColumnsState.columns = newColumns;
};

export const removeBasketToColumns = (newColumnsState: ColumnsState) => {
  const keyAppleList: string = newColumnsState.columnsOrder[0];
  const keyBasketToRemove: string = newColumnsState.columnsOrder.pop();
  const listOfApplesThatWillBeRemoved: Apple[] =
    newColumnsState.columns[keyBasketToRemove].items;

  newColumnsState.columns[keyAppleList].items = newColumnsState.columns[
    keyAppleList
  ].items.concat(listOfApplesThatWillBeRemoved);

  newColumnsState.columns[keyBasketToRemove].items = [];

  // add the basket to the removed columns state
  newColumnsState.removedColumns.push(keyBasketToRemove);
};

export const addBasketToColumns = (newColumnsState: ColumnsState) => {
  const newKeyBasket: string = newColumnsState.removedColumns.pop();
  newColumnsState.columnsOrder.push(newKeyBasket);
};

// Moving apple between columns
export const onDragEnd = (
  result: DropResult,
  columns: Columns,
  status: Status,
  callback: DispatchToColumnsReducer
) => {
  let newColumns: Columns = { ...columns };
  const { source, destination } = result;
  if (!destination) return;

  if (
    destination.droppableId === source.droppableId &&
    destination.index === source.index
  ) {
    return;
  }

  if (source.droppableId !== destination.droppableId) {
    const sourceColumn: Column = newColumns[source.droppableId];
    const destColumn: Column = newColumns[destination.droppableId];
    const sourceItems: Apple[] = [...sourceColumn.items];
    const destItems: Apple[] = [...destColumn.items];
    const [removed] = sourceItems.splice(source.index, 1);
    destItems.splice(destination.index, 0, removed);

    newColumns[source.droppableId] = {
      ...newColumns[source.droppableId],
      items: sourceItems
    };

    newColumns[destination.droppableId] = {
      ...newColumns[destination.droppableId],
      items: destItems
    };
  } else {
    const column: Column = newColumns[source.droppableId];
    const copiedItems: Apple[] = [...column.items];
    const [removed] = copiedItems.splice(source.index, 1);
    copiedItems.splice(destination.index, 0, removed);
    newColumns[source.droppableId] = {
      ...newColumns[source.droppableId],
      items: copiedItems
    };
  }

  callback({
    type: MOVE_APPLE_BASKET,
    payload: {
      status,
      newColumns
    }
  });
};

export const isoBasket = (
  currentBasket: ColumnsState,
  futurBasket: ColumnsState
) => {
  /*
  futurBasket.columns = { ...currentBasket.columns };
  futurBasket.columnsOrder = [...currentBasket.columnsOrder];
  futurBasket.removedColumns = [...currentBasket.removedColumns];
  */
  futurBasket = JSON.parse(JSON.stringify(currentBasket));

  return futurBasket;
};
