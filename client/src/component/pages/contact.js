import React from "react";
import './contact.css'
const Contact = () => {
	return (
		<div className="bb">
			<div class="hero">
				<div class="content">
					<h4>Hello, my name is</h4>
					<h1>Touati <span>Wael</span></h1>
					<h3>I'am a Web Developer.</h3>
				</div>
			</div>

			<div className="vv">
				<h1>My<span> Contact</span></h1>
				<h3>
					phone:24143353
					<br />email:waeltouati09@gmail.com</h3>
			</div>
			<div className="vv">
				<h3>
					<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1617.196598467951!2d10.595821957588488!3d35.83936101088737!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd8a5fd9eefa65%3A0xf4ab2882dc7fad43!2sQnb!5e0!3m2!1sfr!2stn!4v1662563615849!5m2!1sfr!2stn" width="600" height="450" allowfullscreen="" loading="lazy" title="map" referrerpolicy="no-referrer-when-downgrade"></iframe>
				</h3>
			</div>
		</div>
	);
};

export default Contact;