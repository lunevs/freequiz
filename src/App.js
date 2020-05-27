import React from "react";
import { connect } from 'react-redux';
import { buttonClick } from './actions';


const mapStateToProps = (state) => {
    return {
      isButtonClicked: state.isButtonClicked,
      clickCounter: state.clickCounter
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
      onButtonClick: () => dispatch(buttonClick())
    }
}



class App extends React.Component {

    render() {
        const { onButtonClick, clickCounter } = this.props;

        return (
            <div>
              <button name="FirstButton" value="ClickMe" onClick={onButtonClick} style={{width: 300}}>{clickCounter}</button>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);


