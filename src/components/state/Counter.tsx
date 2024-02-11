// import { useReducer } from "react";

// type StateType = {
//   count: number;
// };

// type ActionType = {
//   type: "increment" | "decrement" | "reset";
//   payload?: number;
// };

// const reducer = (state: StateType, action: ActionType) => {
//   switch (action.type) {
//     case "increment":
//       return { count: state.count + (action.payload || 0) };
//     case "decrement":
//       return { count: state.count - (action.payload || 0) };
//     case "reset":
//       return initialState;
//     default:
//       return state;
//   }
// };

// const initialState = { count: 0 };

// const Counter = () => {
//   const [state, dispatch] = useReducer(reducer, initialState);

//   const increment = () => dispatch({ type: "increment", payload: 1 });
//   const decrement = () => dispatch({ type: "decrement", payload: 1 });
//   const reseet = () => dispatch({ type: "reset" });

//   return (
//     <div>
//       <button onClick={increment}>Increment +</button>
//       <button onClick={reseet}>Reset</button>
//       <button onClick={decrement}>Decrement -</button>
//       <span> {state.count}</span>
//     </div>
//   );
// };

// export default Counter;

// ===============================================
// best solution

import { useReducer } from "react";

type StateType = {
  count: number;
};

type incDecType = {
  type: "increment" | "decrement";
  payload: number;
};

type resetType = {
  type: "reset";
};

type ActionType = incDecType | resetType;

const reducer = (state: StateType, action: ActionType) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + action.payload };
    case "decrement":
      return { count: state.count - action.payload };
    case "reset":
      return initialState;
    default:
      return state;
  }
};

const initialState = { count: 0 };

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const increment = () => dispatch({ type: "increment", payload: 1 });
  const decrement = () => dispatch({ type: "decrement", payload: 1 });
  const reseet = () => dispatch({ type: "reset" });

  return (
    <div>
      <button onClick={increment}>Increment +</button>
      <button onClick={reseet}>Reset</button>
      <button onClick={decrement}>Decrement -</button>
      <span> {state.count}</span>
    </div>
  );
};

export default Counter;
