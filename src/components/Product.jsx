
import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@material-ui/icons";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "./product.css"
const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
`;

const Container = styled.div`
font-family: 'Roboto', sans-serif;
font-weight: 100;
color:gray;
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 480px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: none;
  position: relative;
 padding-bottom: 100px;
 overflow: hidden;
  &:hover ${Info}{
    opacity: 1;
  }
`;

const Expl = styled.div`
color: #fcf5f5;
position: absolute;
flex-direction: column;
bottom: 40px;
font-size: 12px;
margin-bottom: 5px;
text-align: center;
align-items: center;
justify-content: center;

`; 

const Image = styled.img`
height: 75%;
`; 
const Size = styled.div`
position: absolute;
bottom: 10px;
`; 
const Span = styled.span`
color: #fcf5f5;
border: 1px solid #fcf5f5;
padding: 5px;
margin: 5px;
width: 20px;

`; 

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;
  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`;


const Product = ({ item }) => {
  return (
    <Container >
      
      <Image src={item.img} />
      <Info>
        <Icon>
          <ShoppingCartOutlined />
        </Icon>
        <Icon>
          <Link to={`/product/${item._id}`}>
          <SearchOutlined />
          </Link>
        </Icon>
        <Icon>
          <FavoriteBorderOutlined />
        </Icon>
        
      </Info>
      <Expl className="product">
      <h1>{item.title}</h1>
      <h3>{item.brend}</h3>
      <h4>{item.price}</h4>
      </Expl>
      <Size>
      <Span>{item.size}</Span>
    
    
      
      </Size>
    </Container>
  );
};

export default Product;
