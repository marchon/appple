import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Col, Row, Input } from "reactstrap";
import { plantDatesOptions, slotOptions } from "./redux/reducers/const";
import {
  DispatchFuturConfigReducer,
  ReduxFuturConfigState,
  ReduxAppleSorterState
} from "./redux/reducers/interface";
import { UPDATE_FUTUR_CONFIG } from "./redux/actionsTypes";

function SelectsFuturConfig() {
  const dispatch: DispatchFuturConfigReducer = useDispatch();
  const inputValues: ReduxFuturConfigState = useSelector(
    (state: ReduxAppleSorterState) => state.futurConfig
  );
  const { plantDate, slot } = inputValues;

  const onChangeSelectPlant = (value: string) => {
    dispatch({
      type: UPDATE_FUTUR_CONFIG,
      payload: {
        key: "plantDate",
        value: value,
        columnIndex: null
      }
    });
  };

  const onChangeSelectSlot = (value: number) => {
    dispatch({
      type: UPDATE_FUTUR_CONFIG,
      payload: {
        key: "slot",
        value: value,
        columnIndex: null
      }
    });
  };
  return (
    <>
      <Row className="pl-0 py-0 mx-0 mt-3">
        <Col className="px-0 mr-1">
          <Input
            type="select"
            name="inputPlantDate"
            id="inputPlantDate"
            value={plantDate}
            onChange={(event) => onChangeSelectPlant(event.target.value)}
            className="p-0"
            style={{ fontSize: "9px" }}
            bsSize="sm"
          >
            {plantDatesOptions.map((option, index) => (
              <option
                value={option}
                key={index}
                disabled={index === 0 ? true : false}
              >
                {option}
              </option>
            ))}
          </Input>
        </Col>
        <Col className="px-0 ml-1">
          <Input
            type="select"
            name="inputSlotDate"
            id="inputSlotDate"
            value={slot}
            onChange={(event) =>
              onChangeSelectSlot(parseInt(event.target.value))
            }
            className="p-0"
            style={{ fontSize: "9px" }}
            bsSize="sm"
          >
            {slotOptions.map((option, index) => (
              <option
                value={option}
                key={index}
                disabled={index === 0 ? true : false}
              >
                {option}
              </option>
            ))}
          </Input>
        </Col>
      </Row>
    </>
  );
}

export default SelectsFuturConfig;
