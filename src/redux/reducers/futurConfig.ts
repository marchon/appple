import {
  UPDATE_FUTUR_CONFIG,
  UPDATE_ALL_GROWTH_DATE,
  TOGGLE_ISODATE,
  TOGGLE_ISOBASKET
} from "../actionsTypes";
import { ReduxFuturConfigState, ReduxFuturConfigAction } from "./interface";
import { growthDatesOptions, plantDatesOptions, slotOptions } from "./const";

const initialFuturConfig: ReduxFuturConfigState = {
  growthDate: growthDatesOptions,
  plantDate: plantDatesOptions[0],
  slot: slotOptions[0],
  isoDateActivated: false,
  isoBasketActivated: false
};

const futurConfig = (
  state: ReduxFuturConfigState = initialFuturConfig,
  action: ReduxFuturConfigAction
): ReduxFuturConfigState => {
  let newState: ReduxFuturConfigState = { ...state };

  switch (action.type) {
    case UPDATE_FUTUR_CONFIG: {
      // growDate Array
      if (action.payload.columnIndex !== null) {
        newState[action.payload.key][action.payload.columnIndex] =
          action.payload.value;
      } else {
        // either slot or plantDate
        newState[action.payload.key] = action.payload.value;
      }

      return newState || state;
    }
    case UPDATE_ALL_GROWTH_DATE: {
      for (let index = 0; index < newState.growthDate.length; index++) {
        newState.growthDate[index] = action.payload.value;
      }

      return newState || state;
    }
    case TOGGLE_ISODATE: {
      newState.isoDateActivated = !newState.isoDateActivated;
      for (let index = 1; index < newState.growthDate.length; index++) {
        newState.growthDate[index] = newState.growthDate[0];
      }

      return newState || state;
    }
    case TOGGLE_ISOBASKET: {
      newState.isoBasketActivated = !newState.isoBasketActivated;

      return newState || state;
    }

    default:
      return state;
  }
};

export default futurConfig;
