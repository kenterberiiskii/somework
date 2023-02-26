import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'

import UserList from './Components/User.js'

class App extends React.Component {
    constructor(props) {
        super(props)
            this.state = {
                'users': []
            }
    }
//    componentDidMount() {
//        const users = [
//            {
//            'first_name': 'Фёдор',
//            'last_name': 'Достоевский',
//            'username': 1821
//            },
//            {
//            'first_name': 'Александр',
//            'last_name': 'Грин',
//            'username': 1880
//            },
//        ]
//        this.setState(
//            {
//            'users': users
//            }
//        )
//    }

    componentDidMount() {
        axios.get('http://127.0.0.1:8000/api/users')
        .then(response => {
        const users = response.data
        this.setState(
        {
        'users': users
        }
        )
        }).catch(error => console.log(error))
    }

    render () {
        return (
            <div>
            <UserList users={this.state.users} />
            </div>
        )
    }
}

export default App;