import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import { init } from "ityped";
import { useEffect, useRef } from "react";
import "./navbar.css"
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

const Container = styled.div`
  background-color: #C9ADA7;
  outline: none;
  color: #fcf5f5;
  height: 60px;
  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;






const Center = styled.div`
  flex: 1;
  text-align: center;
  margin-left: 30px;
`;

const Logo = styled.h1`
  font-weight: bold;
  
        font-size: 30px;

        @include mobile{
          font-size: 20px;
        }

        span {
          font-size: inherit;
          color: #fcf5f5;
        }

        .ityped-cursor {
          animation: blink 1s infinite;
        }

        @keyframes blink {
            50%{
                opacity: 1;
            }
            75%{
                opacity: 0,;
            }
            100%{
                opacity: 0;
            }
        }
      
`;
const Right = styled.div`
  align-items: center;
  justify-content: flex-end;
  
`;

const MenuItem = styled.div`
margin-right: 10px;
color: #fcf5f5;
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;
  
const Navbar = () => {
  const { user } = useContext(AuthContext);
  const quantity = useSelector(state=>state.cart.quantity)
  const textRef = useRef();
  
  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed:60,
      strings: ["VALENTINO", "VALENTINO",],
    });
  }, []);
  return (
    <Container>
      <Wrapper>
        
        <Center>
          <Logo className="logo"><span ref={textRef}></span></Logo>
        </Center>
        
        <Right>

         
          <Link to="/cart">
          <MenuItem>
            <Badge badgeContent={quantity} color="#fcf5f5">
              <ShoppingCartOutlined />
            </Badge>
          </MenuItem>
          </Link>
          
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
