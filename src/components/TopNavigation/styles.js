import styled from "styled-components";
import {Link} from "react-router-dom"

export const Nav = styled.nav`
  background: #fff;
  display:flex;
  justify-content:center;
  align-items:center;
  top:0;
  height: 80px;
  z-index: 10;
`

export const NavContainer = styled.div`
  display:flex;
  justify-content: space-between;
  z-index:1;
  width: 100%;
`

export const Inbox = styled(Link)`
  color:#000;
  cursor:pointer;
  display:flex;
  align-items:center;
  text-decoration:none;
`


export const AllCalls = styled(Link)`
  color:#000;
  cursor:pointer;
  display:flex;
  align-items:center;
  text-decoration:none;
`


