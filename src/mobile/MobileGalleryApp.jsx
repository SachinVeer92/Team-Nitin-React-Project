import React from 'react';
import {CardList} from './CardList';
import { Card } from  './Card';

console.log(CardList);
const rootDivStyle = {
    display:"flex",
    justifyContent:"space-between"
}
const Gallary = () => {
    return(
        CardList.map( ( currentObj ) => {
            return(
                <Card cardData={ currentObj }/>
            );
        } )
    )
}

const MobileGalleryApp = () => {
    return(<>
        <p className ="main"> Gallary with card and array map</p>
        <div style={rootDivStyle}><Gallary /></div>
        </>
        )
}

export default MobileGalleryApp;

