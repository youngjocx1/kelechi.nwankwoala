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
import ProductDeleteModal from '../components/Products/ProductFormModal'
import ProductFormModal from '../components/Products/ProductFormModal'
import React, { useEffect } from 'react'
import { connect, useDispatch, useSelector } from 'react-redux'

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
  useEffect(() => {
    if (!props.isFetched) {
      dispatch(productDuck.findProducts())
    }
  }, [dispatch, props.isFetched])

  const [isCreateOpen, setCreateOpen] = React.useState(false)
  const [isEditOpen, setEditOpen] = React.useState(false)
  const [isDeleteOpen, setDeleteOpen] = React.useState(true)
  const toggleCreate = () => {
    setCreateOpen(true)
  }
  const toggleEdit = () => {
    setEditOpen(true)
  }
  const toggleDelete = () => {
    setDeleteOpen(true)
  }
  const toggleModals = () => {
    setCreateOpen(false)
    setDeleteOpen(false)
    setEditOpen(false)
  }
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
          <ProductFormModal
            title='Create'
            id='productCreate'
            isDialogOpen={isCreateOpen}
            handleDialog={toggleModals}
            handleSubmit={props.saveProduct}
          />
          <ProductFormModal
            title='Edit'
            id='productEdit'
            isDialogOpen={isEditOpen}
            handleSubmit={props.saveProduct}
          />
          <ProductDeleteModal
            id='productDelete'
            isDialogOpen={isDeleteOpen}
            handleSubmit={props.removeProduct}
          />
          <EnhancedTableToolbar
            numSelected={checked.length}
            title='Products'
            toggleCreate={toggleCreate}
            toggleDelete={toggleDelete}
            toggleEdit={toggleEdit}
          />
          <List dense disablePadding className={classes.root}>
            {props.products.map((value, index) =>
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

export default connect(
  (state) => {
    return {
      isFetched: useSelector(state => state.products.fetched),
      products: useSelector(state => state.products.all)
    }
  },
  (dispatch, props) => {
    return {
      removeProduct: (id) => {
        dispatch(productDuck.removeProducts(id))
      },
      saveProduct: (product) => {
        dispatch(productDuck.saveProducts(product))
      }
    }
  }
)(ProductLayout)
