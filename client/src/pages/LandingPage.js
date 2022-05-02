import React from 'react';
import Greeting from '../components/Greeting';
import Recipes from '../components/Recipes';

function LandingPage ({ user }) {
  return (
    <div>
        <Greeting user={user}/>
        <Recipes user={user} />
    </div>
  )
}

export default LandingPage