import React, { Component } from 'react';
import Gadget from '../containers/components/Gadget'
import './ResultBodyCard.css';
class ResultBodyCard extends Component {

    render() {
        return (
            <div className="Card-list">
                {
                    this.props.list.map((card) => {
                        return (
                            <div key={card.pin} className="Card-container">
                                <Gadget userInfo={card.userInfo} deviceInfo={card.deviceInfo}>{JSON.stringify(card)}</Gadget>
                            </div>
                        )
                    })
                }
            </div>
        );
    }
}

export default ResultBodyCard;