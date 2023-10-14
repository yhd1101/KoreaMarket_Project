import { LazyLoadImage } from "react-lazy-load-image-component";
import ImagePlaceholder from "../ui/ImagePlaceholder";
import {useTranslation} from "react-i18next";
import i18n from "../../lang/i18n";
import {useContext} from "react";
import LocaleContext from "../../LocaleContext";

const Intro = () => {
    const { t} = useTranslation()

    const changeLocale = (l) => {
        if (locale !== l) {
            i18n.changeLanguage(l)
        }
    }

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

    const { locale } = useContext(LocaleContext)
    return (
        <section className="mt-16 bg-slate-50 md:mt-32">
            <div className="mx-auto max-w-7xl">
                <div className="relative overflow-hidden px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl pt-16 sm:pt-20 lg:pt-24">
                        <div className="text-center">
                            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                                {t("What is Korea Market?")}
                            </h1>
                            <p className="mt-8 text-lg leading-6 text-violet-500">
                                {t("For Koreans Abroad: Your International Direct Trading Hub")}
                            </p>
                            <div className="relative pt-12 text-lg leading-8 text-gray-900">
                                <p>
                                    {t("Korea Market is a second-hand trading site for Koreans in the U.S. and Canada, and other foreigners can also use this site, even if they are not Koreans. This site is also a safe site where you can search for jobs and evaluate reliability. Korea Market offers multiple categories and provides convenient options for selecting your desired location, time, and more. It's your go-to platform for hassle-free transactions. merchandise.")}
                                    <br />
                                    {t("Join us in spreading joy and playfulness!")}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="relative inline-block w-full after:absolute after:-bottom-48 after:left-1/2  after:block after:h-72 after:w-72 after:-translate-x-1/2 after:rounded-full after:bg-pink-300">
                        <LazyLoadImage
                            src="https://cdn.pixabay.com/photo/2016/09/30/19/10/ecommerce-1706103_1280.png"
                            // sr={"file:///C:/Users/%EC%96%91%EB%8C%80%EB%8F%99/Downloads/online-shopping-store.png"}
                            // image={"/images/online-shopping-store.png"}
                            width={500}
                            height={300}
                            placeholder={<ImagePlaceholder />}
                            alt="Image Alt"
                            className="relative -bottom-2 z-10 mx-auto"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Intro;