import React, {Fragment, useState} from 'react';
import ProductTitle from "../../components/ui/ProductTitle";
import {FunnelIcon} from "@heroicons/react/20/solid";
import {ProductFilterHeader} from "../../components/product/ProductFilterHeader";
import {ProductFilter} from "../../components/product/ProductFilter";
import useFetchProducts from "../../services/fetchProducts";
import ImagePlaceholder from "../../components/ui/ImagePlaceholder";
import {LOADING_ARRAY} from "../../data/Product/productData";
import ErrorMessage from "../../components/ui/ErrorMessage";
import ProductItem from "../../components/ui/ProductItem";
import {SwiperSlide} from "swiper/react";
import ProductCard from "../../components/ui/ProductCard";
import OrderTitle from "../../components/ui/OrderTitle";

const Products = () => {
    const [filters, setFilters] = useState([])
    const [isMenuOpen, setMenuOpen] = useState(false);
    const {data, isLoading, error} = useFetchProducts()
    console.log("ddddsdsa+=",data?.title)
    console.log("dsdadwdqeq__", data?.name)

    const [isOpen, setIsOpen] = useState(true); // 상태 추가: 패널이 열려있는지 여부
    const [isOpen2, setIsOpen2] = useState(false);


    const handleToggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    const handleToggle2 = () => {
        setIsOpen2(!isOpen2);
    };


    const handleToggle = () => {
        setIsOpen(!isOpen);
    };


    // if (isLoading) {
    //     <div>
    //         Loading
    //     </div>
    // }

    return (
        <div className={"bg-white"}>
            <main className="mx-auto mb-32 w-full max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Title */}
                <div className="flex items-end justify-between border-b border-gray-200 pt-24 pb-6">
                    <div className="flex flex-col">
                        {/* page title */}
                        <OrderTitle title="Orders" />

                    </div>
                    <div className="flex items-center">
                    </div>
                    {isMenuOpen && (
                        <div className="absolute right-0 z-10 mb-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1">
                            <div className="py-1" role="none">
                                <a href="#" className="font-medium text-gray-900 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-0">Most Popular</a>
                                <a href="#" className="text-gray-500 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-1">Best Rating</a>
                                <a href="#" className="text-gray-500 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-2">Newest</a>
                                <a href="#" className="text-gray-500 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-3">Price: Low to High</a>
                                <a href="#" class="text-gray-500 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-4">Price: High to Low</a>
                            </div>
                        </div>
                    )}


                </div>
                <section aria-labelledby="products-heading" className="pt-6 pb-24">

                    <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
                        <div>
                            {/*<form className="mt-4 border-t border-gray-200">*/}
                            <form >
                                <div>
                                    <ProductFilterHeader/>
                                    <ProductFilter
                                        filters={filters}
                                    />
                                </div>
                                <h3 className="sr-only">Categories</h3>
                                <ul role="list" className="px-2 py-3 font-medium text-gray-900">
                                    <li>
                                        <a href="#" className="block px-2 py-3">Totes</a>
                                    </li>
                                    <li>
                                        <a href="#" className="block px-2 py-3">Backpacks</a>
                                    </li>
                                </ul>
                            </form>

                            <div className="pt-6" id="filter-section-0">
                            </div>




                        </div>
                        <div className={"lg:col-span-3"}>
                            {isLoading && (
                                <ul className="grid grid-cols-1 gap-6  sm:grid-cols-2 md:grid-cols-4">
                                    {LOADING_ARRAY.map((data, index) => (
                                        <li key={index}>
                                            <ImagePlaceholder height="min-h-[184px]" />
                                        </li>
                                    ))}
                                </ul>
                            )}
                            <ul className="grid grid-cols-1 gap-6  sm:grid-cols-2 md:grid-cols-4">
                                {/*<>*/}
                                {/*    {error && <ErrorMessage />}*/}
                                {/*    {data?.map((product, index) => (*/}
                                {/*        <Fragment key={index}*/}

                                {/*            // sizes={product.sizes}*/}
                                {/*            // tags={product.tags}*/}
                                {/*        >*/}
                                {/*            <ProductItem key={index}*/}
                                {/*                         id={product?.id}*/}
                                {/*                         img={product.productImg[0]}*/}
                                {/*                // img={"https://assets.burberry.com/is/image/Burberryltd/7F1F1853-CA91-43B6-B4B1-ADC28DE93F0F?$BBY_V3_SL_1$&wid=2500&hei=2500"}*/}
                                {/*                         description={product?.desc[0]}*/}
                                {/*                         title={product?.name}*/}
                                {/*                         price={product?.price}*/}
                                {/*                         category={product?.category[0]}*/}
                                {/*                         location={product?.region}*/}
                                {/*            />*/}
                                {/*        </Fragment>*/}

                                {/*    ))}*/}
                                {/*    /!*{data?.map((item, index) => (*!/*/}
                                {/*    /!*    <Fragment key={index}>*!/*/}
                                {/*    /!*        <ProductItem image={data?.productImg} title={data?.name} id={data?.id} />*!/*/}
                                {/*    /!*        /!*<ProductItem image={data?.productImg[0]}  title={data?.name} id={data?.item.id} />*!/*!/*/}
                                {/*    /!*    </Fragment>*!/*/}
                                {/*    /!*))}*!/*/}
                                {/*    /!*{data?.map((item, index)=> (*!/*/}
                                {/*    /!*    <Fragment key={index}>*!/*/}
                                {/*    /!*        /!*{data.id}*!/*!/*/}
                                {/*    /!*        <ProductItem image={data?.productImg} title={data?.name} id={data?.id} />*!/*/}
                                {/*    /!*    </Fragment>*!/*/}
                                {/*    /!*))}*!/*/}
                                {/*</>*/}
                            </ul>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default Products;