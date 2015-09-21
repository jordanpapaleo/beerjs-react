import './Hello.css';
import React, { PropTypes } from 'react';
import DateService from '../DateService';
import MoodService from '../MoodService';

const Hello = React.createClass({
    propTypes: {
        // optional: Sets the data type of a property
        name: PropTypes.string
    },
    getDefaultProps() {
        // optional: sets a default property value
        return {
            name: 'World'
        };
    },
    getInitialState() {
        //optional: allows for the state to be set pre render
        return {
            mood: '',
            time: ''
        };
    },
    componentDidMount() {
        this.interval = setInterval(this.tick, 1000);
    },
    componentWillUnmount() {
        clearInterval(this.interval);
    },
    tick() {
        this.setState({
            time: DateService.getTime()
        });
    },
    getMood() {
        this.setState({
            mood: MoodService.getMood()
        });
    },
    render() {
        // REQUIRED: the render function for this component
        return (
            <div>
                <h1 className='hello'>Hello {this.props.name}!</h1>
                <h3>Today's date is {DateService.getDate()}</h3>
                <h4>The current time is {this.state.time}</h4>
                <button onClick={this.getMood}>Get your mood</button>
                {(this.state.mood) ? <p>You are {this.state.mood}</p> : ''}
            </div>
        );
    }
});

export default Hello;
