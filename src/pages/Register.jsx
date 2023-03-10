import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("./images/history-in-hd-e5eDHbmHprg-unsplash.jpg")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>СОЗДАТЬ АККАУНТ</Title>
        <Form>
          <Input placeholder="Имя" />
          <Input placeholder="Фамилия" />
          <Input placeholder="Никнейм" />
          <Input placeholder="email" />
          <Input placeholder="Пароль" />
          <Input placeholder="Подтвердите пароль" />
          <Agreement>
          Создавая аккаунт, я подтверждаю использование моих персональных данных в соответствии с
            <b> ПОЛИТИКОЙ КОНФИДЕНЦИАЛЬНОСТИ</b>
          </Agreement>
          <Button>СОЗДАТЬ</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
