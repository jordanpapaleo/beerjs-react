import './HelloES6.css';
import React, { PropTypes } from 'react';
import DateService from '../DateService';
import MoodService from '../MoodService';

class HelloES6 extends React.Component {
    // optional: Sets the data type of a property
    static get propTypes() {
        return {
            name: PropTypes.string
        };
    }

    // optional: sets a default property value
    static get defaultProps() {
        return {
            name: 'World'
        };
    }

    constructor(props) {
        super(props);

        this.state = {
            mood: '',
            time: ''
        };

        //this.tick = this.tick.bind(this);
        //this.getMood = this.getMood.bind(this);
    }

    /*componentDidMount() {
        this.interval = setInterval(this.tick, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }*/

    /*tick() {
        this.setState({
            time: DateService.getTime()
        });
    }

    getMood() {
        this.setState({
            mood: MoodService.getMood()
        });
    }*/

    // REQUIRED: the render function for this component
    /*render () {
        return (
            <div>
                <h1 className='hello'>Hello {this.props.name}!</h1>
                <h3>Today's date is {DateService.getDate()}</h3>
                <h4>The current time is {this.state.time}</h4>
                <button onClick={this.getMood}>Get your mood</button>
                {(this.state.mood) ? <p>You are {this.state.mood}</p> : ''}
            </div>
        );
    }*/

    render() {
        return(
            <div>Hello</div>
        );
    }
}
