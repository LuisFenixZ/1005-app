import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";
 
export const Nav = styled.nav`
  padding: 0rem 1rem 0rem 1rem;
`;
 
export const NavLink = styled(Link)`
  position: relative;
  color: white;
  display: flex;
  align-items: start;
  text-decoration: none;
  padding: 0.5rem;
  height: 100%;
  cursor: pointer;
  &:hover{
    color: #FFFFFF;
    padding: 0.5rem;
    border: 10px solid;
    border-image-slice: 1;
    border-width: 3px;
    border-image-source: linear-gradient(to right, #f68f1d, #e23e50);
    border-left: 0;
    border-right: 0;
    border-top: 0; 
  }
  &.active {
    padding: 0.6rem;
    border: 2px solid transparent;
    border-radius: 15px 15px 0px 0px;
    background: linear-gradient(to right, #000000, #000000),linear-gradient(to right, #f68f1d, #e23e50);
    background-clip: padding-box, border-box;
    background-origin: padding-box, border-box;
    border-bottom: 0;
    
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
  align-items: start;
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