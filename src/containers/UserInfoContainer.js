import React, { Component } from 'react';
import UserInfo from './components/UserInfo';
var imgUrl = 'http://freemiraclewater.com/wp-content/uploads/2016/05/angelinajolie.jpg';
class UserInfoContainer extends Component {
        constructor(props) {
        super(props);
        this.state = {
            UserInfos : [
                {
                    email:"gsanchez@ciandt.com",
                    url:imgUrl,
                    googleId: "gsanchez",
                    name: "Guilherme Sanchez"
                },
                {
                    email:"danilob@ciandt.com",
                    url:imgUrl,
                    googleId:"danilob",
                    name:"Danilo Bomfim"
                },
                {
                    email:"vsecco@ciandt.com",
                    url:imgUrl,
                    googleId:"vsecco",
                    name:"Vinicius Secco"
                },
                {
                    email:"maya@ciandt.com",
                    url:imgUrl,
                    googleId:"maya",
                    name:"Mayã Gonzalez"
                }
            ]
        };
 
    }
    render() {
        return (
            <div>
                <ul>
                    {this.state.UserInfos.map((elem)=>{
                        console.log(elem)
                        return <li key = {elem.email}><UserInfo 
                                    userInfo={elem} 
                                /></li>
                    })}
                </ul>
            </div>
        );
    }
}

export default UserInfoContainer;