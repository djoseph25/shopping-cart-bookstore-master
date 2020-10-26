import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { BookContext } from "./BookContext";

export default class Details extends Component {
  static contextType = BookContext;
  state={book:[]}


  getProduct = () => {
      if(this.props.match.params.id){
          const response = this.context.Products;
          const data = response.filter(book=>{
              return book.id === this.props.match.params.id
          })
          this.setState({product:data})
              }
  }
  componentDidMount (){
      this.getProduct()
  }


  render() {
      const {product} = this.state
      const {AddToCart} = this.context
    return (
      <div>
       {product.map((book)=>(
           <div className='details' key={book._id}>
             <img src={book.image}/> 
             <div className='box'>
                 <div className='row'>
       <h2>{book.title}</h2>
       <span>{book.price}</span>
       <Link to='/Cart' className='cart' onClick={()=>AddToCart(book._id)}>Add to Cart</Link>
                     </div></div> 
           </div>
           
       ))}
      </div>
    );
  }
}
