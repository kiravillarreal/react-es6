import React ,{Component} from 'react';
import ReactDOM from 'react-dom';

import text from './data/values.json';
import './stylesheets/hello.scss';
 
class App extends Component {
    render(){
        return(
            <div>
                <h1 className='hello'>{text.message}</h1>
            </div>
        );
    }
}


class App2 extends Component {
    render(){
        return(
            <div>
                <h1 className='hello'>{text.message}</h1>
            </div>
        );
    }
}
 
ReactDOM.render(<App />,document.getElementById('root'));
