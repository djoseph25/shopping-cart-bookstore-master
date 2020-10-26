import React, { Component } from 'react'
import {Table} from 'reactstrap'
import CartItem from './Cart';

export default class AboutUs extends Component {
    render() {
        return (
          <div>
            <div class="container mb-4">
              <div class="row">
                <div class="col-12">
                  <div class="table-responsive">
                    <table class="table table-striped">
                      <tbody>
                        <tr>
                          <td>
                            <img src="https://dummyimage.com/50x50/55595c/fff" />{" "}
                          </td>
                          <td>Product Name Dada</td>
                          <td>In stock</td>
                          <td>
                            <input class="form-control" type="text" value="1" />
                          </td>
                          <td class="text-right">124,90 €</td>
                          <td class="text-right">
                            <button class="btn btn-sm btn-danger">
                              <i class="fa fa-trash"></i>{" "}
                            </button>{" "}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div className="move-total">
              <div class="totals">
                <div class="totals-item">
                  <label>Total Items In Cart</label>
                  <div class="totals-value" id="cart-subtotal">
                   
                  </div>
                </div>
                <div class="totals-item">
                  <label>Shipping</label>
                  <div class="totals-value" id="cart-shipping">
                    $0
                  </div>
                </div>
                <div class="totals-item totals-item-total">
                  <label>Grand Total</label>
                  <div class="totals-value" id="cart-total">
                    $
                  </div>
                </div>
              </div>
              <button class="checkout">Checkout</button>
            </div>
          </div>
        );
    }
}