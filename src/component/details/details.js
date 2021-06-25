import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Typography, Grid, Card, CardHeader, CardContent, CardActions, IconButton } from '@material-ui/core';
import { getProducts } from '../../store/products.js'
import { addToCart } from '../../store/cart.js';
// import { loadProducts } from '../../store/products.js';
import { connect } from 'react-redux';

const Details = props => {
    let products = useSelector(state => state.products);
    console.log(products)
    const { id } = useParams();
    console.log(id);

    let filtered = products.products.filter((item) => item.product_id === id);
    console.log(filtered);


    return (
        <>
            {filtered.map((product, i) => {
                return (
                    <Grid item key={i}>
                        <Card>
                            <CardActions>
                                <img alt="ggg" src={product.image} style={{ width: '25rem', height: '20rem' }} />
                                <CardHeader title={product.title} />
                                <CardContent>
                                    <Typography component="price">{product.description}</Typography>
                                    <br />
                                    <br />
                                    <Typography component="price"> Price: ${product.price}</Typography>
                                </CardContent>
                                <IconButton onClick={() => props.addToCart(product)}>
                                    Add +
                                </IconButton>
                            </CardActions>
                        </Card>
                    </Grid>
                )
            })}
        </>
    );
}

const mapStateToProps = state => {
    return {
        products: state.products,
        activeCategory: state.categories.activeCategory,
        activeDescription: state.categories.activeDescription
    }
}

const mapDispatchToProps = {
    getProducts,
    addToCart,
}

export default connect(mapStateToProps, mapDispatchToProps)(Details);