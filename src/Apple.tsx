import React from "react";
import apple from "./apple.png";
import { Draggable } from "react-beautiful-dnd";
import { PropsApple } from "./index.d";
import { ReduxAppleSorterState } from "./redux/reducers/interface";
import { useSelector } from "react-redux";

function Apple(props: PropsApple) {
  const appleCss = (provided) => ({
    height: "30px",
    ...provided.draggableProps.style
  });

  const appleClassName = (snapshot) => {
    let className = "shadow mb-1 d-flex p-2 ";
    className += snapshot.isDragging ? "bg-info " : "bg-light ";

    return className;
  };

  const isoBasketActivated: boolean = useSelector(
    (state: ReduxAppleSorterState) => state.futurConfig.isoBasketActivated
  );

  return (
    <Draggable
      key={props.item.id}
      draggableId={props.item.id}
      index={props.index}
      isDragDisabled={isoBasketActivated && props.status === "futur"}
    >
      {(provided, snapshot) => {
        return (
          <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            style={appleCss(provided)}
            className={appleClassName(snapshot)}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center"
              }}
            >
              <img src={apple} className="mr-1" alt="img" height={"20px"} />
              <p className="m-0 small ml-1">{props.item.content}</p>
            </div>
          </div>
        );
      }}
    </Draggable>
  );
}

export default Apple;
