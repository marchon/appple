import {
  RESET_BASKETS,
  FILL_BASKETS_RANDOMLY,
  REMOVE_BASKET,
  ADD_BASKET,
  MOVE_APPLE_BASKET,
  ISO_BASKET
} from "../actionsTypes";
import { initialColumnsState, applesFromBackend } from "./const";
import {
  resetBaskets,
  filldBasketRandomApple,
  removeBasketToColumns,
  addBasketToColumns,
  isoBasket
} from "./utils";

import { ReduxColumnsState, ReduxColumnsAction } from "./interface";

const columns = (
  state: ReduxColumnsState = initialColumnsState,
  action: ReduxColumnsAction
): ReduxColumnsState => {
  let newState: ReduxColumnsState = { ...state };

  switch (action.type) {
    case RESET_BASKETS: {
      resetBaskets(newState[action.payload.status], applesFromBackend);

      return newState || state;
    }
    case FILL_BASKETS_RANDOMLY: {
      filldBasketRandomApple(newState[action.payload.status]);

      return newState || state;
    }
    case REMOVE_BASKET: {
      removeBasketToColumns(newState[action.payload.status]);

      return newState || state;
    }
    case ADD_BASKET: {
      addBasketToColumns(newState[action.payload.status]);

      return newState || state;
    }
    case MOVE_APPLE_BASKET: {
      newState[action.payload.status].columns = action.payload.newColumns;

      return newState || state;
    }

    case ISO_BASKET: {
      newState.futur = isoBasket(newState.current, newState.futur);

      return newState || state;
    }
    default:
      return state;
  }
};

export default columns;
