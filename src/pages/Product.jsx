import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import { mobile } from "../responsive";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";
import { publicRequest } from "../requestMethods";
import { addProduct } from "../redux/cartRedux";
import { useDispatch } from "react-redux";
const Container = styled.div`
background-color: #C9ADA7;
overflow: hidden;
`;

const Wrapper = styled.div`
color: #fcf5f5;
  padding: 50px;
  justify-content: center;
  align-items: center;
  text-align: center;
  ${mobile({ padding: "10px", flexDirection:"column" })}
`;

const ImgContainer = styled.div`
  
`;

const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
  ${mobile({ height: "40vh" })}
`;

const InfoContainer = styled.div`
justify-content: center;
  align-items: center;
  text-align: center;
  margin-bottom: 50px;
  padding: 20px;
  ${mobile({ padding: "25px" })}
`;

const Title = styled.h1`
  font-weight: 200;
  font-size: 15px;
`;

const Desc = styled.p`
  margin: 20px 0px;
  font-size: 30px;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 15px;
`;

const FilterContainer = styled.div`
  margin-top: 40px;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;

const Filter = styled.div`

padding-bottom: 20px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const FilterTitle = styled.span`
  font-size: 10px;
  font-weight: 200;
`;

const FilterColor = styled.div`

margin: 5px;
border: 2px solid #fcf5f5;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  
  cursor: pointer;
`;

const FilterSize = styled.select`
background-color:  #C9ADA7;
border: 2px solid #fcf5f5;
border-radius: 30%;
  padding: 5px;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  
  
  
 
`;



const Button = styled.button`

width: 98%;

border: 2px solid #fcf5f5;
  padding: 15px;
  background-color: #C9ADA7;
  cursor: pointer;
  font-weight: 500;

  &:hover{
      background-color: #f8f4f4;
  }
`;

const Product = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const dispatch = useDispatch();
  
  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get("/products/find/" + id);
        setProduct(res.data);
      } catch {}
    };
    getProduct();
  }, [id]);
  
  const handleClick = () => {
    dispatch(
      addProduct({ ...product, quantity, color, size })
    );
  };
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <ImgContainer>
          <Image src={product.img} />
        </ImgContainer>
        <InfoContainer>
          <Title>{product.title}</Title>
          <Desc>
            {product.brend}
          </Desc>
          <Price> {product.price}</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Цвет</FilterTitle>
             {product.color?.map((c) => (
                <FilterColor color={c} key={c} onClick={() => setColor(c)}/>
              ))}
            </Filter>
            <Filter>
              
                 <FilterSize onChange={(e) => setSize(e.target.value)}>
                  {product.size?.map((s) => (
                  <FilterSizeOption key={s}>{s}</FilterSizeOption>
                ))}
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            
            <Button onClick={handleClick}>Добавить в корзину</Button>
            
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Product;
