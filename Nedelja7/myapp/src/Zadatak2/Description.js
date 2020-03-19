import React from 'react';

// funkcionalna komponenta
/*const Description = props => {
    return(
        <label>{props.text}</label>
    )
}*/

// klasna komponenta
class Description extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <label>{this.props.text}</label>
        )
    }
}

export default Description;