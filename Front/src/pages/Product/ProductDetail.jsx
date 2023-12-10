import React, {useEffect, useState} from 'react';
import ErrorMessage from "../../components/ui/ErrorMessage";
import {useParams} from "react-router-dom";
import useFetchProductById from "../../services/fetchProductById";
import {LazyLoadImage} from "react-lazy-load-image-component";
import {Swiper, SwiperSlide} from "swiper/react";
import {FreeMode, Thumbs} from "swiper";
import Button from "../../components/ui/Button";
import LoadingSkeleton from "../../components/ui/LoadingSkeleton";
import useFetchMoney from "../../services/fetchMoneyInfo";
import useFetchCommentById from "../../services/fetchCommentById";
import useCreateComment from "../../services/createComment";
import {useForm} from "react-hook-form";
import Input from "../../components/ui/Input";
import useCreateReservation from "../../services/createReservation";
import MapContainer from "../../components/Maps";
import {Calendar} from "primereact/calendar";
import axios from "axios";
import useFetchProductReviewById from "../../services/productReview";
import index from "../Home";

const ProductDetail = ( onClose) => {
    const { id } = useParams()
    const [reviewProfile, setReviewProfile] = useState("")
    const { data, isLoading, error} = useFetchProductById(id)
    const { data: moneyInfo, isLoading: moneyLoading, error: moneyError  } = useFetchMoney()
    const [thumbsSwiper, setThumbsSwiper] = useState(null)
    const [showReservationModal, setShowReservationModal] = useState(false); // 모달 가시성을 제어하는 상태
    const { data: createComment, mutateAsync} = useCreateComment()
    const {id: commentId} = useParams()
    const { data: getComment, isLoading: LoadingComment, error: commentError } = useFetchCommentById(commentId)
    const { data: createReservation, mutateAsync: reservationMutateAsync  } =useCreateReservation()

    const sellerId = data?.seller?.id
    const {data: productReview , isLoading: productReviewLoading, error: productReviewError} = useFetchProductReviewById(sellerId)
    console.log("00000000", commentId)
    console.log("dddd",sellerId)
    console.log("review:", productReview)



    const {
        register,
        handleSubmit,
        formState: { isSubmitting, errors, isDirty}
    } = useForm()

    // const productReviewSubmit = async (id) => {
    //     try {
    //
    //         const res = await axios.get(`http://localhost:8000/api/rating/${id}`)
    //         console.log("seler:", res.data)
    //     } catch (err) {
    //         console.log(err)
    //     }
    // }



    const commentSubmit =  async (values) => {
        const { desc } = values
        const userInput = {
            desc, product : id
        }
        console.log("coments Create: +++++++++++++++++++++", userInput)
        await mutateAsync(userInput)
    }

    const reservationSubmit = async (values) => {
        const {location, description, purchase, reservationDate} = values
        console.log("ddddwdads",values)
        const userInput = {
             purchase: false, product: id,desc: description, location,
            reservationDate
        }

        await reservationMutateAsync(userInput)
        console.log("5555555", userInput)
        setShowReservationModal(false)
    }


    const getToday = () => {
        let today = new Date()
        let year = today.getFullYear()
        let month = today.getMonth() + 1 //월
        let date = today.getDate() //날짜
        let day = today.getDay() //요일

        return year + '/' + month + '/' + date
    }


    // //환율 데이터 로딩 중 또는 에러 처리
    // if (moneyLoading) {
    //     return <LoadingSkeleton />;
    // }
    //
    // if (moneyError) {
    //     return (
    //         <div className="mt-20">
    //             <ErrorMessage />
    //         </div>
    //     );
    // }
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
    // useEffect(() => {
    //     productReviewSubmit(sellerId)
    // }, [sellerId]);

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
                                                alt={data?.desc}
                                                // effect="blur"
                                                className="absolute top-0 left-0 h-full w-auto -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-in-out group-hover:scale-105 group-hover:opacity-75"
                                            />
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                        {/*{productReview?.data?.length}*/}
                        {productReview?.data?.map((r, index) => (
                            <h1>{r.review}</h1>
                        ))}

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
                                ${data?.price}
                                <h5 className={"mt-4"}>korea is {(data?.price * moneyInfo?.rates.KRW.slice(0,5)).toLocaleString()}원</h5>
                                <h5 className={"mt-3"}>Japan is {(data?.price * moneyInfo?.rates.JPY.slice(0,7)).toLocaleString()}엔</h5>
                            </p>
                        </div>

                        <div className="mt-10">
                            <div className=" lg:border-gray-200 lg:pr-8">
                                <p className="text-xl font-bold tracking-tight text-gray-900 sm:text-2xl">
                                    Location: {data?.region}
                                </p>
                            </div>
                        </div>

                        <div className="mt-8">
                            <div className=" lg:border-gray-200 lg:pr-8">
                                <p className="text-xl font-bold tracking-tight text-gray-900 sm:text-2xl">
                                    Brand: {data?.brand}
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
                                setShowReservationModal(true)
                            }}
                            className="mt-10 flex max-h-[44px] w-full items-center justify-center rounded-md border border-transparent bg-violet-500 py-2 px-8 text-base font-medium leading-7 text-white hover:bg-violet-600"
                        />
                        {showReservationModal && (
                            <div className="modal-container" > {/* CSS 클래스를 추가합니다. */}
                                <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
                                    <div className="relative w-full h-full max-w-5xl mx-auto my-4">
                                        <div className="relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none">
                                            <div className="flex items-start justify-between p-3 border-b border-solid rounded-t border-blueGray-200">
                                                <h3 className="text-3xl font-semibold">Reservation</h3>
                                                <button
                                                    className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                                    onClick={() => setShowReservationModal(false)}
                                                >
                                                    <span className="text-black h-6 w-6 text-2xl block outline-none focus:outline-none">×</span>
                                                </button>
                                            </div>
                                            <div className="relative p-6 flex-auto max-h-[80vh] min-h-[50vh] flex justify-center">
                                                <div className="mx-4 flex-1 ml-8" style={{ marginBottom: '1px' }}>
                                                    <MapContainer />

                                                </div>
                                                <div className="mx-4 flex-1 text-left ">
                                                    <div className="mt-4">
                                                        <h1 className="text-xl font-semibold">Seller information</h1>
                                                    </div>
                                                    <div>
                                                        <div className={"mb-1"}>
                                                            <span className="font-semibold">seller name:</span> {data.seller.name}
                                                        </div>
                                                        <div className={"mb-1, mt-2"}>
                                                            <span className="font-semibold">seller email:</span> {data.seller.email}
                                                            <form className="flex w-full max-w-sm flex-col" onSubmit={handleSubmit(reservationSubmit)}>
                                                                <div className="max-w-sm rounded overflow-hidden shadow-lg">
                                                                    <Calendar
                                                                        showTime
                                                                        hourFormat="24"
                                                                        placeholder={getToday()}
                                                                        {...register('reservationDate')}
                                                                    />

                                                                    {/*<Calendar*/}
                                                                    {/*    showTime*/}
                                                                    {/*    hourFormat="24"*/}
                                                                    {/*    // value={dateTime}*/}
                                                                    {/*    // onChange={e => setDateTime(e.target.value)}*/}
                                                                    {/*    // onChange={onChange}*/}
                                                                    {/*    // value={dateValue}*/}
                                                                    {/*    placeholder={getToday()} //현재 시간 가이드 오늘날짜로 보여줌*/}
                                                                    {/*/>*/}
                                                                </div>
                                                                <input
                                                                    {...register('description', {
                                                                        required: 'Please provide a name.',
                                                                        maxLength: {
                                                                            value: 20,
                                                                            message: 'Name needs to be between 1 to 20 characters.',
                                                                        },
                                                                    })}
                                                                    ariaInvalid={isDirty}
                                                                    labelText="Desc"
                                                                    type="text"
                                                                    className="mb-3"
                                                                    autocomplete="on"
                                                                />
                                                                <Input
                                                                    {...register('location', {
                                                                        required: 'location',
                                                                    })}
                                                                    ariaInvalid={isDirty}
                                                                    labelText="location"
                                                                    type="text"
                                                                    className="mb-3 mt-3"
                                                                    autocomplete="on"
                                                                />
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>


                                            <form onSubmit={handleSubmit(reservationSubmit)}>
                                                <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                                    <button
                                                        onClick={() => console.log("dsadadwwqeqr")}
                                                        type="submit"
                                                        class="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                                                    >
                                                        Reservation
                                                    </button>
                                                    <button
                                                        onClick={() => setShowReservationModal(false)}
                                                        type="button"
                                                        class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                                                    >
                                                        Cancel
                                                    </button>

                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}


                        <div className=" lg:border-gray-200 lg:pr-8 mt-3">
                            <p className="text-xl font-bold tracking-tight text-gray-900 sm:text-2xl">
                                Description
                            </p>

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




                        <div className=" lg:border-gray-200 lg:pr-8 mt-3 justify-left">
                            <p className="text-xl font-bold justify-left tracking-tight text-gray-900 sm:text-2xl">
                                Comment
                            </p>
                            <form  onSubmit={handleSubmit(commentSubmit)} className="mb-3">
                                <div className="relative flex h-15 w-full min-w-[200px] max-w-[40rem]">
                                    <input
                                        {...register('desc', {
                                            required: '',
                                        })}
                                        type="text"
                                        // className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg"
                                        className="peer h-full w-full rounded-[7px] border border-blue-gray-200  px-3 py-2.5 pr-20 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200  disabled:border-0 disabled:bg-blue-gray-50"
                                        placeholder="Insert Comment"
                                        required
                                    />
                                    <button
                                        disabled={isSubmitting}
                                        type={"submit"}
                                        className="!absolute right-1 top-1 z-10 select-none rounded bg-blue-500 py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none peer-placeholder-shown:pointer-events-none peer-placeholder-shown:bg-blue-gray-500 peer-placeholder-shown:opacity-50 peer-placeholder-shown:shadow-none"
                                        data-ripple-light="true"
                                    >
                                        Comment
                                    </button>

                                </div>
                            </form>
                            <div className="grid grid-cols-5 w-full min-w-[200px] max-w-[40rem] ">
                                {data?.comments?.map((c, index) => (
                                    <>
                                       <div class="col-start-1 col-span-4">
                                           <p className="text-gray-600 text-lg text-base/6">{c.desc} </p>
                                           <p className="text-sm/4"> {c.createdAt.slice(0,10)}</p>
                                       </div>
                                        <div class="col-end-7 col-span-2">
                                             <p className="flex flex-col items-left">글쓴이: {c.user.name}</p>
                                        </div>
                                   </>

                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;