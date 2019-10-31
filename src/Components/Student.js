import React, { Component } from 'react';
import './Student.css';
import { Button, Collapse } from 'react-bootstrap';

class student extends Component {
    constructor(props) {
        super(props);

        this.state = {
            open: false
        }
    }

    toggle = () => {
        this.setState({ open: !open });
    }

    render() {
        return (
            <div id={this.props.item.id}>
                <img src={this.props.item.pic} alt={this.props.item.pic}></img>
                <h1>{this.props.item.firstName + ' ' + this.props.item.lastName}</h1>
                <Button className="btn" onClick={this.toggle()}>
                    Collapse Div
                </Button>

                <p>Email: {this.props.item.email}</p>
                <p>Company: {this.props.item.company} </p>
                <p>Skill: {this.props.item.skill}</p>
                <p>Avarage: {this.props.item.grades.reduce((prev, curr) => (prev + curr) / this.props.item.grades.length)}%</p>
                <Collapse in={false}>
                    <div>
                        <ul>
                            {this.props.item.grades.map((grade, i) => <li>test{i + 1}:   {grade}%</li>)}
                        </ul>
                    </div>
                </Collapse>
            </div >
        );

    }
}
export default student;