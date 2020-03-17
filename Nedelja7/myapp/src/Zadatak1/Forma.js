import React from 'react';

// funkcionalna komponenta
const Forma = props => {
    return (
        <>
            <input type="text" />
            <button>{props.text}</button>
        </>
    )
}

// klasna komponenta
/*class Forma extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <>
                <input type="text" />
                <button>{this.props.text}</button>
            </>
        )
    }
}*/

export default Forma;