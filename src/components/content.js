import React, { Component } from 'react';

class Content extends Component {
    render() {
        const data = this.props.data;
        return (
            <p>
                Ladies and gentlemen, this is <b>{data.color}</b> Barber, your
            </p>
        )
    }
}

export default Content;