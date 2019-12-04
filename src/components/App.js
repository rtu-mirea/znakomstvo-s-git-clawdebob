import React, { Component } from "react";

import '../styles/App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            parsedText: null,
        };
        this.parseHandler = this.parseHandler.bind(this);
    }

    parseHandler() {
        const reg = /(https?:\/\/(?:www\.)?\w+\.\w+\/?[\w\/\-_#]*)/gmi;
        const input = document.getElementById('text-area');
        const text = input.value;
        const parsedText = text.replace(reg, '<a href=" $1 ">$1</a>');

        this.setState({parsedText: parsedText});
    }

    render() {
        return (
            <div>
                <h1>Вариант 12</h1>
                <div className="app-container">
                    <div className="text-area__container">
                        <h2>Enter text here:</h2>
                        <textarea id="text-area"/>
                    </div>
                    <div className="parse-button__container">
                        <button className="parse-button" onClick={this.parseHandler}>Parse</button>
                    </div>
                    <div className="result__container">
                        <h2>Result:</h2>
                        <p className="result">{this.state.parsedText}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
