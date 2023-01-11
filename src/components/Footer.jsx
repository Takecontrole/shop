import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Pinterest,
  Room,
  Twitter,
  Telegram
} from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../responsive";
import "./footer.css"
const Container = styled.div`
  display: flex;
  background-color: #C9ADA7;
  color: gray;
  ${mobile({ flexDirection: "column" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1``;

const Desc = styled.p`
  margin: 20px 0px;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  
  
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: "none" })}
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ backgroundColor: "#C9ADA7" })}

`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
    width: 100%;
`;

const Footer = () => {
  return (
    <Container className="container">
      <Left>
        <Logo className="logo"><h1>VALENTINO.</h1></Logo>
        
        
        <SocialContainer>
          <SocialIcon color="3B5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <Twitter />
          </SocialIcon>
          <SocialIcon color="E60023">
            <Pinterest />
          </SocialIcon>
          <SocialIcon color="3B5999">
            <Telegram />
          </SocialIcon>
          <SocialIcon >
            <h2>Bk</h2>
          </SocialIcon>
        </SocialContainer>
        
      </Left>
      <Center>
        <Title>Полезные ссылки</Title>
        <List>
          <ListItem>Домой</ListItem>
          <ListItem>Корзина</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>Аккаунт</ListItem>
          <ListItem>Заказы</ListItem>
          <ListItem>Список желаний</ListItem>
          <ListItem>Список желаний</ListItem>
          
        </List>
      </Center>
      <Right>
        <Title>Контакты</Title>
        <ContactItem>
          <Room style={{marginRight:"10px"}}/> Москва. Марксистская 5.
        </ContactItem>
        <ContactItem>
          <Phone style={{marginRight:"10px"}}/> +1 777 777 777
        </ContactItem>
        <ContactItem>
          <MailOutline style={{marginRight:"10px"}} /> takecontrole2034@gmail.com
        </ContactItem>
        <Payment src="/img/payment.png" />
      </Right>
    </Container>
  );
};

export default Footer;
