const initialState = {
    currentUser:{},
   isAuth:false
};


//this function holds tha  all  actions  related to the  auth
//state is the value tha holds by the redux
//action  specify which operation is apply on that state

const userReducer = (state = initialState, action) => {
  return state;
};

export default userReducer;