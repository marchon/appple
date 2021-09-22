import React from "react";
import { CardFooter, Row, Label, Col } from "reactstrap";
import { optionsSelects } from "./redux/reducers/const";
import ColumnInput from "./ColumnInput";
import InputGrowthDate from "./InputGrowthDate";
import { PropsColumnForm } from "./index.d";

const ColumnForm = (props: PropsColumnForm) => {
  return (
    <CardFooter className="flex-grow-0 py-1">
      <Row className="pl-2 py-0">
        <Label className="p-0" size="sm" style={{ fontSize: "10px" }}>
          Variety 1
        </Label>
      </Row>
      <Row>
        <Col className="px-1">
          <ColumnInput
            status={props.status}
            paramIndex={0}
            options={optionsSelects[0]}
            columnId={props.columnId}
          />
        </Col>
        <Col className="px-1">
          <ColumnInput
            status={props.status}
            paramIndex={1}
            options={optionsSelects[1]}
            columnId={props.columnId}
          />
        </Col>
      </Row>
      <Row className="pl-2 mt-1">
        <Label className="p-0" size="sm" style={{ fontSize: "10px" }}>
          Variety 2
        </Label>
      </Row>
      <Row>
        <Col className="px-1">
          <ColumnInput
            status={props.status}
            paramIndex={2}
            options={optionsSelects[2]}
            columnId={props.columnId}
          />
        </Col>
        <Col className="px-1">
          <ColumnInput
            status={props.status}
            paramIndex={3}
            options={optionsSelects[3]}
            columnId={props.columnId}
          />
        </Col>
      </Row>
      {props.status === "futur" ? (
        <>
          <Row className="pl-2 mt-1">
            <Label className="p-0" size="sm" style={{ fontSize: "10px" }}>
              Growth Date
            </Label>
          </Row>
          <Row>
            <Col className="px-1">
              <InputGrowthDate columnIndex={props.index - 1} />{" "}
              {/** -1 it's for futurConfig.growthDate index **/}
            </Col>
          </Row>
        </>
      ) : null}
    </CardFooter>
  );
};

export default ColumnForm;
