import React from 'react';
import Greeting from '../components/Greeting';
import Recipes from '../components/Recipes';

function LandingPage () {
  return (
    <div>
        <Greeting />
        <Recipes />
    </div>
  )
}

export default LandingPage