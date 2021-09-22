import React from "react";
import Basket from "./Basket";
import { Card, CardBody, CardTitle, Col, Row } from "reactstrap";

import { PropsColumnComponent } from "./index.d";
import ColumnForm from "./ColumnForm";
import SelectsFuturConfig from "./SelectsFuturConfig";
import BasketsHandler from "./BasketsHandler";

function ColumnComponent(props: PropsColumnComponent) {
  const numberOfBasket: number = props.columnsOrder.length - 1;

  return (
    <Col
      className={props.index ? "" : "mr-5"}
      style={{
        maxHeight: "100%",
        display: "flex",
        flexDirection: "column",
        width: "200px"
      }}
    >
      {props.index ? null : (
        <BasketsHandler numberOfBasket={numberOfBasket} status={props.status} />
      )}
      <Card
        body
        key={props.columnId}
        className="d-flex flex-column p-0 w-100 flex-grow-1"
      >
        <CardTitle
          tag="h6"
          className={
            "font-weight-bold text-center w-100 p-2 my-0 border-bottom border-3 small flex-grow-0"
          }
        >
          {props.column.name}
        </CardTitle>
        <Basket
          column={props.column}
          columnId={props.columnId}
          index={props.index}
          status={props.status}
        />
        {props.index ? (
          <ColumnForm
            status={props.status}
            index={props.index}
            columnId={props.columnId}
          />
        ) : null}
      </Card>
      {props.index === 0 && props.status === "futur" ? (
        <SelectsFuturConfig />
      ) : null}
    </Col>
  );
}

export default ColumnComponent;
