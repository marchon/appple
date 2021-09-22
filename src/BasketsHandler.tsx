import { Row, Col, Button } from "reactstrap";
import {
  RESET_BASKETS,
  FILL_BASKETS_RANDOMLY,
  ADD_BASKET,
  REMOVE_BASKET
} from "./redux/actionsTypes";
import {
  ReduxAppleSorterState,
  DispatchFuturConfigReducer
} from "./redux/reducers/interface";
import { useDispatch, useSelector } from "react-redux";
import { PropsBasketsHandler } from "./index.d";

const BasketsHandler = (props: PropsBasketsHandler) => {
  const dispatch: DispatchFuturConfigReducer = useDispatch();
  const isoBasketActivated: boolean = useSelector(
    (state: ReduxAppleSorterState) => state.futurConfig.isoBasketActivated
  );
  const { status, numberOfBasket } = props;

  return (
    <div className="flex-grow-0">
      <Row className="mx-0">
        <h6 className="font-weight-bold small">{status.toUpperCase()}</h6>
      </Row>
      <Row className="mx-0">
        <Col className="flex-grow-0 p-0">
          <Button
            color="primary"
            size="sm"
            onClick={() =>
              dispatch({
                type: ADD_BASKET,
                payload: {
                  status
                }
              })
            }
            style={{ fontSize: "8px" }}
            disabled={
              numberOfBasket === 4 || (isoBasketActivated && status === "futur")
            }
          >
            +
          </Button>
        </Col>
        <Col className="flex-grow-0 p-0">
          <Button
            color="danger"
            size="sm"
            onClick={() =>
              dispatch({
                type: REMOVE_BASKET,
                payload: {
                  status
                }
              })
            }
            style={{ fontSize: "8px" }}
            disabled={
              numberOfBasket === 1 || (isoBasketActivated && status === "futur")
            }
          >
            -
          </Button>
        </Col>
        <Col className="p-0">
          <label className="small my-0 ml-1">{numberOfBasket} baskets</label>
        </Col>
      </Row>
      <Row className="mx-0 mt-1">
        <Col className="p-0 flex-grow-0 mr-1">
          <Button
            style={{ fontSize: "10px" }}
            disabled={isoBasketActivated && status === "futur"}
            size="sm"
            color="primary"
            onClick={() =>
              dispatch({
                type: RESET_BASKETS,
                payload: {
                  status
                }
              })
            }
          >
            Reset
          </Button>
        </Col>
        <Col className="p-0 flex-grow-0">
          <Button
            style={{ fontSize: "10px" }}
            disabled={isoBasketActivated && status === "futur"}
            size="sm"
            color="primary"
            onClick={() =>
              dispatch({
                type: FILL_BASKETS_RANDOMLY,
                payload: {
                  status
                }
              })
            }
          >
            Random
          </Button>
        </Col>
      </Row>
      <Row className="mx-0 mb-2"></Row>
    </div>
  );
};

export default BasketsHandler;
