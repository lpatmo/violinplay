import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../logo.svg";
import styled from "styled-components";
import { ButtonContainer } from "./Button";

export default class Navbar extends Component {
  render() {
    return (
      <NavWrapper className="navbar navbar-expand-sm navbar-dark  px-sm-5">
        <Link to="/">
          <img src={logo} alt="store" className="navbar-brand" width="111" />
        </Link>
        <ul className="navbar-nav align-items-center">
          <li className="nav-item ml-1">
            <Link to="/" className="nav-link">
              violin.play()
            </Link>
          </li>
        </ul>

        <Link to="/cart" className="ml-auto">
          <ButtonContainer>
            <span className="mr-2">
              <i className="fas fa-music" />
            </span>
            my cart
          </ButtonContainer>
        </Link>
        <a
          href="https://kickstarter.com/projects/violinplay/violinplay"
          target="_blank"
        >
          <ButtonContainer className="ml-auto">
            <span className="mx-2 mr-2">Kickstarter ends July 17th, 2019</span>
          </ButtonContainer>
        </a>
      </NavWrapper>
    );
  }
}

const NavWrapper = styled.nav`
  background: var(--mainBlue);
  .nav-link {
    color: var(--mainWhite) !important;
    font-size: 1.3rem;
    text-transform: capitalize;
  }
`;
