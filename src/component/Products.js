import React from 'react';

import { Typography, Grid, Card, CardHeader, CardContent, CardActions, IconButton, Tabs } from '@material-ui/core';
import { connect } from 'react-redux';
import { inactive, active } from '../store/categories';
import { getProducts } from '../store/products';
import { addToCart } from '../store/cart.js';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';


//....................................................................

const AntTabs = withStyles({
  root: {
    borderBottom: '1px solid #e8e8e8',
  },
  indicator: {
    backgroundColor: '#1890ff',
  },
})(Tabs);

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  padding: {
    padding: theme.spacing(3),
  },
  demo1: {
    backgroundColor: theme.palette.background.paper,
  }
}));
//.......................................................................

const ProductViewer = (props) => {
  const classes = useStyles();


  return (

    <>
      <div className={classes.root}>
        <div className={classes.demo1}>
          <Typography variant="h6" component="h6" style={{ textAlign: "center", marginTop: "20px" }}>All you want in one place</Typography>
          <AntTabs>
          </AntTabs>
        </div>
      </div>
      <h2 style={{ textAlign: "center", fontSize: '3rem' }}>{props.categories.activeCategory}</h2>
      <p style={{ textAlign: "center", marginBottom: "2rem" }}>{props.categories.activeDescription}</p>
      <Grid container justify="center" spacing={4} style={{ width: '100%' }}>
        {props.products.products.map((product, index) => {
          return (
            <Grid item key={index}>
              <Card style={{ width: '25rem', height: '35rem' }}>
                <img src={product.image} style={{ width: '25rem', height: '20rem' }} alt="img"/>
                <CardHeader title={product.title} />
                <CardContent>
                  <Typography component="inStock">  {product.quantity > 0
                    ? `Quantity, ${product.quantity} items` : 'Out of Stock'}</Typography>

                  <br />
                  <Typography component="price">Price:  ${product.price}</Typography>
                </CardContent>
                <CardActions>
                  <IconButton style={{ fontSize: '1.2rem', color: '#586a89' }} onClick={() => props.addToCart(product)} disabled={product.quantity > 0 ? false : true}>Add to cart</IconButton>
                  <IconButton component={Link} to={`/details/${product.product_id}`} style={{ fontSize: '1.2rem', color: '#586a89' }}>View details</IconButton>
                </CardActions>
              </Card>
            </Grid>
          )
        })}
      </Grid>
    </>
  );
}

const mapStateToProps = (state) => {
  return { products: state.products, categories: state.categories, cart: state.cart }
}

const mapDispatchToProps = {
  active,
  inactive,
  getProducts,
  addToCart,
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductViewer);