import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import {NavLink, Outlet} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

export default function NavigationBar() {
    const {movies,size} = useSelector((state) => state.wishlist);
    const dispatch = useDispatch();

    return (
        <Navbar bg="light" variant="light">
            <Container>

                <Nav className="me-auto">
                    <Nav.Link
                        as={NavLink}
                        to="wishlist"
                        style={({isActive}) => ({
                            textDecoration: isActive && "underline",
                        })}
                    >
                        wishlist
                    </Nav.Link> <br/>
                    <Nav.Link
                        as={NavLink}
                        to="movies"
                        style={({isActive}) => ({
                            textDecoration: isActive && "underline",
                        })}
                    >
                        movies ({size})
                    </Nav.Link>

                    <Outlet />
                </Nav>
            </Container>
        </Navbar>

    )
}