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

const Products = () => {
    const [filters, setFilters] = useState([])
    const { data, isLoading, error,} = useFetchProducts()
    console.log("4444444444",data)

    return (
        <div className={"bg-white"}>
            <main className="mx-auto mb-32 w-full max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Title */}
                <div className="flex items-end justify-between border-b border-gray-200 pt-24 pb-6">
                    <div className="flex flex-col">
                        {/* page title */}
                        <ProductTitle title="Products" />
                    </div>
                    <button
                        type="button"
                        className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
                        // onClick={() => setMobileFiltersOpen(true)}
                    >
                        <span className="sr-only">Filters</span>
                        <FunnelIcon className="h-5 w-5" aria-hidden="true" />
                    </button>
                </div>
                <section aria-labelledby="products-heading" className="pt-6 pb-24">
                    <h2 id="products-heading" className="sr-only">
                        NFTs
                    </h2>
                    <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
                        <div>
                            <ProductFilterHeader/>
                            <ProductFilter
                                filters={filters}
                            />
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
                                    {data.map((item, index)=> (
                                        <Fragment key={index}>
                                            <ProductItem image={data?.item.productImg[0]} title={data?.item.name} id={data?.item.id} />
                                        </Fragment>
                                    ))}
                                </>
                            </ul>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default Products;