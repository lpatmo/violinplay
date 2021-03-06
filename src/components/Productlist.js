import React, { Component } from "react";
import Product from "./Product";
import Title from "./Title";
import { ProductConsumer } from "../context";

export default class ProductList extends Component {
  render() {
    return (
      <div>
        <React.Fragment>
          <div className="py-5">
            <div className="container">
              <Title name="violin.play()" title="album songs" />
              <div className="row">
                <h3 className="mx-auto">Code-inspired violin music</h3>
              </div>
              <div className="row">
                <ProductConsumer>
                  {value => {
                    return value.products.map(product => {
                      return <Product key={product.id} product={product} />;
                    });
                  }}
                </ProductConsumer>
              </div>
            </div>
          </div>
        </React.Fragment>
      </div>
    );
  }
}
