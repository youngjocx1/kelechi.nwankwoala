import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import { Form } from 'redux-form'
import Grid from '@material-ui/core/Grid'
import React from 'react'
import { reduxForm } from 'redux-form'
import TextField from '@material-ui/core/TextField'
import { withStyles } from '@material-ui/core/styles'

const styles = (theme) => {
  return {
    gridItem: {
      padding: theme.spacing(1),
      textAlign: 'center',
    }
  }
}

/**
 * Assume the following properties are present and loaded from parent component:
 * this.props.handleDialog -- how to handle the dialog on close.
 * this.props.isDialogOpen -- how to know when this dialog gets fired.
 * this.props.title -- the title to display, either edit or new depending on the parents state.
 */
class ProductFormModal extends React.Component {
  render() {
    const { classes, id, title } = this.props
    return (
      <Form
        noValidate
        autoComplete='off'
        id={id}
        onSubmit={this.props.handleSubmit((val) => {
          this.props.saveProduct(val)
          this.props.handleDialog(true)
        })}>
        <Dialog
          open={this.props.isDialogOpen}
          maxWidth='md'
          fullWidth={true}
          onClose={() => { this.props.handleDialog(false) }}
        >
          <DialogTitle id='alert-dialog-title'>
            {`${title} Product`}
          </DialogTitle>
          <DialogContent>
            <Grid container>
              <Grid item xs={12} sm={12} className={classes.gridItem}>
                <TextField
                  id='name'
                  label='Name'
                />
              </Grid>
            </Grid>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => { this.props.handleDialog(false) }} color='secondary'>Cancel</Button>
            <Button
              variant='contained'
              type='submit'
              form='productForm'
              color='secondary'
              disabled={this.props.pristine}>
                Save
            </Button>
          </DialogActions>
        </Dialog>
      </Form>
    )
  }
}

export default reduxForm({
  form: 'productForm'
})(withStyles(styles)(ProductFormModal))
