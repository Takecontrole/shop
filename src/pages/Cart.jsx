import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { mobile } from "../responsive";
import { useSelector } from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import { useEffect, useState } from "react";
import { userRequest } from "../requestMethods";
import { useNavigate} from "react-router";
import { Link } from "react-router-dom";

const KEY = "pk_test_51MHQtBHmbksrsN9ww1whQNFjeaBWyq1FgINbarQyVHp6N4aK1aXedMtbk5jTKAiSZYCgzlYBLhm37MPBmQp9vv1I00TWPVEQpu";

const Container = styled.div`
color: #fcf5f5;
background-color: #C9ADA7;
`;

const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border-radius: 10px;
  border: 2px solid white;
  background-color: #C9ADA7;
  color: #fcf5f5
`;

const TopTexts = styled.div`
  ${mobile({ display: "none" })}
`;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;

const Bottom = styled.div`
color: #fcf5f5
background-color: #C9ADA7;
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 200px;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #C9ADA7
`;

const ProductSize = styled.span``;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
  ${mobile({ margin: "5px 15px" })}
`;

const ProductPrice = styled.div`
  margin-top: 20px;
  font-size: 30px;
  font-weight: 200;
  ${mobile({ marginBottom: "20px" })}
`;

const Hr = styled.hr`
  background-color: #C9ADA7;
  border: none;
  height: 1px;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #C9ADA7;
  border: 2px solid white;
  border-radius: 10px;
  color: white;
  font-weight: 600;
`;

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const [stripeToken, setStripeToken] = useState(null);
  const navigate = useNavigate();

  const onToken = (token) => {
    setStripeToken(token);
  };

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await userRequest.post("/checkout/payment", {
          tokenId: stripeToken.id,
          amount: 500,
          currency: "rub",
        });
        navigate("/success", {
          stripeData: res.data,
          products: cart, });
      } catch {}
    };
    stripeToken && makeRequest();
  }, [stripeToken, cart.total, navigate]);
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <Title>ВАША КОРЗИНА</Title>
        <Top>
        <Link to="/">
          <TopButton>ПРОДОЛЖИТЬ ПОКУПКИ</TopButton>
          <TopTexts>
          </TopTexts>
         </Link> 
        </Top>
        <Bottom>
          <Info>
            {cart.products.map((product) => (
              <Product>
                <ProductDetail>
                  <Image src={product.img} />
                  <Details>
                    <ProductName>
                      <b>Товар:</b> {product.title}
                    </ProductName>
                    <ProductId>
                      <b>ID:</b> {product._id}
                    </ProductId>
                    <ProductColor color={product.color} />
                    <ProductSize>
                      <b>Размер:</b> {product.size}
                    </ProductSize>
                  </Details>
                </ProductDetail>
                <PriceDetail>
                  
                  <ProductPrice>
                     {product.price * product.quantity}
                  </ProductPrice>
                </PriceDetail>
              </Product>
            ))}
            <Hr />
          </Info>
          <Summary>
            <SummaryTitle>ОБЩАЯ СУММА</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Предварительно</SummaryItemText>
              <SummaryItemPrice>{cart.total}</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Доставка</SummaryItemText>
              <SummaryItemPrice>500</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Скидка</SummaryItemText>
              <SummaryItemPrice>500</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Всего</SummaryItemText>
              <SummaryItemPrice>{cart.total}</SummaryItemPrice>
            </SummaryItem>
            <StripeCheckout
              name="Valentino"
              image=""
              billingAddress
              shippingAddress
              description={`Общая сумма заказа${cart.total}`}
              amount={cart.total * 100}
              token={onToken}
              stripeKey={KEY}
            >
              <Button>ОПЛАТИТЬ</Button>
            </StripeCheckout>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
