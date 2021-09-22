import React from "react";
import { Input } from "reactstrap";
import { useSelector, useDispatch } from "react-redux";
import { UPDATE_BASKET_PARAM } from "./redux/actionsTypes";
import { PropsColumnInput } from "./index.d";
import {
  ReduxAppleSorterState,
  DispatchToBasketsParamsReducer
} from "./redux/reducers/interface";

type StateColumnInput = string;

const ColumnInput = (props: PropsColumnInput) => {
  const dispatch: DispatchToBasketsParamsReducer = useDispatch();
  const inputValue: StateColumnInput = useSelector(
    (state: ReduxAppleSorterState) =>
      state.basketsParams[props.status][props.columnId][props.paramIndex]
  );

  const onChangeSelect = (value: string, index: number) => {
    dispatch({
      type: UPDATE_BASKET_PARAM,
      payload: {
        basketFormId: props.columnId,
        paramValue: value,
        paramIndex: index,
        status: props.status
      }
    });
  };

  return (
    <>
      <Input
        type="select"
        name={props.paramIndex.toString()}
        id={props.paramIndex.toString()}
        value={inputValue}
        onChange={(event) =>
          onChangeSelect(event.target.value, props.paramIndex)
        }
        className="p-0"
        style={{ fontSize: "9px" }}
        bsSize="sm"
      >
        {props.options.map((option, index) => (
          <option
            value={option}
            disabled={index === 0 ? true : false}
            key={index}
          >
            {option}
          </option>
        ))}
      </Input>
    </>
  );
};

export default ColumnInput;
