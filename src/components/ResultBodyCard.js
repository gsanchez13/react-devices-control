import React, { Component } from 'react';

class ResultBodyCard extends Component {
    
    constructor(props){
        super(props);
    }
    
    render() {
        return (
        <div>
        {
           this.props.list.map((card)=>{
                return <div key={card.pin}>{ JSON.stringify(card) }</div>
            })
        }
         </div>
        );
    }
}

export default ResultBodyCard;