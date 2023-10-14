import React, {forwardRef, Fragment, useContext} from 'react';
import {ArrowLeftOnRectangleIcon, Bars3Icon, PencilSquareIcon, ShoppingBagIcon} from "@heroicons/react/24/outline";
import {Link, useLocation, useNavigate} from "react-router-dom";
import {Popover, Transition} from "@headlessui/react";
import {headerData} from "../../data/layout/layoutData";
import CartStatus from "../CartStatus";
import LoadingSkeleton from "../ui/LoadingSkeleton";
import User from "../User";
import {ClockIcon} from "@heroicons/react/24/outline";
import i18n from "../../lang/i18n";
import {useTranslation} from "react-i18next";
import LocaleContext from "../../LocaleContext";
const MenuDesktop = forwardRef(
    function (
        {
            classNames,
            setOpen,
            userData,
            navigate,
            loading,
            logout,
            isAdmin,
            onMouseEnter,
            onMouseLeave,
            // changeLocale,
            // displayLanguage,
            // i18n
        },
        ref,
    )

        {
            const navigation = useLocation()
            const { t } = useTranslation();
            const { locale  } = useContext(LocaleContext)
            const changeLocale = (l) => {
                if (locale !== l) {
                    i18n.changeLanguage(l)
                    console.log(`Changed language to ${l}`);
                }
            }
            console.log("kkkkkkk", locale)
            const displayLanguage = (l) => {
                switch (l){
                    case "ko-KR":
                        return "한국어"
                    case "en-US" :
                        return "English"
                    case "jp-JP" :
                        return "日本語"
                    case "cn-CN" :
                        return "中国话"
                    default:
                        return ""
                }
            }


            return (
                <nav
                    className={`mt-auto border-t border-gray-200 ${
                        navigation.pathname === "/login" || navigation.pathname === "/signup" || navigation.pathname === "/profile" || navigation.pathname === "/order"
                            ? "hidden"
                            : "block"
                    }`}
                >
                    <div
                        aria-label="Top"
                        className="mx-auto max-w-7xl border-gray-200 bg-white px-4 sm:px-6 lg:px-8"
                    >
                        <div className="flex h-16 items-center">
                            {/* Mobile hamburger menu */}
                            <button
                                type="button"
                                className="rounded-md bg-white p-2 text-gray-400 lg:hidden"
                                // onClick={() => setOpen(true)}
                            >
                                <span className="sr-only">Open menu</span>
                                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                            </button>
                            {/* Logo */}
                            <div className="ml-4 flex lg:ml-0">
                                <Link to="/" className="flex items-center">
                                    <img src={"images/shop.png"}/>
                                </Link>
                            </div>
                            {/* Flyout menus */}
                            <Popover.Group className="z-50 hidden lg:ml-8 lg:block lg:self-stretch">
                                <div className="flex h-full space-x-8">
                                    {/*{headerData.categories.map((category, index) => (*/}
                                    {/*    <Popover key={category.name} className="flex">*/}
                                    {/*        {({open}) => (*/}
                                    {/*            <>*/}
                                    {/*                <div className="relative flex">*/}
                                    {/*                    <Popover.Button*/}
                                    {/*                        className={classNames(*/}
                                    {/*                            open*/}
                                    {/*                                ? 'border-violet-500 text-violet-500'*/}
                                    {/*                                : 'border-transparent text-gray-700 hover:text-gray-800',*/}
                                    {/*                            'relative z-10 -mb-px flex items-center border-b-2 pt-px text-sm font-medium transition-colors duration-200 ease-out  focus:outline-none ',*/}
                                    {/*                        )}*/}
                                    {/*                    >*/}
                                    {/*                        {category.name}*/}
                                    {/*                    </Popover.Button>*/}
                                    {/*                </div>*/}
                                    {/*            </>*/}
                                    {/*        )}*/}
                                    {/*    </Popover>*/}
                                    {/*))}*/}
                                </div>
                            </Popover.Group>
                            {/* Auth & cart menus */}
                            <div className="ml-auto flex items-center">
                                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                                    <div className="hidden items-center justify-end md:flex md:flex-1">
                                        {loading && !userData && (
                                            <LoadingSkeleton className={"h-10 w-10 animate-pulse rounded-md bg-gray-200"}/>
                                        )}
                                        {userData && (
                                            <div className="flex items-center">
                                                <Popover className="relative hidden leading-3 md:block">
                                                    {({ open }) => (
                                                        <>
                                                            {/*<div>*/}
                                                            <div onMouseLeave={onMouseLeave.bind(null, open)}>
                                                                <Popover.Button
                                                                    className={classNames(
                                                                        open ? 'text-gray-900' : 'text-gray-500',
                                                                        'group inline-flex items-center rounded-md bg-white text-base font-medium hover:text-gray-900 focus:outline-none ',
                                                                    )}
                                                                    ref={ref}
                                                                    onMouseEnter={onMouseEnter.bind(null, open)}
                                                                    onMouseLeave={onMouseLeave.bind(null, open)}
                                                                >
                                                                    <User
                                                                        displayName={userData.name}
                                                                        profileImg={userData.profileImg}
                                                                        mobile={false}
                                                                    />
                                                                </Popover.Button>
                                                                <Transition
                                                                    as={Fragment}
                                                                    enter="transition ease-out duration-200"
                                                                    enterFrom="opacity-0 translate-y-1"
                                                                    enterTo="opacity-100 translate-y-0"
                                                                    leave="transition ease-in duration-150"
                                                                    leaveFrom="opacity-100 translate-y-0"
                                                                    leaveTo="opacity-0 translate-y-1"
                                                                >
                                                                    <Popover.Panel className="absolute left-32 z-50 mt-0 w-[250px] max-w-sm -translate-x-1/2 px-4 pt-3 sm:px-0 lg:max-w-3xl">
                                                                        <div
                                                                            className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black/5"
                                                                            onMouseEnter={onMouseEnter.bind(null, open)}
                                                                            onMouseLeave={onMouseLeave.bind(null, open)}
                                                                        >
                                                                            <div className="relative grid  bg-white ">
                                                                                <div className="p-4">
                                                                                    <Popover.Button
                                                                                        onClick={() => navigate('/profile')}
                                                                                        className="flex w-full items-center rounded-lg p-3 hover:bg-gray-50"
                                                                                    >
                                                                                        <PencilSquareIcon className="h-4 w-4" />
                                                                                        <p className="ml-3 text-base font-medium text-gray-900">
                                                                                            Edit Profile
                                                                                        </p>
                                                                                    </Popover.Button>
                                                                                    <Popover.Button
                                                                                        onClick={() => navigate('/order')}
                                                                                        className="flex w-full items-center rounded-lg p-3 hover:bg-gray-50"
                                                                                    >
                                                                                        <ClockIcon className="h-4 w-4" />
                                                                                        <p className="ml-3 text-base font-medium text-gray-900">
                                                                                            Order History
                                                                                        </p>
                                                                                    </Popover.Button>
                                                                                </div>
                                                                            </div>
                                                                            <div className="flex items-center bg-gray-50 py-4 px-8">
                                                                                <Popover.Button
                                                                                    className="flex items-center text-sm font-medium text-violet-500 hover:text-violet-600"
                                                                                    onClick={logout}
                                                                                >
                                                                                    <ArrowLeftOnRectangleIcon className="h-4 w-4" />
                                                                                    <p className="ml-3 text-base font-medium text-violet-500">
                                                                                        Sign out
                                                                                    </p>
                                                                                </Popover.Button>
                                                                            </div>
                                                                        </div>
                                                                    </Popover.Panel>
                                                                </Transition>
                                                            </div>
                                                        </>
                                                    )}
                                                </Popover>
                                            </div>
                                        )}
                                    </div>
                                    {!loading && !userData && (
                                        <>
                                            <Link
                                                to="/login"
                                                className="text-sm font-medium text-gray-700 hover:text-gray-800"
                                            >
                                                Sign in
                                            </Link>
                                            <span className="h-6 w-px bg-gray-200" aria-hidden="true" />
                                            <Link
                                                to="/signup"
                                                className="text-sm font-medium text-gray-700 hover:text-gray-800"
                                            >
                                                Create account
                                            </Link>
                                        </>
                                    )}
                                </div><Popover className="relative hidden leading-3 md:block">
                                {({ open }) => (
                                    <>
                                        {/*<div>*/}
                                        <div onMouseLeave={onMouseLeave.bind(null, open)}>
                                            <Popover.Button
                                                className={classNames(
                                                    open ? 'text-gray-900' : 'text-gray-500',
                                                    'group inline-flex items-center rounded-md bg-white text-base font-medium hover:text-gray-900 focus:outline-none ',
                                                )}
                                                ref={ref}
                                                onMouseEnter={onMouseEnter.bind(null, open)}
                                                onMouseLeave={onMouseLeave.bind(null, open)}
                                            >
                                                <div  title={displayLanguage(i18n.language)}  className="hidden lg:ml-8 lg:flex">
                                                    <img
                                                        src="https://tailwindui.com/img/flags/flag-canada.svg"
                                                        alt=""
                                                        className="block h-auto w-5 shrink-0"
                                                    />
                                                    {/*<FlagIconUS className="w-6 h-6" />*/}
                                                    <span onClick={() => changeLocale("en-US")} className="ml-3 block text-sm font-medium text-gray-800">{t("USA")}
                                                </span>
                                                </div>
                                            </Popover.Button>
                                            <Transition
                                                as={Fragment}
                                                enter="transition ease-out duration-200"
                                                enterFrom="opacity-0 translate-y-1"
                                                enterTo="opacity-100 translate-y-0"
                                                leave="transition ease-in duration-150"
                                                leaveFrom="opacity-100 translate-y-0"
                                                leaveTo="opacity-0 translate-y-1"
                                            >

                                                <Popover.Panel className="absolute left-32 z-50 mt-0 w-[250px] max-w-sm -translate-x-1/2 px-4 pt-3 sm:px-0 lg:max-w-3xl">
                                                    <div
                                                        className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black/5"
                                                        onMouseEnter={onMouseEnter.bind(null, open)}
                                                        onMouseLeave={onMouseLeave.bind(null, open)}
                                                    >
                                                        <div className="relative grid  bg-white ">
                                                            <div className="p-4" title={displayLanguage(i18n.language)}>
                                                                <Popover.Button
                                                                    className="flex w-full items-center rounded-lg p-3 hover:bg-gray-50"
                                                                >
                                                                    <p onClick={() => changeLocale("ko-KR")} className="ml-3 text-base font-medium text-gray-900">
                                                                        {t("KOREA")}
                                                                    </p>
                                                                </Popover.Button>
                                                                <Popover.Button
                                                                    className="flex w-full items-center rounded-lg p-3 hover:bg-gray-50"
                                                                >
                                                                    <p onClick={() => changeLocale("jp-JP")} className="ml-3 text-base font-medium text-gray-900">
                                                                        {t("JAPAN")}
                                                                    </p>
                                                                </Popover.Button>
                                                                <Popover.Button
                                                                    className="flex w-full items-center rounded-lg p-3 hover:bg-gray-50"
                                                                >
                                                                    <p onClick={() => changeLocale("cn-CN")} className="ml-3 text-base font-medium text-gray-900">
                                                                        {t("CHINA")}
                                                                    </p>
                                                                </Popover.Button>

                                                            </div>
                                                        </div>
                                                        <div className="flex items-center bg-gray-50 py-4 px-8">
                                                            <Popover.Button
                                                                className="flex items-center text-sm font-medium text-violet-500 hover:text-violet-600"
                                                                onClick={logout}
                                                            >
                                                                <ArrowLeftOnRectangleIcon className="h-4 w-4" />
                                                                <p className="ml-3 text-base font-medium text-violet-500">
                                                                    Sign out
                                                                </p>
                                                            </Popover.Button>
                                                        </div>
                                                    </div>
                                                </Popover.Panel>

                                            </Transition>
                                        </div>
                                    </>
                                )}
                            </Popover>

                                {/*<div className="hidden lg:ml-8 lg:flex">*/}
                                {/*    <img*/}
                                {/*        src="https://tailwindui.com/img/flags/flag-canada.svg"*/}
                                {/*        alt=""*/}
                                {/*        className="block h-auto w-5 shrink-0"*/}
                                {/*    />*/}
                                {/*    <span className="ml-3 block text-sm font-medium text-gray-800">*/}
                                {/*        CAD*/}
                                {/*    </span>*/}
                                {/*</div>*/}
                                {/* Cart */}
                                <div className="ml-4 flow-root lg:ml-6">
                                    <Link to="/carts" className="group -m-2 flex items-center p-2">
                                        <ShoppingBagIcon
                                            className="h-6 w-6 shrink-0 text-gray-400 group-hover:text-gray-500"
                                            aria-hidden="true"
                                        />
                                        <CartStatus />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            );
        }
    )
        MenuDesktop.displayName = "MenuDesktop"
        export default MenuDesktop;