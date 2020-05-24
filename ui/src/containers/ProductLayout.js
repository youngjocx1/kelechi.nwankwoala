import { EnhancedTableToolbar } from '../components/Table'
import * as productDuck from '../ducks/products'
import Avatar from '@material-ui/core/Avatar'
import Checkbox from '@material-ui/core/Checkbox'
import Divider from '@material-ui/core/Divider'
import Grid from '@material-ui/core/Grid'
import ImageIcon from '@material-ui/icons/Image'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  medium: {
    width: theme.spacing(4),
    height: theme.spacing(4),
  }
}))

const ProductLayout = (props) => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const products = useSelector(state => state.products.all)
  const isFetched = useSelector(state => state.products.fetched)
  useEffect(() => {
    if (!isFetched) {
      dispatch(productDuck.findProducts())
    }
  }, [dispatch, isFetched])

  const [checked, setChecked] = React.useState([])
  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value)
    const newChecked = [...checked]

    if (currentIndex === -1) {
      newChecked.push(value)
    } else {
      newChecked.splice(currentIndex, 1)
    }
    setChecked(newChecked)
  }
  return (
    <Grid container>
      <Grid item xs={12}>
        <Paper>
          <EnhancedTableToolbar numSelected={checked.length} title='Products'/>
          <List dense disablePadding className={classes.root}>
            {products.map((value, index) =>
              <React.Fragment key={index}>
                <Divider/>
                <ListItem button onClick={handleToggle(index)}>
                  <ListItemIcon>
                    <Checkbox
                      onChange={handleToggle(index)}
                      checked={checked.indexOf(index) !== -1}
                    />
                  </ListItemIcon>
                  <ListItemAvatar>
                    <Avatar className={classes.medium}>
                      <ImageIcon/>
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary={value.name}/>
                </ListItem>
              </React.Fragment>
            )}
          </List>
        </Paper>
      </Grid>
    </Grid>
  )
}

export default ProductLayout
