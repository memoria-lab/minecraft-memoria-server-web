import Index from 'components/pages/Index'
import PAGE_PATH from 'constants/pagePath'
import React from 'react'
import { Route, Switch } from 'react-router-dom'
import tracking from 'utils/tracking'

const App: React.FC = () => {
  tracking()

  return (
    <React.Fragment>
      <Switch>
        <Route path={PAGE_PATH.INDEX} exact>
          <Index />
        </Route>
        <Route path="">404</Route>
      </Switch>
    </React.Fragment>
  )
}

export default App
