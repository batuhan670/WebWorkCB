import * as React from 'react';
import { Html } from '@react-email/html';
import { Button } from '@react-email/button';

class EmailContent extends React.Component {

    render() {    
    return (
        <Html lang="en">
        <Button href={this.url}>{this.text}</Button>
        </Html>
    );
    }
}

export default EmailContent;