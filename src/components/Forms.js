import React from 'react'
import { render } from '@react-email/render';
import AWS from 'aws-sdk';
import EmailContent from './EmailContent.js';
import "./FormStyles.css"





class Forms extends React.Component {
  constructor(props) {
    super(props);
    this.sendEmail = this.sendEmail.bind(this);
    this.input = React.createRef();
  }

  async sendEmail(event) {
    alert('A name was submitted: ' + this.input.current.value);

    AWS.config.update({region: 'eu-central-1'
  });  
    const emailHtml = render(<EmailContent text={this.input.current.value} url="https://example.com" />);
  
    const options = {
      Source: 'Web.Work@outlook.at',
      Destination: {
        ToAddresses: ['batuhandanisment@hotmail.com'],
      },
      Message: {
        Body: {
          Html: {
            Charset: 'UTF-8',
            Data: emailHtml,
          },
        },
        Subject: {
          Charset: 'UTF-8',
          Data: 'hello world',
        },
      },
    };
  
    const sendPromise = new AWS.SES({ apiVersion: '2010-12-01' })
      .sendEmail(options)
      .promise();
    const result = await sendPromise;
    console.log(result);


    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.sendEmail}>
        <label>
          Name:
          <input type="text" ref={this.input} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}



export default Forms