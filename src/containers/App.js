import React, { Component } from 'react';
import Header from '../components/Header'
import CardListContainer from './CardListContainer';
import Login from './Login';

class App extends Component {
    

    constructor(props){
        super(props)
        this.state = {logged: false}   
    }

    setLogged = (logged) => {
        this.setState({logged: logged});
    }
    
    render() {
        return (
            <div>
                <Header>
                    <Login logged={this.state.logged} login={this.setLogged}/>
                </Header>
                <CardListContainer logged={this.state.logged}/>
            </div>
        );
    }
}

export default App;