import React from "react";
import { Input } from "reactstrap";
import { useSelector, useDispatch } from "react-redux";
import {
  UPDATE_FUTUR_CONFIG,
  UPDATE_ALL_GROWTH_DATE
} from "./redux/actionsTypes";
import { growthDatesForOneColumn } from "./redux/reducers/const";
import {
  ReduxAppleSorterState,
  DispatchFuturConfigReducer
} from "./redux/reducers/interface";

interface PropsInputGrowthDate {
  columnIndex: number;
}

const InputGrowthDate = (props: PropsInputGrowthDate) => {
  const dispatch: DispatchFuturConfigReducer = useDispatch();
  const futurConfig = useSelector(
    (state: ReduxAppleSorterState) => state.futurConfig
  );

  const inputValue: string = futurConfig.growthDate[props.columnIndex];
  const isoDateActivated: boolean = futurConfig.isoDateActivated;

  const onChangeSelect = (value: string) => {
    dispatch({
      type: isoDateActivated ? UPDATE_ALL_GROWTH_DATE : UPDATE_FUTUR_CONFIG,
      payload: {
        key: "growthDate",
        value: value,
        columnIndex: props.columnIndex
      }
    });
  };

  return (
    <>
      <Input
        type="select"
        name="inputGrowthDate"
        id="inputGrowthDate"
        value={inputValue}
        onChange={(event) => onChangeSelect(event.target.value)}
        className="p-0"
        style={{ fontSize: "9px" }}
        bsSize="sm"
      >
        {growthDatesForOneColumn.map((option, index) => (
          <option value={option} key={index} disabled={!index}>
            {option}
          </option>
        ))}
      </Input>
    </>
  );
};

export default InputGrowthDate;
