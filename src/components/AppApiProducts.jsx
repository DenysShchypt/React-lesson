import React, { Component } from 'react';
import axios from 'axios';
import { ListOfProduct } from './AppApiProducts.styled';
import { Product } from './index.js';
// {
//     id:1,
//     title:'...',
//     price:'...',
//     category:'...',
//     description:'...',
//     image:'...'
// },
export default class AppApiProducts extends Component {
  state = {
    products: null,
    loading: false,
  };
  fetchGet = async () => {
    try {
      this.setState({ loading: true });
      const { data } = await axios.get('https://fakestoreapi.com/products');
      this.setState({ products: data });
    } catch (error) {
      this.setState({ error: error.message });
    } finally {
      this.setState({ loading: false });
    }
  };
  componentDidMount() {
    this.fetchGet();
  }
  render() {
    return (
      <ListOfProduct>
        <ul className="allList">
          {this.state.products !== null &&
            this.state.products.map(product => {
              return (
                <Product
                  key={product.id}
                  title={product.title}
                  price={product.price}
                  category={product.category}
                  description={product.description}
                  image={product.image}
                  handleRemoveProduct={this.handleRemoveProduct}
                  openModal={this.openModal}
                />
              );
            })}
        </ul>
      </ListOfProduct>
    );
  }
}
