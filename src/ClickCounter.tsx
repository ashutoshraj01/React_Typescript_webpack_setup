import {useState} from 'react';

const ClickCounter = () => {
    const [count, setCounter] = useState(0);
    return(
        <div>
            <button onClick={()=> setCounter(c => c+1 )}>Count -- {count}</button>
        </div>
    )
}

export default ClickCounter;

/**
 * Count state variable losses its value, whenever change hapens inside App.tsx file i.e Parent component.
 * To overcome this we can use webpack plugin - react refresh
 * REACT REFRESH --> is a newer version of Hot Module Replacement for react components. It preserves the state value when component is rendered due to some changes.
 * very helpful in development.
 */ 