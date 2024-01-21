import { Component } from 'react';
import css from './App.module.css';
import { Product } from './Product/Product';
import { Section } from './Section/Section';

const productsData = [
  {
    id: '3',
    title: 'Tacos With Lime M',
    price: 5.85,
    discount: 15,
  },
  {
    id: '1',
    title: 'Tacos With Lime XXL',
    price: 10.99,
    discount: 30,
  },
  {
    id: '2',
    title: 'Tacos With Lime XL',
    price: 6.99,
    discount: null,
  },
  {
    id: '4',
    title: 'Tacos S',
    price: 1.5,
    discount: null,
  },
  {
    id: '5',
    title: 'Tacos With Cheese',
    price: 3.4,
    discount: 0.2,
  },
];
export class App extends Component {
  state = {
    products: productsData,
    quantityProducts: 0,
    totalPrice: 0,
    totalDiscount: 0,
    totalPriceWithDiscount: 0,
  };
  // handleProducts = () => {}
  // handleQuantityProducts = () => {
  //   this.setState({
  //     quantityProducts: this.state.products.length,
  //   });
  // };
  // handleTotalPrice = () => {}
  // handleTotalDiscount = () => {}
  // handleTotalPriceWithDiscount = () => {}
  // handleAddProduct = () => {}
  handleRemoveProduct = idProduct => {
    this.setState({
      products: this.state.products.filter(prod => prod.id !== idProduct),
    });
  };
  // handleUpdateProduct = () => {}
  // handleClearCart = () => {}
  // handleCheckout = () => {}
  render() {
    // Сортування продукту
    const productsSort = this.state.products.sort(
      (a, b) => a.discount - b.discount
    );
    return (
      <div>
        <Section>
          <h1>My list of products has {this.state.products.length} products</h1>
        </Section>
        <Section title="Product List">
          <div className={css.productList}>
            {productsSort.map(product => {
              return (
                <Product
                  key={product.id}
                  id={product.id}
                  title={product.title}
                  price={product.price}
                  discount={product.discount}
                  handleRemoveProduct={this.handleRemoveProduct}
                />
              );
            })}
          </div>
        </Section>
      </div>
    );
  }
}
