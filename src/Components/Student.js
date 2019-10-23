import React from 'react';

const student = (props) => {
    return (
        <div id={props.item.id}>
            <img src={props.item.pic} alt={props.item.pic}></img>
            <h1>{props.item.firstName + ' ' + props.item.lastName}</h1>
            <p>Email: {props.item.email}</p>
            <p>Company: {props.item.company} </p>
            <p>Skill: {props.item.skill}</p>
            <p>Avarage: {props.item.grades.reduce((prev, curr) => (prev + curr) / props.item.grades.length)}%</p>
        </div>
    )
}

export default student;