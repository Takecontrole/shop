import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { mobile } from "../responsive";
import { useLocation } from "react-router";
import { useState } from "react";

const Container = styled.div`
background-color: #C9ADA7;
`;

const Title = styled.h1`
  margin: 20px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  color: #fcf5f5;
background-color: #C9ADA7;
`;

const Filter = styled.div`
  margin: 20px;
  ${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({ marginRight: "0px" })}
`;

const Select = styled.select`
color: #fcf5f5;
background-color: #C9ADA7;
border: 2px solid #fcf5f5;
  padding: 10px;
  margin-right: 20px;
  ${mobile({ margin: "10px 0px" })}
`;
const Option = styled.option``;

const ProductList = () => {
  const location = useLocation();
  const cat = location.pathname.split("/")[2];
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("newest");
  
  const handleFilters = (e) => {
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value,
    });
  };
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Title>{cat}</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Фильтр товаров:</FilterText>
          <Select name="color" onChange={handleFilters}>
            <Option disabled >
              Цвет
            </Option>
            <Option>White</Option>
            <Option>Black</Option>
            <Option>Red</Option>
            <Option>Blue</Option>
            <Option>Orange</Option>
            <Option>Brown</Option>
          </Select>
          <Select name="size" onChange={handleFilters}>
            <Option disabled >
              Size
            </Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Сортировать:</FilterText>
         <Select onChange={(e) => setSort(e.target.value)}>
            <Option value="newest">НОВЫЕ</Option>
            <Option value="asc">Цена (увл)</Option>
            <Option value="desc">Цена (умен)</Option>
             </Select>
        </Filter>
      </FilterContainer>
       <Products cat={cat} filters={filters} sort={sort} />
       
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductList;
