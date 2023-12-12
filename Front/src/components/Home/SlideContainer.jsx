import React, {useState} from 'react';
import ProductSlide from "./ProductSlide";
import useFetchProducts from "../../services/fetchProducts";

const SlideContainer = () => {
    const [page, setPage] = useState(1)
    const {data, isLoading, error} = useFetchProducts(page)
    console.log("ddddsdsa+=",data)

    const handleLoadMore = () => {
        setPage((prevPage) => prevPage + 1);
    };

    return (
        <ProductSlide products={data} error={error} isLoading={isLoading}/>

    );
};

export default SlideContainer;