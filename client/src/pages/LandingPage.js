import React from 'react';
import Greeting from '../components/Greeting';
import LPRecipes from '../components/LPRecipes';

function LandingPage ({ user }) {
  return (
    <div>
        <Greeting user={user}/>
        <LPRecipes user={user} />
    </div>
  )
}

export default LandingPage