import React from "react";
import { DragDropContext } from "react-beautiful-dnd";
import { onDragEnd } from "./redux/reducers/utils";
import ColumnComponent from "./ColumnComponent";
import { Row, Container } from "reactstrap";
import { useSelector, useDispatch } from "react-redux";
import {
  ReduxAppleSorterState,
  ColumnsState,
  DispatchToColumnsReducer,
  Column
} from "./redux/reducers/interface";
import { PropsAppleSorter } from "./index.d";

function AppleSorter(props: PropsAppleSorter) {
  const reduxState: ReduxAppleSorterState = useSelector(
    (reduxState: ReduxAppleSorterState) => reduxState
  );
  //console.log("state :", reduxState);
  const columnsState: ColumnsState = reduxState.columns[props.status];
  const { columns, columnsOrder } = columnsState;
  const dispatch: DispatchToColumnsReducer = useDispatch();

  const appleSorterCss = {
    display: "flex",
    maxHeight: "100%"
  };

  return (
    <Container
      style={{
        height: Math.floor(screen.height * 0.3).toString() + "px",
        maxWidth: "100%"
      }}
    >
      <Row className="my-2 h-100 w-100 justify-content-left">
        <DragDropContext
          onDragEnd={(result) =>
            onDragEnd(result, columns, props.status, dispatch)
          }
        >
          <div style={appleSorterCss}>
            {columnsOrder.map((columnId, index) => {
              const column: Column = columns[columnId];

              return (
                <ColumnComponent
                  columnsOrder={columnsOrder}
                  column={column}
                  columnId={columnId}
                  index={index}
                  key={columnId}
                  status={props.status}
                />
              );
            })}
          </div>
        </DragDropContext>
      </Row>
    </Container>
  );
}

export default AppleSorter;
