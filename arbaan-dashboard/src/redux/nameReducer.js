export const nameReducer = (state = [], action) => {
  switch (action.type) {
    case "username":
      return (state = action.payload);
    default:
      return state;
  }
};
