import React from 'react';

export class Todo extends React.Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <h2>{this.props.text} </h2>
                <h2>{this.props.priority} </h2>
                <h2>{this.props.dueDate.toString()} </h2>
            </>
        );
    }
}
