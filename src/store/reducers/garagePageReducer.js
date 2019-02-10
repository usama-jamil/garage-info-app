const initialState = {
  id: 5,
  garageName: "ali's garage",
  logoImg: "some image url",
  location: "faisalabad madina town",
  rating: 3.5
};

//this function holds tha  all  actions  related to the  garagePage
//state is the value tha holds by the redux
//action  specify which operation is apply on that state

const garagePageReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_GARAGE_PAGE":
      break;

    default:
      return state;
  }
};

export default garagePageReducer;
