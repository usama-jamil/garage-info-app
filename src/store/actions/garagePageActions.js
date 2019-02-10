
export const updateGaragePage = garegePage => {
  return (dispatch, getState) => {
    // Make a async call  to the database in the cloud
    dispatch({ type: "UPDATE_GARAGE_PAGE", garegePage });
  };
};

export const addGaragePage = garegePage =>{
  return (dispatch, getState ,{getFirestore,getFirebase}) => {
    // Make a async call  to the database in the cloud
    dispatch({ type: "Add_GARAGE_PAGE", garegePage });
  };
};
//  by applying middleware  we now  return a function instead  of the object 
// type define the which type of the reducer will be  call 
// garagePage is the state that  we use in our reducer