import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";
 
export const Nav = styled.nav`
  position: relative;
  align-items: center;
  height: 0px;
  display: flex;
  color: #ffffff;
  justify-content: center;
  padding: 0.10rem calc((50vw - 10px) / 2);
  z-index: 12;

`;
 
export const NavLink = styled(Link)`
  position: relative;
  color: #ffffff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem;
  height: 100%;
  cursor: pointer;
  &:hover{
    padding: 0.5rem;
    border: 10px solid;
    border-image-slice: 1;
    border-width: 3px;
    border-image-source: linear-gradient(to left, #00843e, #00934d, #00843e);
    border-left: 0;
    border-right: 0;
    border-top: 0; 
  }
  &.active {
    padding: 0.rem;
    border: 10px solid;
    border-image-slice: 1;
    border-width: 3px;
    border-image-source: linear-gradient(to left, #00843e, #00934d, #00843e);
    border-left: 0;
    border-right: 0;
    border-top: 0;
  }
`;
 
export const Bars = styled(FaBars)`
  display: none;
  color: #808080;
  @media screen and (max-width: 355px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;
 
export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;
  /* Second Nav */
  /* margin-right: 24px; */
  /* Third Nav */
  /* width: 100vw;
white-space: nowrap; */
  @media screen and (max-width: 355px) {
    display: none;
  }
`;