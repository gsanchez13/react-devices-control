import React, { Component } from 'react';
import Request from 'react-http-request';
import ResultBodyCard from '../components/ResultBodyCard';
//import MainHeader from './components/MainHeader'
//import SearchBar from './components/SearchBar'

//import '../assets/App.css';
//import '../assets/bootstrap.min.css';
//import '../assets/bootstrap.min.css';

class CardListContainer extends Component {

    render() {
        return (
            <Request
                url='http://172.16.57.242:3080/gadget'
                method='get'
                accept='application/json'
                verbose={true}>
                {
                    ({error, result, loading}) => {
                        if (error) {
                            return <div>{error}</div>;
                        }

                        if (loading) {
                            return <div>loading...</div>;
                        } else {
                            return <ResultBodyCard list={result.body} />
                        }
                    }
                }
            </Request>
        );
    }
}

export default CardListContainer;