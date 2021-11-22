import React from 'react';
// import Login from './Login';
// import Signup from './Signup';
import { Link } from 'react-router-dom';

const Home = () => (
    <div>
        <h3>WELCOME TO FESTIVITES!</h3><h5>PLEASE <Link to='/signup'>SIGN UP</Link> OR <Link to='/login'>LOG IN</Link></h5>

        </div>
);

export default Home;