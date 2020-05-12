import React from 'react';

class Customr extends React.Component {
    render() {
        return (
            <div>
            <h2>{this.props.name}</h2>
            <p>{this.props.birthday}</p>
            <p>{this.props.gneder}</p>
            <p>{this.props.job}</p>
        </div>
        )
        
    }
}

export default Customr;