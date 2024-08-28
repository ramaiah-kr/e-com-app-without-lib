// Define the initial state
let state = {
  products: [],
  cart:[],
  userinfo: {
    favorites: []// product id
  }
};

// Define a function to update the state
function setState(newState) {
  state = newState;
}

export { state, setState};