import ArrowForwardIcon from '@material-ui/icons/ArrowForward'
import Divider from '@material-ui/core/Divider'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import React from 'react'
import Typography from '@material-ui/core/Typography'

const WelcomeLayout = (props) =>
  <React.Fragment>
    <Typography variant='h4'>
      Welcome to the Exerceo Starter App!
    </Typography>
    <Divider />
    <Typography variant='h6'>
      In order to be successful in the Javascript world, we have adopted several best practices and picked
      specific libraries based on our lessons learned.
    </Typography>
    <Typography variant='h6'>
      The following is not an exhaustive list, but it covers
      the vast majority:
    </Typography>
    <List>
      <ListItem>
        <ListItemIcon><ArrowForwardIcon /></ListItemIcon>
        <Typography>EcmaScript 2016 (ES6) Syntax Tutorials</Typography>
      </ListItem>
      <ListItem>
        <List>
          <ListItem>
            <Typography>
              https://www.youtube.com/playlist?list=PLoYCgNOIyGACDQLaThEEKBAlgs4OIUGif
            </Typography>
          </ListItem>
        </List>
      </ListItem>
      <ListItem>
        <ListItemIcon><ArrowForwardIcon /></ListItemIcon>
        <Typography>React and Redux (Flux)</Typography>
      </ListItem>
      <ListItem classes={{ paddingLeft: '100px' }}>
        <List>
          <ListItem>
            <Typography>
              React Documentation: https://reactjs.org/docs/getting-started.html 
            </Typography>
          </ListItem>
          <ListItem>
            <Typography>
              Flux Architecture: https://facebook.github.io/flux/docs/in-depth-overview 
            </Typography>
          </ListItem>
          <ListItem>
            <Typography>
              Redux Documentation: https://redux.js.org/introduction/getting-started 
            </Typography>
          </ListItem>
          <ListItem>
            <Typography>
              React/Redux Tutorials: https://www.youtube.com/playlist?list=PLoYCgNOIyGABj2GQSlDRjgvXtqfDxKm5b
            </Typography>
          </ListItem>
          <ListItem>
            <Typography>
              Material-UI: https://material-ui.com/ 
            </Typography>
          </ListItem>
        </List>
      </ListItem>
      <ListItem>
        <ListItemIcon><ArrowForwardIcon /></ListItemIcon>
        <Typography>Smart Containers vs Dumb Components</Typography>
      </ListItem>
      <ListItem>
        <List>
          <ListItem>
            <Typography>
              https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0 
            </Typography>
          </ListItem>
        </List>
      </ListItem>
      <ListItem>
        <ListItemIcon><ArrowForwardIcon /></ListItemIcon>
        <Typography>Ducks Architecture (Redux implementation best practice)</Typography>
      </ListItem>
      <ListItem>
        <List>
          <ListItem>
            <Typography>
              https://github.com/erikras/ducks-modular-redux 
            </Typography>
          </ListItem>
        </List>
      </ListItem>
      <ListItem>
        <ListItemIcon><ArrowForwardIcon /></ListItemIcon>
        <Typography>Flux Standard Actions</Typography>
      </ListItem>
      <ListItem>
        <List>
          <ListItem>
            <Typography>
              https://github.com/acdlite/flux-standard-action 
            </Typography>
          </ListItem>
        </List>
      </ListItem>
      <ListItem>
        <ListItemIcon><ArrowForwardIcon /></ListItemIcon>
        <Typography>Redux Ecosystem</Typography>
      </ListItem>
      <ListItem classes={{ paddingLeft: '100px' }}>
        <List>
          <ListItem>
            <Typography>
              https://redux.js.org/introduction/ecosystem 
            </Typography>
          </ListItem>
          <ListItem>
            <Typography>
              React-Redux: https://github.com/reduxjs/react-redux 
            </Typography>
          </ListItem>
          <ListItem>
            <Typography>
              Redux actions: https://github.com/reduxactions/redux-actions 
            </Typography>
          </ListItem>
          <ListItem>
            <Typography>
              Reselect: https://github.com/reduxjs/reselect 
            </Typography>
          </ListItem>
          <ListItem>
            <Typography>
              Thunk: https://github.com/gaearon/redux-thunk NOTE: We have constructed our own thunk
              middleware utilizing Flux Standard Actions (FSA).
            </Typography>
          </ListItem>
          <ListItem>
            <Typography>
              Redux-promise-middleware: https://github.com/pburtchaell/redux-promise-middleware
            </Typography>
          </ListItem>
          <ListItem>
            <Typography>
              Redux-logger: https://github.com/evgenyrodionov/redux-logger
            </Typography>
          </ListItem>
          <ListItem>
            <Typography>
              Connected-react-router: https://github.com/supasate/connected-react-router
            </Typography>
          </ListItem>
          <ListItem>
            <Typography>
              Redux-form: https://github.com/erikras/redux-form
            </Typography>
          </ListItem>
        </List>
      </ListItem>
    </List>
  </React.Fragment>

export default WelcomeLayout
