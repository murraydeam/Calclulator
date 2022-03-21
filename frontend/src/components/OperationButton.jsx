import { ACTIONS } from "./Calculator";
import DigitButton from "./DigitButton";

const OperationButton = ({ dispatch, operation}) => {
  return (
    <button
      onClick={() => dispatch({ type: ACTIONS.CHOOSE_OPERATION, payload: { operation } })}
    >
      {operation}
    </button>
  );
};

export default OperationButton;
