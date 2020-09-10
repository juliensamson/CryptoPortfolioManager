import React from 'react';
import { render } from '@testing-library/react';

class Transaction extends React.Component {
    render() {
        return (
            <h1>Transactions {this.props.name}</h1>
        )
    }
}

export default Transaction;
