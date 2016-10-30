import React, { Component } from 'react'
import Gadget from './Gadget'

/** CSS */
import '../styles/ResultBodyCard.css'


class ResultBodyCard extends Component {

    render() {
        return (
            <div className="Card-list">
                {
                    this.props.list.map((card) => {
                        return (
                            <div key={card.pin} className="Card-container">
                                <Gadget userInfo={card.userInfo} deviceInfo={card.deviceInfo} platform={card.platform} >{JSON.stringify(card)}</Gadget>
                            </div>
                        )
                    })
                }
            </div>
        );
    }
}

export default ResultBodyCard