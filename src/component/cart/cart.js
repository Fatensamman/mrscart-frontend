import React from 'react';
import { connect } from 'react-redux';
import { removeFromCart, addToCart, } from '../../store/cart.js';
import { Typography, Card, CardHeader, CardContent, CardActions, IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';



const Cart = props => {
    // const cart = useSelector(state => state.cart.cart);
    props.products.total = 0


    return (
        <>
            <Card>
                <CardContent>
                    {props.cart.cart.map((product, i) => {
                        return (
                            <>
                                <Card>
                                    <CardActions>
                                        <img alt='gggg' src={product.image} style={{ width: '10rem', height: '10rem' }} />
                                        <CardHeader title={product.title} />
                                        <CardContent>
                                            <Typography component="description">{product.description}</Typography>
                                            <br />
                                            <br />
                                            <Typography component="price"> Price: ${product.price}  / Quantity: ({product.Count - product.quantity})  / Total Price: ${(product.Count - product.quantity) * product.price}
                                            </Typography>
                                        </CardContent>
                                        <IconButton onClick={() => props.addToCart(product)}>
                                            +
                                        </IconButton>
                                        <IconButton onClick={() => props.removeFromCart(product)}>
                                            < DeleteIcon style={{ float: 'right' }} />
                                        </IconButton>
                                    </CardActions>
                                    <Typography style={{ display: 'none' }}> {props.products.total = props.products.total + (product.Count - product.quantity) * product.price}
                                    </Typography>
                                </Card>
                            </>
                        );
                    })}
                </CardContent>
                <Typography style={{ float: 'right', marginRight: '20px', marginBottom: '50px' }} > Total : ${props.products.total}</Typography>
            </Card>
        </>
    );
}

const mapStateToProps = state => {
    return {
        cart: state.cart,
        products: state.products,
    }
}

const mapDispatchToProps = {
    removeFromCart,
    addToCart,
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)