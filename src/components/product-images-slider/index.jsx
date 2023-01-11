import './product-image-slider.scss'
import PropTypes from 'prop-types'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Thumbs } from 'swiper'
import { useState } from 'react'
import styled from "styled-components";
import { mobile } from "../../responsive";
import {Link} from "react-router-dom";

const Button = styled.button`

left: 40px;
bottom: 10%;
position: absolute;
border: none;
font-family: 'Raleway', sans-serif;
width: 120px;
height: 30px;
padding: 10px;
background-color: #fcf5f5 ;
cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
    ${mobile({fontSize: "12px", })}
`;
const Text = styled.div`
color: white;
left: 40px;
bottom: 15%;
position: absolute;
width: 240px;

`; 

const ProductImagesSlider = props => {
    const [activeThumb, setActiveThumb] = useState()

    return <>
        <Swiper
            loop={true}
            
            navigation={true}
            modules={[Navigation, Thumbs]}
            grabCursor={true}
            thumbs={{ swiper: activeThumb }}
            className='product-images-slider'
        > 
        
            {
                props.images.map((item, index) => (
                    <SwiperSlide key={index}>
                   
                        <img src={item} alt="product images" />
                        
                        
                        
                        <Text >
                        
                        <h1 className="collection">Клуб украденных невест</h1>
                        <h2 className="addition">Ограниченный выпуск</h2>
                        </Text>
                        <Link to={`/products/${item.cat}`}>
                        <Button>Показать</Button>
                        </Link>
                    </SwiperSlide>
      
                    
                ))
            }
        
        </Swiper>
        
    </>
}

ProductImagesSlider.propTypes = {
    images: PropTypes.array.isRequired
}

export default ProductImagesSlider