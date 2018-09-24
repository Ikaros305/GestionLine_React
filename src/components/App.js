import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from '../logo.svg';
import { bindActionCreators } from 'redux';
import '../App.css';
import * as simpleActions from '../actions/simpleAction';
import * as userActions from '../actions/userAction';
class App extends Component {

    constructor(props,context) {
        super(props, context);
        this.simpleAction = this.simpleAction.bind(this);
    }
    simpleAction = (event) => {
        this.props.actions.loadText();
        this.props.actions.SecondloadText('enviado desde el component');
        this.props.actionsUser.loginUser('oscaravilaperilla@hotmail.com','123456');
    }


    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload
                </p>
                <button onClick={this.simpleAction}>Test redux action</button>
                <p>{this.props.text}</p>
                <p>{this.props.text2}</p>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    text: state.simpleReducer.result || 'Initial',
    text2: state.simpleReducer.text || 'Initial 2',
    user: state.simpleReducer.user,
})

function mapDispatchToProps (dispatch) {
    return {
        actions: bindActionCreators(simpleActions, dispatch),
        actionsUser: bindActionCreators(userActions, dispatch),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);