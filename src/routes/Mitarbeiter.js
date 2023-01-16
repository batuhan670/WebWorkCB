import React from 'react'
import Navbar from "../components/Navbar";

import Footer from "../components/Footer";
import HeroImg2 from '../components/HeroImg2';
import Worker from '../components/Worker';
import ScrollButton from "../components/ScrollButton";
import "./Mitarbeiter.css"


class Mitarbeiter extends React.Component {
  constructor(props) {
    super(props)
    this.state = { users: { data: [] } };
  }

  componentDidMount() {
    fetch('https://reqres.in/api/users')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        this.setState({ users: data });
      })
      .catch((err) => {
        console.log(err.message);
      });



  }

  componentWillUnmount() {

  }

  render() {
    return (
      <div>
        <Navbar />
        <HeroImg2 heading="Mitarbeiter" text="ergfadsrg" />
        <div className='flexWorker'>
          {this.state.users.data.map((val, ind) => {
            return (
              <Worker
                key={ind}
                email={val.email}
                first_name={val.first_name}
                last_name={val.last_name}
                avatar={val.avatar}
              />
            )
          })}

        </div>
        <Footer />
        <ScrollButton />
      </div>
    )
  }
}
export default Mitarbeiter