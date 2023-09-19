import './styles.css';
import Image from './logo192.png';
import svgImage from './logo.svg';
import ClickCounter from './ClickCounter';

export const App = () => {
    return <>
            <h1>Happy Learning !!!</h1>
            <h1>React  Typescript Webpack Template - {process.env.NODE_ENV} - {process.env.name}</h1>
            <div>
                <img src={Image} width="120px" height="120px" />
            </div>
            <div>
                <img src={svgImage} width="120px" height="120px" />
            </div>
            <div>
                <ClickCounter />
            </div>
            </>
}