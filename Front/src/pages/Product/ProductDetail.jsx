import React, {useEffect, useState} from 'react';
import ErrorMessage from "../../components/ui/ErrorMessage";
import {useParams} from "react-router-dom";
import useFetchProductById from "../../services/fetchProductById";
import {LazyLoadImage} from "react-lazy-load-image-component";
import {Swiper, SwiperSlide} from "swiper/react";
import {FreeMode, Thumbs} from "swiper";
import Button from "../../components/ui/Button";
import { Calendar } from "primereact/calendar";
import {RadioGroup} from "@headlessui/react";
import axios from "axios";
import ReservationModal from '../../components/ui/ReservationModal';
import LoadingSkeleton from "../../components/ui/LoadingSkeleton";
import useFetchMoney from "../../services/fetchMoneyInfo";

const ProductDetail = () => {
    const { id } = useParams()
    const { data, isLoading, error} = useFetchProductById(id)
    const { data: moneyInfo, isLoading: moneyLoading, error: moneyError  } = useFetchMoney()
    const [thumbsSwiper, setThumbsSwiper] = useState(null)
    const [showReservationModal, setShowReservationModal] = useState(false); // 모달 가시성을 제어하는 상태
    console.log("0000000000000", data)




        // const getMoneyInfo = async () => {
    //     try{
    //         const result = await axios.get("https://api.currencyfreaks.com/latest?apikey=13c39624b2be49dcae2e987f4200390e")
    //         if( result.status === 200){
    //             setMoneyInfo(result.data)
    //         }
    //     } catch (err){
    //         console.log(err)
    //     }
    // }

   //환율 데이터 로딩 중 또는 에러 처리
    if (moneyLoading) {
        return <LoadingSkeleton />;
    }

    if (moneyError) {
        return (
            <div className="mt-20">
                <ErrorMessage />
            </div>
        );
    }
    // Error Message
    if (error) {
        return (
            <div className="mt-20">
                <ErrorMessage/>
            </div>
        );
    }
    if (isLoading) {
        return (
            <LoadingSkeleton/>
        )
    }

    return (
        <div className="bg-white">
            <div className="mx-auto mb-32 max-w-7xl px-4 pt-24 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 ">
                    {/* image */}
                    <div>
                        <Swiper
                            spaceBetween={10}
                            navigation={true}
                            thumbs={{ swiper: thumbsSwiper }}
                            modules={[FreeMode, Thumbs]}
                            className="mySwiper2"
                        >
                            {data?.productImg.map((img, index) => (
                                <SwiperSlide key={index}>
                                    <div className="relative overflow-hidden rounded-2xl bg-gray-100 pt-[100%]">
                                        <div className="absolute inset-0 translate-x-1/2 translate-y-1/2">
                                            <LazyLoadImage
                                                src={img}
                                                alt={data?.data.desc}
                                                effect="blur"
                                                className="absolute top-0 left-0 h-full w-auto -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-in-out group-hover:scale-105 group-hover:opacity-75"
                                            />
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                        {/*<Swiper*/}
                        {/*    onSwiper={setThumbsSwiper}*/}
                        {/*    spaceBetween={16}*/}
                        {/*    slidesPerView={4}*/}
                        {/*    freeMode={true}*/}
                        {/*    watchSlidesProgress={true}*/}
                        {/*    modules={[FreeMode, Thumbs]}*/}
                        {/*    className="mySwiper mt-4"*/}
                        {/*>*/}
                            {console.log("1111111111",data)}
                            {/*{data?.productImg === null || undefined ? null : (*/}
                            {/*    <>*/}
                            {/*        {console.log("11111111111111",data)}*/}
                            {/*    /!*{data?.productImg?.map((img, index) => (*!/*/}
                            {/*    /!*    <SwiperSlide key={index}>*!/*/}
                            {/*    /!*        <div className="relative overflow-hidden rounded-2xl bg-gray-100 pt-[100%]">*!/*/}
                            {/*    /!*            <div className="absolute inset-0 translate-x-1/2 translate-y-1/2">*!/*/}
                            {/*    /!*                <LazyLoadImage*!/*/}
                            {/*    /!*                    src={img}*!/*/}
                            {/*    /!*                    alt={data.desc}*!/*/}
                            {/*    /!*                    effect="blur"*!/*/}
                            {/*    /!*                    className="absolute top-0 left-0 h-full w-auto -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-in-out group-hover:scale-105 group-hover:opacity-75"*!/*/}
                            {/*    /!*                />*!/*/}
                            {/*    /!*            </div>*!/*/}
                            {/*    /!*        </div>*!/*/}

                            {/*    /!*    </SwiperSlide>*!/*/}

                            {/*    /!*))}*!/*/}
                            {/*    </>*/}
                            {/*) }*/}
                        {/*</Swiper>*/}

                    </div>
                    {/* Product info */}
                    <div className="mx-auto w-full pl-0 pt-10 pb-16 lg:pl-8 lg:pt-0 lg:pb-24">
                        {/* Title */}
                        <div className=" lg:border-gray-200 lg:pr-8">
                            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                                {data?.name}
                            </h1>
                        </div>
                        <div className="mt-4 lg:mt-0">
                            <h2 className="sr-only">Product information</h2>
                            <p className="mt-4 text-3xl tracking-tight text-gray-900">
                                ${data?.data.price}
                                {/*{moneyInfo ? (*/}
                                {/*    <h5>*/}
                                {/*        Korea is {data?.price * moneyInfo.rates.KRW}원*/}
                                {/*    </h5>*/}
                                {/*) : null}*/}
                                {/*{moneyInfo ? (*/}
                                {/*    <h5>*/}
                                {/*        Japan is {data?.price * moneyInfo.rates.JPY}엔*/}
                                {/*    </h5>*/}
                                {/*) : null}*/}
                                <h5>korea is {data?.data.price * moneyInfo?.rates?.KRW.slice(0,5)}원</h5>
                                <h5>Japan is {data?.data.price * moneyInfo?.rates?.JPY.slice(0,5)}엔</h5>
                            </p>
                        </div>

                        <div className="mt-10">
                            <div className=" lg:border-gray-200 lg:pr-8">
                                <p className="text-xl font-bold tracking-tight text-gray-900 sm:text-2xl">
                                    Location: {data?.data.region}
                                </p>
                            </div>
                        </div>

                        <div className="mt-8">
                            <div className=" lg:border-gray-200 lg:pr-8">
                                <p className="text-xl font-bold tracking-tight text-gray-900 sm:text-2xl">
                                    Brand: {data?.data.brand}
                                </p>
                            </div>
                        </div>
                        <div className="mt-10">
                            <div className=" lg:border-gray-200 lg:pr-8">
                                <p className="text-xl font-bold tracking-tight text-gray-900 sm:text-2xl">
                                    {data?.category?.map((c, index) => (
                                        <button
                                            className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                                            key={index} // 각 버튼에 고유한 키 추가
                                            style={{ marginRight: '8px' }} // 오른쪽 마진을 추가
                                        >
                                            {c}
                                        </button>
                                    ))}
                                </p>
                            </div>

                        </div>


                        <Button
                            text="Reservation"
                            onClick={() => {
                                setShowReservationModal(true);
                            }}
                            // onClick={() => {
                            //     const id = ?.id;
                            //     const image = productData?.image[0];
                            //     const title = productData?.title;
                            //     const price = productData?.price;
                            //     return checkCartItem({
                            //         id,
                            //         image,
                            //         title,
                            //         price,
                            //     });
                            // }}
                            className="mt-10 flex max-h-[44px] w-full items-center justify-center rounded-md border border-transparent bg-violet-500 py-2 px-8 text-base font-medium leading-7 text-white hover:bg-violet-600"
                        />
                        {showReservationModal && (
                            <ReservationModal
                                productData={data}
                                onClose={() => {
                                    // When the modal is closed, set the state to hide the modal
                                    setShowReservationModal(false);
                                }}
                                />
                        )}

                        {/*    /!*</div>*!/*/}
                        {/*</div>*/}


                        <div className="py-10 lg:border-gray-200 lg:pt-6 lg:pb-16">
                             Description
                                <div className="mt-4">
                                    <ul
                                        role="list"
                                        className="list-disc space-y-2 pl-4 text-sm"
                                    >
                                        {data?.desc?.map((d, index) => (
                                            <li key={index} className="text-gray-400">
                                                <span className="text-gray-600">{d}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                        {/*    <div className="mt-10">*/}
                        {/*        <h2 className="text-sm font-medium text-gray-900">Details</h2>*/}

                        {/*        <div className="mt-4 space-y-6">*/}
                        {/*            <p className="text-sm text-gray-600">*/}
                        {/*                {data?.desc}*/}
                        {/*            </p>*/}
                        {/*        </div>*/}
                        {/*    </div>*/}

                        {/*</div>*/}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;