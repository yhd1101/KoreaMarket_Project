import React from 'react';
import ProductTitle from "../ui/ProductTitle"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';
import {PRODUCT_BREAK_POINTS, PRODUCT_LOADING_ARRAY} from "../../data/Home/slideOptions";
import ImagePlaceholder from "../ui/ImagePlaceholder";
import {ChevronLeftIcon, ChevronRightIcon} from "@heroicons/react/24/solid";
import ErrorMessage from "../ui/ErrorMessage";
import ProductCard from "../ui/ProductCard";



const ProductSlide = ({
    isLoading,
    error,
    products
                      }) => {
    console.log("products++++++", products)

    if (isLoading) {
        <div>
            Loading
        </div>
    }
    return (
        <section className="mx-auto mt-20 w-full max-w-7xl py-4">
            <ProductTitle title="products" className="mb-6 px-6 sm:mb-10" />
            <Swiper
                navigation={{
                    nextEl: '.image-swiper-button-next-product',
                    prevEl: '.image-swiper-button-prev-product',
                    disabledClass: 'opacity-20',
                }}
                slidesPerView={1}
                spaceBetween={30}
                pagination={{
                    el: '.custom-pagination',
                    clickable: true,
                }}
                breakpoints={PRODUCT_BREAK_POINTS}
                modules={[Pagination, Navigation]}
                className="!px-6 !pb-14"
            >
                {isLoading &&
                    PRODUCT_LOADING_ARRAY.map((data, index) => (
                        <SwiperSlide
                            key={index}
                            className="group cursor-pointer rounded-2xl transition-shadow duration-300 ease-in-out hover:shadow-md"
                        >
                            <ImagePlaceholder />
                        </SwiperSlide>
                    ))
                }
                {error && <ErrorMessage/>}
                {products?.map((product, index) => (
                    <SwiperSlide
                        key={index}
                        className="group cursor-pointer rounded-2xl transition-shadow duration-300 ease-in-out hover:shadow-md"
                    >
                        <ProductCard
                            id={product?.id}
                            image={product?.productImg[0]}
                            description={product?.desc[0]}
                            title={product?.name}
                            price={product?.price}
                            category={product?.category[0]}
                            location={product?.region}
                            // sizes={product.sizes}
                            // tags={product.tags}
                        />
                    </SwiperSlide>
                ))}
                {/* Custom navigation */}
                <div className="mt-8  flex items-center justify-center">
                    <div className="swiper-button image-swiper-button-prev-product mr-4 h-6 w-6 cursor-pointer">
                        <ChevronLeftIcon />
                    </div>
                    <div className="custom-pagination flex justify-center"></div>
                    <div className="swiper-button image-swiper-button-next-product ml-4 h-6 w-6 cursor-pointer">
                        <ChevronRightIcon />
                    </div>
                </div>
            </Swiper>


        </section>

    );
};

export default ProductSlide;