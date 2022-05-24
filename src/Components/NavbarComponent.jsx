import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from "reactstrap";

export default function NavbarComponent() {
  const [isOpen, setIsOpen] = useState(false);
  const history = useHistory();

  return (
    <div>
      <Navbar
        expand="lg"
        color="light"
        light
        style={{ backgroundColor: "#E6FAFF" }}
      >
        <NavbarBrand href="/" style={{ fontFamily: "fantasy" }}>
          TEAM domestic violence solution
        </NavbarBrand>
        <NavbarToggler
          className="me-2"
          onClick={() => {
            console.log(isOpen);
            setIsOpen(!isOpen);
            console.log(isOpen);
          }}
        />
        <Collapse navbar isOpen={isOpen}>
          <Nav className="me-auto" navbar>
            <NavItem
              id="navHover"
              style={{ margin: "10px" }}
              onClick={() => {
                //history.push("/ExamMarket");
              }}
            >
              <NavLink>REPORT</NavLink>
            </NavItem>

            <NavItem
              id="navHover"
              style={{ margin: "10px" }}
              onClick={() => {
                //history.push("/ExamSquare/ArticleList");
              }}
            >
              <NavLink>가정폭력 게시판</NavLink>
            </NavItem>

            <UncontrolledDropdown inNavbar nav>
              <DropdownToggle
                caret
                nav
                id="navHover"
                style={{ margin: "10px" }}
              >
                Team소개
              </DropdownToggle>
              <DropdownMenu end id="navOptions">
                <DropdownItem
                  onClick={() => {
                    //history.push("/introduce/Team");
                  }}
                >
                  About Project
                </DropdownItem>

                <DropdownItem>팀소개</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>

          <NavbarText
            style={{ fontSize: "xx-small", margin: "20px 10px 10px 0px" }}
          >
            2022 현대교양 프로젝트
          </NavbarText>
        </Collapse>
      </Navbar>
      <br />
      <br />
      <hr />
      <br />
    </div>
  );
}