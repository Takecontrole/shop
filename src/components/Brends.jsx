import react from "react";
import styled from "styled-components";
import "./brends.css"
const Container = styled.div`
  background-color: whitesmoke;
  text-align: center;
  align-items: center;
  justify-content: center;
  padding: 30px;
  `;
const Brend = styled.div`

font-family: 'Raleway', sans-serif;
font-size: 12px;
padding-top: 10px;
padding-bottom: 30px;
`; 
const Brends = () => {
  return (
    <Container className="brends">
    
    <Brend> 
     <h2>Наши бренды</h2>
    </Brend>
    <Brend> 
     <h1>Contra la Contra</h1>
    </Brend>
    <Brend> 
     <h1>Inki</h1>
      </Brend>
      <Brend> 
     <h1>Bad Brains</h1>
      </Brend>
      <Brend> 
     <h1>Плохие</h1>
      </Brend>
      <Brend> 
     <h1>CROSS</h1>
      </Brend>
     <Brend> 
     <h1>Бесстыжие</h1>
      </Brend>
      <Brend> 
     <h1>AcrostiX</h1>
      </Brend>
        </Container>
    
  )
}

export default Brends;