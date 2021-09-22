import React from "react";
import Apple from "./Apple";
import { Droppable } from "react-beautiful-dnd";
import { PropsBasket } from "./index.d";

function Basket(props: PropsBasket) {
  const basketCss = (snapshot) => ({
    display: "flex",
    flexDirection: "column",
    minHeight: "100%",
    backgroundColor: snapshot.isDraggingOver ? "#d9d9d9" : "#f8f9fa"
  });

  return (
    <div
      style={{
        overflowY: "auto"
      }}
      className="flex-grow-1 w-100 p-1"
    >
      <Droppable
        direction="vertical"
        droppableId={props.columnId}
        key={props.columnId}
        type="apple"
      >
        {(provided, snapshot) => {
          return (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              style={basketCss(snapshot)}
            >
              {props.column.items.map((item, index) => {
                return (
                  <Apple
                    item={item}
                    index={index}
                    key={item.id}
                    status={props.status}
                  />
                );
              })}
              {provided.placeholder}
            </div>
          );
        }}
      </Droppable>
    </div>
  );
}

export default Basket;
