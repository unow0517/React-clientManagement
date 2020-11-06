import React from 'react';
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContent from '@material-ui/core/DialogContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Button'
class CustomerDelete extends React.Component{
    constructor(props){
        super(props);
        this.state={
            open: false
        }
    }

    handleClickOpen = () =>{
        this.setState({
            open: true
        })
    }

    handleClose = () => {
        this.setState({
            open: false
        })
    }
    deleteCustomer(id){
        const url = '/api/customers/'+ id;
        fetch(url, {
            method: 'DELETE'
        });
        this.props.stateRefresh();
    }

    render(){
        return (
            <div>
                <Button 
                    onClick={(e)=>{this.deleteCustomer(this.props.id)}}
                    color='secondary'
                    variant='contained'
                    onClick={this.handleClickOpen}
                >Delete</Button>
                <Dialog open={this.state.open} onClose={this.handleClose}>
                    <DialogTitle onClose={this.handleClose}>
                        Delete Warning
                    </DialogTitle>
                    <DialogContent>
                        <Typography gutterBottom>
                            Selected clicent information will be deleted
                        </Typography>
                    </DialogContent>
                    <DialogActions>
                        <Button variant='contained' color='primary'
                            onClick={(e)=> {this.deleteCustomer(this.props.id)}}>
                            Delelte</Button>
                        <Button variant='contained' color='primary'
                        onClick={this.handleClose}>
                        Delelte</Button>
                    </DialogActions>
                </Dialog>
            </div>
        )
    }
}

export default CustomerDelete;