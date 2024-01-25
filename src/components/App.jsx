import { Component } from 'react';
import css from './App.module.css';
import axios from 'axios';
import { nanoid } from 'nanoid';
import {
  AddProductForm,
  Section,
  Product,
  ModalWindow,
  Spinner,
} from './index.js';

export class App extends Component {
  state = {
    products: null,
    loading: false,
    productId: null,
    modalIsOpen: false,
    modelData: null,
    productDescriptionData: null,
  };
  fetchGetAll = async () => {
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
  fetchGetOne = async () => {
    try {
      this.setState({ loading: true });
      const { data } = await axios.get(
        `https://fakestoreapi.com/products/${this.state.productId}`
      );
      this.setState({ productDescriptionData: data });
    } catch (error) {
      this.setState({ error: error.message });
    } finally {
      this.setState({ loading: false });
    }
  };

  componentDidMount() {
    this.fetchGetAll();
  }
  componentDidUpdate(_, prevState) {
    if (prevState.productId !== this.state.productId) {
      this.fetchGetOne();
    }
  }

  handleRemoveProduct = idProduct => {
    this.setState({
      products: this.state.products.filter(prod => prod.id !== idProduct),
    });
  };

  handleAddProduct = addProduct => {
    const checkOneProduct = this.state.products.some(
      product => product.title === addProduct.title
    );
    if (checkOneProduct) {
      alert('This product is already in the list');
      return;
    }
    const addIdProduct = {
      ...addProduct,
      id: nanoid(),
    };
    this.setState({
      products: [...this.state.products, addIdProduct],
    });
  };

  openModal = dataModal => {
    this.setState({
      modalIsOpen: true,
      modelData: dataModal,
    });
  };

  closeModal = () => {
    this.setState({
      modalIsOpen: false,
      modelData: null,
    });
  };

  onSelectProduct = prodId => {
    this.setState({
      productId: prodId,
    });
  };

  render() {
    return (
      <div>
        {this.state.loading && <Spinner />}
        {this.state.products !== null && (
          <Section>
            <h1>
              My list of products has
              {this.state.products.length}
              products
            </h1>
          </Section>
        )}

        {this.state.products !== null && (
          <Section title="Product List">
            <ul className={css.productList}>
              {this.state.products
                .sort((a, b) => a.price - b.price)
                .map(product => {
                  return (
                    <Product
                      key={product.id}
                      id={product.id}
                      title={product.title}
                      price={product.price}
                      discount={product.discount}
                      description={product.description}
                      category={product.category}
                      image={product.image}
                      handleRemoveProduct={this.handleRemoveProduct}
                      openModal={this.openModal}
                      onSelectProduct={this.onSelectProduct}
                      productDescriptionData={this.state.productDescriptionData}
                    />
                  );
                })}
            </ul>
          </Section>
        )}

        <Section title="Add new product">
          <AddProductForm handleAddProduct={this.handleAddProduct} />
        </Section>
        {this.state.modalIsOpen && (
          <ModalWindow
            closeModal={this.closeModal}
            modelData={this.state.modelData}
          />
        )}
      </div>
    );
  }
}
