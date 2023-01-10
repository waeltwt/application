import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import '../../App.css';


const Home = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Booking Home</h3>

          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
            src="https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Booking Home</h3>

          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.pexels.com/photos/324629/pexels-photo-324629.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Booking Home</h3>

          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <div className="texthome" >
        <br />Our mission is to implement a web application for our TravelTN travel agency, specializing in
        rental of holiday homes allowing access to a database of house varieties located in the different Tunisian regions to better serve its customers.
        Our rental agency plans to expand its rental offerings to new regions in the future.
        <br />
        <ul>
          <li>The rental season lasts all year.</li>
          <li>The owner remains fixed throughout the season</li>
          <li>The houses are rented by the week (week 01, week 02, ..., week 52)</li>
          <li>For each reservation, you must select the information on the
            house, client and week number.</li>
          <li>If a customer rents a house over several consecutive weeks, the rental must be split into several reservations (one per week).</li>
          <li>For the moment, our site does not manage invoices, payment deadlines.</li>
        </ul>
      </div>
    </div>

  );
};

export default Home;