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
    case "ADD_GARAGE_PAGE":
    
    console.log(action.garegePage);
      return state;

    case "ADD_GARAGE_PAGE_ERROR":
    console.log(action.error);
      return state;

    default:
      return state;
  }
};

export default garagePageReducer;
