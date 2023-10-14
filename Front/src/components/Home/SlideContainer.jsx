import React from 'react';
import ProductSlide from "./ProductSlide";
import useFetchProducts from "../../services/fetchProducts";

const SlideContainer = () => {
    const {data, isLoading, error} = useFetchProducts()
    console.log("ddddsdsa+=",data)
    return (
        <ProductSlide products={data} error={error} isLoading={isLoading}/>

    );
};

export default SlideContainer;