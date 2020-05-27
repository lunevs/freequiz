
const initialState = {
  isButtonClicked: false,
  clickCounter: 0
};

const rootReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'BUTTON_CLICK':
      return {...state, isButtonClicked: true, clickCounter: ++state.clickCounter}
    default:
      return state
  }
}

export default rootReducer;
