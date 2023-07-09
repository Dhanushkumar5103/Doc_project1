import React from 'react';
import '../App.css';

const Navbar = () => {
return (
	<div className='navbar'>
		<div className='title'>Health Track</div>
		<div className='space-between'>
			<div className="container1">
				<a href="/home" className='element'>Home</a>
				<a href="/appointment" className='element' >My Appointment</a>
				<a href="/feed" className='element'>Doctor List</a>
				<a href="/location" className='element' >Specialist </a>
			</div>
			<a href="/" className='btn'>
				Logout
			</a>
		</div>
		
	</div>

);
};

export default Navbar;

