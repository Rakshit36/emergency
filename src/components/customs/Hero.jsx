import React from 'react';
import { Button } from '../ui/button';
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <div className="bg-white min-h-screen w-full flex flex-col justify-center items-center">
      <div className="flex flex-col items-center mx-56 gap-9">
        <h1 className="text-[50px] font-extrabold mb-0 text-center">
          <span className="text-black">
            Discover Your Next Adventure with AI <br />
          </span></h1>
         <h2 className='text-black text-[50px] font-extrabold mb-5 mt-0 pt-0 text-center'>Personalized Itineraries at Your Fingertips</h2>
       

        <p className="text-xl text-black text-center">
          Your personal trip planner and travel curator, creating custom itineraries to your interests and budget.
        </p>

        <Link to={'/create-trip'}>
          <Button className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg">
            Get Started, It's Free
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default Hero;
