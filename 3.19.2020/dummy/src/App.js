import React from 'react';
import { StoriesContainer } from './containers/StoriesContainer';

import './App.css'

class App extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <>
                <StoriesContainer />
            </>
        )
    }
}

export default App;