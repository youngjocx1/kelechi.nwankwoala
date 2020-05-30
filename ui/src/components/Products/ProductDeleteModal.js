import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import Grid from '@material-ui/core/Grid'
import React from 'react'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'
import { Form, reduxForm } from 'redux-form'

const styles = (theme) => {
  return {
    gridItem: {
      padding: theme.spacing(1),
    },
  }
}

/*
 * Assume the following properties are present and loaded from parent component:
 *
 * this.props.delete -- the function called to delete the associated form/values.
 * this.props.handleDialog -- how to handle the dialog on close.
 * this.props.handleSubmit -- how to handle the submission.
 * this.props.isDialogOpen -- how to know when this dialog is or isn't open.
 */
class ProductDeleteModal extends React.Component {
  render() {
    const { handleDialog, handleSubmit, id, isDialogOpen } = this.props
    return (
      <Form
        autoComplete='off'
        id={id}
        onSubmit={handleSubmit((val) => {
          this.props.delete(val)
          handleDialog()
        })}>
        <Dialog
          open={isDialogOpen}
          onClose={() => { handleDialog() }}
        >
          <DialogTitle id='alert-dialog-title'>Delete Product</DialogTitle>
          <DialogContent>
            <Grid container>
              <Grid item xs={12}>
                <Typography>
                  Are you sure you want to delete this product?
                </Typography>
              </Grid>
            </Grid>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => { handleDialog(false) }} color='secondary'>No</Button>
            <Button variant='contained' type='submit' form='deleteProduct' color='secondary'>Yes</Button>
          </DialogActions>
        </Dialog>
      </Form>
    )
  }
}

DeleteFormModal.defaultProps = {
  delete: {}
}

export default reduxForm({
  form: 'deleteProduct',
})(withStyles(styles)(ProductDeleteModal))
