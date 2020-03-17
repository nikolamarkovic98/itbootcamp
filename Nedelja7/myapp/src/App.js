import React from 'react';
import Forma from './Zadatak1/Forma';
import Card from './Zadatak2/Card';

const App = () => {
    return(
        <>
            <div>
                <h1>Zadatak1</h1>
                <Forma text="Text" />
                <hr />
            </div>
            <div>
                <h1>Zadatak2</h1>
                <Card text="Text" URL='https://vignette.wikia.nocookie.net/sundjerbobkockalone/images/d/d7/SpongeBob_stock_art.png/revision/latest?cb=20190425093337&path-prefix=sr' />
                <hr />
            </div>
        </>
    )
}

export default App;