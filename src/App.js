import React, { Component } from "react";
import "./App.css";
import ProductsQuery from "./query";
import { ApolloProvider } from "react-apollo";
import client from "./gqlclient";
import Header from "./Header";
import configureStore from "./Store";
import { Provider } from "react-redux";
const store = configureStore();

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
  }

  async componentDidMount() {
    // await getProducts();
  }
  render() {
    return (
      <Provider store={store}>
        <ApolloProvider client={client}>
          <Header />
          <ProductsQuery />
        </ApolloProvider>
      </Provider>
    );
  }
}

export default App;
