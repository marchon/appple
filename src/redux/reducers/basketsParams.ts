import { UPDATE_BASKET_PARAM } from "../actionsTypes";
import { initialBasketsParamsState } from "./const";
import { ReduxBasketsParamsState, ReduxBasketsParamsAction } from "./interface";

const basketsParams = (
  state: ReduxBasketsParamsState = initialBasketsParamsState,
  action: ReduxBasketsParamsAction
): ReduxBasketsParamsState => {
  switch (action.type) {
    case UPDATE_BASKET_PARAM: {
      const { basketFormId, paramIndex, paramValue, status } = action.payload;
      let newState: ReduxBasketsParamsState = { ...state };

      newState[status][basketFormId][paramIndex] = paramValue;

      return newState || state;
    }

    default:
      return state;
  }
};

export default basketsParams;
