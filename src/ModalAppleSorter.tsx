import { useState } from "react";
import AppleSorter from "./AppleSorter";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { PropsModalAppleSorter } from "./index.d";
import {
  ReduxAppleSorterState,
  DispatchFuturConfigReducer
} from "./redux/reducers/interface";
import {
  TOGGLE_ISODATE,
  TOGGLE_ISOBASKET,
  ISO_BASKET
} from "./redux/actionsTypes";
import { useSelector, useDispatch } from "react-redux";

const ModalAppleSorter = (props: PropsModalAppleSorter) => {
  const [isFuturVisible, setIsFuturVisible] = useState(true);
  const buttonStyle = {
    fontSize: "10px"
  };
  const dispatch: DispatchFuturConfigReducer = useDispatch();
  const { isoDateActivated, isoBasketActivated } = useSelector(
    (state: ReduxAppleSorterState) => state.futurConfig
  );

  // 1 column = 200 px, there are 5 column, and add 100px margin
  const widthModal: string = (200 * 5 + 100).toString() + "px";

  const handleIsoBasketButton = () => {
    // copy columns
    if (!isoBasketActivated) {
      dispatch({ type: ISO_BASKET });
    }

    //toggle button
    dispatch({ type: TOGGLE_ISOBASKET });
  };

  return (
    <Modal
      isOpen={props.isModalOpen}
      toggle={props.toggle}
      style={{ maxWidth: widthModal }}
    >
      <ModalHeader toggle={props.toggle} className="p-2">
        Apple Sorter
      </ModalHeader>
      <ModalBody className="p-2">
        <AppleSorter status="current" />
        {isFuturVisible && props.view === "edit" ? (
          <AppleSorter status="futur" />
        ) : null}
      </ModalBody>
      <ModalFooter className="p-2">
        {props.view === "edit" ? (
          <>
            <Button
              style={buttonStyle}
              size="sm"
              className="ml-2"
              color={isFuturVisible ? "warning" : "primary"}
              onClick={() => setIsFuturVisible(!isFuturVisible)}
            >
              {isFuturVisible ? "Hide" : "Display"} futur
            </Button>
            <Button
              style={buttonStyle}
              size="sm"
              className="ml-2"
              disabled={isoBasketActivated}
              color={isoDateActivated ? "warning" : "primary"}
              onClick={() => dispatch({ type: TOGGLE_ISODATE })}
            >
              ISO DATE
            </Button>
            <Button
              style={buttonStyle}
              size="sm"
              className="ml-2"
              disabled={isoDateActivated}
              color={isoBasketActivated ? "warning" : "primary"}
              onClick={() => handleIsoBasketButton()}
            >
              ISO BASKET
            </Button>
          </>
        ) : null}
        <Button
          style={buttonStyle}
          size="sm"
          className="small"
          color="success"
          onClick={props.toggle}
        >
          Send to DB
        </Button>
        <Button
          style={buttonStyle}
          size="sm"
          className="small"
          color="danger"
          onClick={props.toggle}
        >
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default ModalAppleSorter;
