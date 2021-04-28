import React , { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import LoginTemplate from '../components/templates/loginTemplate/LoginTemplate';
import { SessionTypeCreator, SessionActionCreator } from '../configuration/reduxStore/sessionReducer/Actions';
import { ScreenNavigationProps } from '../configuration/navigation/ScreenTypes'
import { GeneralState } from '../configuration/reduxStore/generalReducer/types';
import { AppState } from '../configuration/reduxStore/Store';
import { SessionState } from '../configuration/reduxStore/sessionReducer/types';

interface LoginState {
}

interface LoginProps extends ScreenNavigationProps{
    general : GeneralState
    session : SessionState
    sessionDispatch : SessionTypeCreator
}

class LoginScreen extends Component<LoginProps, LoginState> {
    state = {}

    constructor(props) {
        super(props);
    }

    login = () =>{
        this.props.sessionDispatch.login({email : '' , password : ''}, ()=>{}, ()=>{});
    }

    render() {
        return (
            <LoginTemplate
                loading={this.props.general.loading}
                login={this.login}
                userName={this.props.session.user.name}
            />
        );
    }

}

const mapStateToProps = (state : AppState) => ({
    general : state.general,
    session : state.session
}); 

const mapDispatchToProps =  (dispatch: Dispatch) => ({
    sessionDispatch: bindActionCreators(SessionActionCreator, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps )(LoginScreen);