import { Component } from 'react';
import css from './App.module.css';
import { nanoid } from 'nanoid';
import { AddProductForm, Section, Product, ModalWindow } from './index.js';

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
    modalIsOpen: false,
    modelData: null,
  };
  componentDidMount() {
    const localProduct = localStorage.getItem('Products');
    const parseLocalProduct = JSON.parse(localProduct) ?? [];
    this.setState({ products: parseLocalProduct });
  }
  componentDidUpdate(_, prevState) {
    if (this.state.products !== prevState.products) {
      const localProduct = JSON.stringify(this.state.products);
      localStorage.setItem('Products', localProduct);
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
                  openModal={this.openModal}
                />
              );
            })}
          </div>
        </Section>

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
