export const summaryReducer = (state=({}), action) => {
  switch (action.type) {
    case "summary":
      return (state = action.payload);
    default:
      return state;
  }
};
