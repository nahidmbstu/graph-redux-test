import React from "react";
import gql from "graphql-tag";
import client from "../gqlclient";
import { Query } from "react-apollo";
import { connect } from "react-redux";

// with Query component

const ProductsQuery = props => (
  <Query
    query={gql`
      {
        allProducts {
          id
          price
          name
        }
      }
    `}
  >
    {({ data, error, loading }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;

      console.log(props);
      let { dispatch } = props;

      const saveToCart = ({ name, price }) => {};

      return data.allProducts.map(({ name, price, id }) => (
        <section key={id} className="card">
          <h2>{name}</h2>
          <p>price: {price}</p>
          <button onClick={() => saveToCart({ name, price })}>
            Add to Cart
          </button>
          <section className="item-number">
            <p>item</p>
            <input
              type="number"
              id="tentacles"
              name="tentacles"
              min="1"
              max="10"
              placeholder="1"
            />
          </section>
        </section>
      ));
    }}
  </Query>
);

function mapStateToProps(state) {
  return {
    products: state
  };
}

export default connect(mapStateToProps)(ProductsQuery);

//  without query component

// export async function getProducts(){

// let res = await client.query({
//     query: gql`
//     {
//         allProducts{
//           id,
//           price,
//           name
//         }
//       }
//   `
// });

// console.log(res)
// return res;
// }
