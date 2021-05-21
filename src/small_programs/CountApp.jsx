// count program using use state hooks
import react,{ useState } from 'react';

const CountApp = () => {
    const [ newState, setCouter ] = useState( {  
        name:"Sachin",
        age:0
    } );


    const doIncreament = () => {
         setCouter( ( currntObject )=> {
                return { ...newState, age:(currntObject.age+1) }
         } );
    }


    return(<>
        <p className ="main"> Functional component with state</p>
        <div className ="main">
            <input name="clickable button"  onClick={doIncreament} type="button" value={newState.age}/>
            <p> { newState.name } </p>
        </div>
    </>)
}
export default CountApp;