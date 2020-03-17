import React from 'react';

// funkcionalna komponenta
/*const Emoji = props => {
    return(
        <img src={props.URL} />
    )
}*/

// klasna komponenta
class Emoji extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <img src={this.props.URL} />
        )
    }
}

export default Emoji;