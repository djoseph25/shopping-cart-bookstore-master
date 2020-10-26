import React, { Component} from 'react';
import { Row, Col } from 'reactstrap';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import openbook from '../image/open-book.png'
import {BookContext} from './BookContext'
import './Navbar.css';


class Navbars extends Component {
	static contextType = BookContext;
	state = {isOpen: false }



	toggle = () => {
  this.setState({ isOpen: !this.state.isOpen });
}
	render() { 
			const {Cart, Products} = this.context
		return (<div>
			<Row>
				<Col className="logo-row">
					<img
						id="logo"
						src="https://i1.wp.com/bookshopbd.com/wp-content/uploads/2018/02/book-shop-bd-logo-2018.png?fit=1055%2C305&ssl=1"
						alt="logo"
					/>
				</Col>
			</Row>

			<Navbar color="dark" light expand="md" id="navbar">
				<NavbarBrand href="#" className="Icons"></NavbarBrand>
				<NavbarToggler onClick={this.toggle} />
				<Collapse isOpen={this.state.isOpen} navbar>
					{/* Navbar Links */}

					<Nav className="nav" navbar>
						<NavLink className="" activeClassName="active-link" to="/About">
							<img src={openbook} id="logo2" />
						</NavLink>

						<NavLink className="links" activeClassName="active-link" to="/product">
							STORE
						</NavLink>
						<NavLink className="links" activeClassName="active-link" to="/aboutus">
							ABOUT US
						</NavLink>
						<NavLink className="links" activeClassName="active-link" to="/Contact">
							CONTACT
						</NavLink>
						<NavLink className="links" activeClassName="active-link" to="/cart">
		<i class="fa fa-shopping-bag fa-lg " aria-hidden="true">{Cart.length}</i>
						</NavLink>
					</Nav>
				</Collapse>
			</Navbar>
		</div>  );
	}
}
 
export default Navbars;

