import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar ,Button} from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';


const useStyles = makeStyles(() => ({
  button:
  {
    color: 'white',
    fontSize: "1em",
  },

  title: {
    flexGrow: 1,
    color: 'white',
    fontSize: "2em",
  },

  navBar:
  {
    background: '#586a89',
  },
})
);

function Header(props) {
  const classes = useStyles();
  return (
    <AppBar position="static" className={classes.navBar}>
      <Toolbar>
        <NavLink to="/" variant="h6" className={classes.title} style={{ textDecoration: 'none' }}> Mrs.Cart </NavLink>
        <Button  className={classes.button} color="inherit" >
        <NavLink activeClassName="selected" to="/cart" className='MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-colorInherit' >
        <ShoppingCartIcon/>({props.cart.cartNo.length})
          </NavLink>
        </Button>
      </Toolbar>
    </AppBar>
  )
}

const mapStateToProps = state => {
  return {
    cart: state.cart
  }
}

export default connect(mapStateToProps)(Header);