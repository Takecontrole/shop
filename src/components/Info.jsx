import styled from "styled-components";
import { mobile } from "../responsive";
import "./info.css"

const Container = styled.div`
  width: 100%;
  height: 40vh;
  background-color: #C9ADA7;
  display: flex;
  position: relative;
  overflow: hidden;
`;

const Title = styled.div`
color: #fcf5f5;
font-size: 24px;
position: absolute;
text-align: center;
${mobile({ fontSize: "16px"})}

`;
const Desc = styled.div`
margin: 10px;
`;
const Info = () => {
  return (
    <Container>
    
            <Title>
            
            <Desc className="container">
            
            Привет, мы Valentino. Мы любим нашу планету. Мы также любим выглядеть хорошо и не понимаем почему кому-то приходится выбирать что-то одно.
           </Desc>
           <Desc className="container">
           Вот почему мы используем только биоразлагающиеся и перерабатываемые материалы, чтобы сделать высококачественную и стильную одежду. Для вас и вашей планеты!
           </Desc>
          
            <Desc className="container">
            1% процент от суммы покупки идёт в фонд поддержки экосистемы и спасения вымирающих видов.
            </Desc>
           
</Title>
    </Container>
    );
};
    export default Info;