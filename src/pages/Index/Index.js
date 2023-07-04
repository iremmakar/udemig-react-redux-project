import { useSelector, useDispatch } from "react-redux";

import { increment, decremenet, change } from "../../redux/slice/counterSlice";

function Index() {
  const currentCounter = useSelector((state) => {
    return state.counter.counter;
  });

  const dispatch = useDispatch();

  return (
    <div className="row">
      <div className="col-12">
        {" "}
        Counter: {currentCounter}
        <button
          className="btn btn-primary"
          onClick={(e) => dispatch(increment(e))}
        >
          Increment
        </button>
        <button
          className="btn btn-primary"
          onClick={(e) => dispatch(decremenet(e))}
        >
          Decrement
        </button>
        <button
          className="btn btn-primary"
          onClick={(e) => dispatch(change(5))}
        >
          Change
        </button>
      </div>
    </div>
  );
}

export default Index;
