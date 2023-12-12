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
import {ChevronLeftIcon, ChevronRightIcon} from "@heroicons/react/24/solid";

const Products = () => {
    const [filters, setFilters] = useState([])
    const [isMenuOpen, setMenuOpen] = useState(false);
    const [page, setPage] = useState(1)
    const {data, isLoading, error} = useFetchProducts(page)

    console.log("ddddsdsa+=",data?.title)
    console.log("dsdadwdqeq__", data?.name)

    const [isOpen, setIsOpen] = useState(true); // 상태 추가: 패널이 열려있는지 여부
    const [isOpen2, setIsOpen2] = useState(false);
    const handleLoadMore = () => {
        setPage((prevPage) => prevPage + 1);
    };
    const handledown = () => {
        setPage((prevPage) => prevPage -1);
    };


    const handlePaginationClick = (newPage) => {
        setPage(newPage);
    };
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
                        <ProductTitle title="Products" />

                    </div>
                    <div className="flex items-center">
                        <div className="relative inline-block text-left">
                            <div>
                                <button
                                    type="button"
                                    className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900"
                                    id="menu-button"
                                    aria-expanded={isMenuOpen}
                                    aria-haspopup="true"
                                    onClick={handleToggleMenu}
                                    >
                                    Sort
                                    <svg
                                        className={`-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500 ${
                                            isMenuOpen ? 'rotate-180' : ''
                                        }`}
                                        viewBox="0 0 20 20" fill="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                                            clip-rule="evenodd"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>
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
                    {/*<button*/}
                    {/*    type="button"*/}
                    {/*    className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"*/}
                    {/*    // onClick={() => setMobileFiltersOpen(true)}*/}
                    {/*>*/}
                    {/*    <span className="sr-only">Filters</span>*/}
                    {/*    <FunnelIcon className="h-5 w-5" aria-hidden="true" />*/}
                    {/*</button>*/}



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
                                <form className="mt-4 border-t border-gray-200">

                                <div class="mt- border-t border-gray-200">
                                    <h3 className="-mx-2 -my-3 flow-root mt-4">
                                        <button
                                            type="button"
                                            className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500"
                                            aria-controls="filter-section-mobile-1"
                                            aria-expanded={isOpen}
                                            onClick={handleToggle}
                                        >
                                            <span className="font-medium text-gray-900">Category</span>
                                            <span className="ml-6 flex items-center">
                                                    <svg className={`h-5 w-5 ${isOpen ? 'rotate-180' : ''}`} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                       <path d={isOpen ? "M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z" : " M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z"} />
                                                        {/*<path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />*/}
                                                    </svg>
                                                </span>
                                        </button>
                                    </h3>
                                    <div className={`pt-6 ${isOpen ? '' : 'hidden'}`} id="filter-section-mobile-0" >
                                        <div className="space-y-6">
                                            <div className="flex items-center">
                                                <input id="filter-mobile-category-0" name="category[]" value="new-arrivals" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"/>
                                                <label htmlFor="filter-mobile-category-0" className="ml-3 min-w-0 flex-1 text-gray-500">New Arrivals</label>
                                            </div>

                                            <div className="flex items-center">
                                                <input id="filter-mobile-category-1" name="category[]" value="sale" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"/>
                                                <label htmlFor="filter-mobile-category-1" className="ml-3 min-w-0 flex-1 text-gray-500">Sale</label>
                                            </div>
                                            <div className="flex items-center">
                                                <input id="filter-mobile-category-2" name="category[]" value="travel" type="checkbox" checked className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"/>
                                                <label htmlFor="filter-mobile-category-2" className="ml-3 min-w-0 flex-1 text-gray-500">Travel</label>
                                            </div>
                                            <div className="flex items-center">
                                                <input id="filter-mobile-category-3" name="category[]" value="organization" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"/>
                                                <label htmlFor="filter-mobile-category-3" className="ml-3 min-w-0 flex-1 text-gray-500">Organization</label>
                                            </div>
                                            <div className="flex items-center">
                                                <input id="filter-mobile-category-4" name="category[]" value="accessories" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"/>
                                                <label htmlFor="filter-mobile-category-4" className="ml-3 min-w-0 flex-1 text-gray-500">Accessories</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="mt-4 border-t border-gray-200">

                                        <h3 className="-mx-2 -my-3 flow-root mt-4">
                                            <button
                                                type="button"
                                                className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500"
                                                aria-controls="filter-section-mobile-1"
                                                aria-expanded={isOpen2}
                                                onClick={handleToggle2}
                                            >
                                                <span className="font-medium text-gray-900">Category</span>
                                                <span className="ml-6 flex items-center">
                                                    <svg className={`h-5 w-5 ${isOpen2 ? 'rotate-180' : ''}`} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                       <path d={isOpen2 ? "M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z" : " M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z"} />
                                                        {/*<path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />*/}
                                                    </svg>
                                                </span>
                                            </button>
                                        </h3>
                                        <div className={`pt-6 ${isOpen2 ? '' : 'hidden'}`} id="filter-section-mobile-0" >
                                            <div className="space-y-6">
                                                <div className="flex items-center">
                                                    <input id="filter-mobile-category-0" name="category[]" value="new-arrivals" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"/>
                                                        <label for="filter-mobile-category-0" class="ml-3 min-w-0 flex-1 text-gray-500">New Arrivals</label>
                                                </div>

                                                <div className="flex items-center">
                                                    <input id="filter-mobile-category-1" name="category[]" value="sale" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"/>
                                                        <label htmlFor="filter-mobile-category-1" className="ml-3 min-w-0 flex-1 text-gray-500">Sale</label>
                                                </div>
                                                <div className="flex items-center">
                                                    <input id="filter-mobile-category-2" name="category[]" value="travel" type="checkbox" checked className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"/>
                                                        <label htmlFor="filter-mobile-category-2" className="ml-3 min-w-0 flex-1 text-gray-500">Travel</label>
                                                </div>
                                                <div className="flex items-center">
                                                    <input id="filter-mobile-category-3" name="category[]" value="organization" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"/>
                                                        <label htmlFor="filter-mobile-category-3" className="ml-3 min-w-0 flex-1 text-gray-500">Organization</label>
                                                </div>
                                                <div className="flex items-center">
                                                    <input id="filter-mobile-category-4" name="category[]" value="accessories" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"/>
                                                        <label for="filter-mobile-category-4" class="ml-3 min-w-0 flex-1 text-gray-500">Accessories</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </form>
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
                                <>
                                    {error && <ErrorMessage />}
                                    {data?.map((product, index) => (
                                        <Fragment key={index}

                                            // sizes={product.sizes}
                                            // tags={product.tags}
                                        >
                                            <ProductItem key={index}
                                                         id={product?.id}
                                                         img={product.productImg[0]}
                                                         // img={"https://assets.burberry.com/is/image/Burberryltd/7F1F1853-CA91-43B6-B4B1-ADC28DE93F0F?$BBY_V3_SL_1$&wid=2500&hei=2500"}
                                                         description={product?.desc[0]}
                                                         title={product?.name}
                                                         price={product?.price}
                                                         category={product?.category[0]}
                                                         location={product?.region}
                                            />
                                        </Fragment>

                                    ))}
                                </>
                            </ul>
                            {data && (
                                <div className="mt-8  flex items-center justify-center">
                                    <div className="swiper-button image-swiper-button-prev-product mr-4 h-6 w-6 cursor-pointer" onClick={handledown}>
                                        <ChevronLeftIcon />
                                    </div>
                                    <div className="custom-pagination flex justify-center"></div>
                                    <div className="swiper-button image-swiper-button-next-product ml-4 h-6 w-6 cursor-pointer" onClick={handleLoadMore}>
                                        <ChevronRightIcon />

                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default Products;