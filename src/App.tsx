import "./styles.css";
import { useState } from "react";
import { Button } from "reactstrap";
import ModalAppleSorter from "./ModalAppleSorter";

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [viewBasket, setViewBasket] = useState("edit");
  const toggle = () => setIsModalOpen(!isModalOpen);

  return (
    <div className="App">
      <Button
        color="primary"
        onClick={toggle}
        style={{
          position: "absolute",
          top: screen.height / 2 - 200,
          left: screen.width / 2
        }}
      >
        Open {viewBasket === "creation" ? "CREATION" : "EDIT"} View
      </Button>
      <Button
        color="danger"
        onClick={() =>
          setViewBasket(viewBasket === "creation" ? "edit" : "creation")
        }
        style={{
          position: "absolute",
          top: screen.height / 2 - 100,
          left: screen.width / 2
        }}
      >
        Change View
      </Button>
      <ModalAppleSorter
        isModalOpen={isModalOpen}
        toggle={toggle}
        view={viewBasket}
      />
    </div>
  );
}
