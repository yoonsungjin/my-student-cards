import React, { Component } from 'react';
import InputTag from './InputTag';

class student extends Component {
    constructor(props) {
        super(props);

        this.state = {
            show: false,
            tag: []
        }
    }

    onClick = e => {
        this.setState({
            show: !this.state.show
        });
    };

    render() {
        return (
            <div id={this.props.item.id} className="studentContainer">
                <img src={this.props.item.pic} alt={this.props.item.pic}></img>
                <h1>{this.props.item.firstName + ' ' + this.props.item.lastName}</h1>
                <button className="expand-btn" onClick={this.onClick} >
                    +
                </button>

                <p>Email: {this.props.item.email}</p>
                <p>Company: {this.props.item.company} </p>
                <p>Skill: {this.props.item.skill}</p>
                <p>Avarage: {this.props.item.grades.reduce((avg, e, i, arr) => avg + e / this.props.item.grades.length, 0)}%</p>
                <div style={{ display: this.state.show ? "block" : "none" }}>
                    <ul>
                        {this.props.item.grades.map((grade, i) => <li>test{i + 1}:   {grade}%</li>)}
                    </ul>
                    <InputTag />
                </div>
            </div >
        );

    }
}
export default student;