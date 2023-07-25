import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import BlacklistDropdown from './views/blacklist-dropdown'
import Homepage from './views/homepage'
import FavoriteRecipes2 from './views/favorite-recipes-2'
import ProfileCreation1 from './views/profile-creation-1'
import SavedPlansPreviewPopUp from './views/saved-plans-preview-pop-up'
import SignIn1 from './views/sign-in1'
import SignIn from './views/sign-in'
import SavedPlan from './views/saved-plan'
import Blacklist from './views/blacklist'
import ProfileSettings from './views/profile-settings'
import ProfileCreation2 from './views/profile-creation-2'
import SignIn2 from './views/sign-in-2'
import FavoriteRecipes from './views/favorite-recipes'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={BlacklistDropdown} exact path="/blacklist-dropdown" />
        <Route component={Homepage} exact path="/homepage" />
        <Route component={FavoriteRecipes2} exact path="/favorite-recipes-2" />
        <Route component={ProfileCreation1} exact path="/profile-creation-1" />
        <Route
          component={SavedPlansPreviewPopUp}
          exact
          path="/saved-plans-preview-pop-up"
        />
        <Route component={SignIn1} exact path="/sign-in1" />
        <Route component={SignIn} exact path="/" />
        <Route component={SavedPlan} exact path="/saved-plan" />
        <Route component={Blacklist} exact path="/blacklist" />
        <Route component={ProfileSettings} exact path="/profile-settings" />
        <Route component={ProfileCreation2} exact path="/profile-creation-2" />
        <Route component={SignIn2} exact path="/sign-in-2" />
        <Route component={FavoriteRecipes} exact path="/favorite-recipes" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
