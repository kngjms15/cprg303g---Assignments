
// initial state
export const initialState = {
    currentValue: "0",
    operator: null,// +, -, *, /
    previousValue: null,  
  };
  // handle number function
  export const handleNumber = (value, state) => {
    if (state.currentValue === "0") { // if current value is 0, return value
      return { currentValue: `${value}` };
    }
  
    return {// if current value is not 0, return current value + value
      currentValue: `${state.currentValue}${value}`,
    };
  };
  
  // handle equal function 
  const handleEqual = (state) => {
    const { currentValue, previousValue, operator } = state;

    if (operator === null || previousValue === null) {
      //if there's no operation to perform, return the current state
      return state;
    }
  
    const current = parseFloat(currentValue);
    const previous = parseFloat(previousValue);
    const resetState = { operator: null, previousValue: null };
  
    // if operator is null or previousValue is null, return current state 
    
    switch (operator) {
      case "+":
        return {
          currentValue: `${previous + current}`,
          ...resetState,
        };
      case "-":
        return {
          currentValue: `${previous - current}`,
          ...resetState,
        };
      case "*":
        return {
          currentValue: `${previous * current}`,
          ...resetState,
        };
      case "/":
        return {
          currentValue: `${previous / current}`,
          ...resetState,
        };
  
      default:
        return state;
    }
  };
  
  // calculator function 
  // type: number, clear, posneg, percentage, operator, equal
  const calculator = (type, value, state) => {

    switch (type) {
      case "number":
        return { 
          ...state,
          ...handleNumber(value, state)
        };
      case "clear":
        return initialState;
      case "posneg":// positive negative
        return {
          ...state,
          currentValue: `${parseFloat(state.currentValue) * -1}`,
        };
      case "percentage":
        return {
          ...state, 
          currentValue: `${parseFloat(state.currentValue) * 0.01}`,
        };
      case "operator":
        return {
          operator: value,
          previousValue: state.currentValue,
          currentValue: "0",
        };
      case "equal":
        return handleEqual(state);
      default:
        return state;
    }
  };
  
  export default calculator;