import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import {MultiSelect} from "primereact/multiselect";
import useCreateProduct from "../../services/createProduct";
const ProductPost = () => {

    const [categories, setCategories] = useState([])
    const { data, mutateAsync } = useCreateProduct()

    const categoryList = [
        { name: 'Digital', code: 'Digital' },
        { name: 'Top', code: 'Top' },
        { name: 'Bottom', code: 'Bottom' },
        { name: 'Shoes', code: 'Shoes' },
        { name: 'Caps', code: 'Caps' },
        { name: 'Sports', code: 'Sports'},
        { name: 'Socks', code: 'Socks'},
        {name: 'Beauty', code: 'Beauty'},
        {name: 'Onepiece', code: 'onepiece'},
        {name: 'Shirt', code: 'Shirt'},
        {name: 'Accessory', code: 'Accessory'},
        {name: 'Laptop',code: 'Laptop' },
        {name: 'Outer', code: 'Outer'},
        {name: 'Jacket', code: 'Jacket'},
        {name: 'DeskTop', code: 'DeskTop'}
    ];
    const {
        register,
        handleSubmit,
        watch,
        setValue,
        // setError,
        // clearErrors,
        formState: { isSubmitting, errors, isDirty}
    } = useForm()
    const onSubmit = async (values) => {
        const { name, desc, price, productImg, category, region, brand} = values
        const numePrice = parseFloat(price)
        const descArray = desc.split('\n')
        const productImgArray = productImg.split(',')
       const userInput ={
           name, desc: descArray, price: isNaN(numePrice) ? null : numePrice, productImg: productImgArray, region, brand,
           category: categories.map(item => item.name)
       }
       mutateAsync(userInput)
        alert('Register Product!')
       console.log("ddddd", userInput)
    }

    return (
        <section className="mt-8  md:mt-8">
            <div className="mx-auto max-w-7xl">
                <div className="relative overflow-hidden px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl pt-8">
                        <div>
                            <div className="text-center">
                                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                                    Register Product
                                </h1>
                                <span className="mt-8 text-lg leading-6 text-violet-500">
                                    상품등록 주의사항(적기)
                                </span>
                            </div>
                            <div className="relative pt-12 text-lg leading-8 text-gray-900">
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    {/*<div className="relative h-10 w-full min-w-[200px]">*/}
                                    {/*    <input*/}
                                    {/*        className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"*/}
                                    {/*        placeholder=" "*/}
                                    {/*    />*/}
                                    {/*    <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">*/}
                                    {/*        Product name*/}
                                    {/*    </label>*/}
                                    {/*</div>*/}
                                    <div className="mb-6">
                                        <label htmlFor="large-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-dark">Product Name</label>
                                        <input
                                            {...register('name')}
                                            type="text"
                                            id="large-input"
                                            className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:placeholder-dark-800 dark:text-dark dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        />
                                    </div>
                                    <div className="mb-6">
                                        <label htmlFor="large-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-dark">Price</label>
                                        <input
                                            {...register('price')}
                                            type="text"
                                            id="large-input"
                                            className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:placeholder-dark-800 dark:text-dark dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        />
                                    </div>

                                    <div className="mb-6">
                                        <label htmlFor="large-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-dark">Product Image</label>
                                        <input
                                            {...register('productImg')}
                                            type="text"
                                            id="large-input"
                                            className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:placeholder-dark-800 dark:text-dark dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        />
                                    </div>
                                    <div className="mb-6">
                                        <label htmlFor="large-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-dark">Category</label>
                                        <MultiSelect
                                            value={categories}
                                            onChange={(e) => setCategories(e.value)}
                                            options={categoryList}
                                            optionLabel="name"
                                            placeholder="Select Categories"
                                            display={"chip"}
                                            className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:placeholder-dark-800 dark:text-dark dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        />

                                    </div>
                                    <div className="mb-6">
                                        <label htmlFor="large-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-dark">Region</label>
                                        <input
                                            {...register('region')}
                                            type="text"
                                            id="large-input"
                                            className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:placeholder-dark-800 dark:text-dark dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        />
                                    </div>
                                    <div className="mb-6">
                                        <label htmlFor="large-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-dark">Brand</label>
                                        <input
                                            {...register('brand')}
                                            type="text"
                                            id="large-input"
                                            className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:placeholder-dark-800 dark:text-dark dark:focus:ring-blue-500 dark:focus:border-blue-500"

                                        />
                                    </div>
                                    <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your message</label>
                                    <textarea
                                        {...register('desc')}
                                        id="message"
                                        rows="4"
                                        className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:placeholder-dark-800 dark:text-dark dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="Write your thoughts here..."
                                    />

                                    <button type="submit"
                                            // class="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"

                                            className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:placeholder-dark-800 dark:text-dark dark:focus:ring-blue-500 dark:focus:border-blue-500"

                                    >
                                            Publish post
                                        </button>



                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductPost;