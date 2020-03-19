import React from 'react';
import Description from './Description';
import Emoji from './Emoji';

// funkcionalna komponenta
const Card = props => {
    return(
        <>
            <Description text={props.text} />
            <Emoji URL={props.URL} />
        </>
    )
}

// klasna komponenta
/*class Card extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <>
                <Description text={props.text} />
                <Emoji URL={props.URL} />
            </>
        )
    }
}*/

export default Card;