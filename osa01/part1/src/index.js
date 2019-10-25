import React from 'react';
import ReactDOM from 'react-dom';

const Hello = (props) => {
    return (
        <div>
            <p>Hello {props.name}, you are {props.age} years old!</p>
        </div>
    )
}



const App = () => {

    const nimi = 'Pekka'
    const age = 10

    return (
        <>
            <h1>Some facts about people</h1>
            <Hello name = "Esa" age = {13 + 44}/>
            <Hello name = {nimi} age = {age}/>
        </>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));
