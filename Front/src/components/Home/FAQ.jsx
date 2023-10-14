import { FAQ_DATA, FAQ_DATA_korea } from "../../data/Home/homeData";
import i18n from "../../lang/i18n";
import {useTranslation} from "react-i18next";
import {useContext} from "react";
import LocaleContext from "../../LocaleContext";

const Faq = () => {
    const { t } = useTranslation()
    const { locale } = useContext(LocaleContext)

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

    // 선택된 언어에 따라 올바른 데이터 가져오기
    const getFAQDataByLocale = (locale) => {
        switch (locale) {
            case "ko-KR":
                return FAQ_DATA_korea;
            default:
                return FAQ_DATA;
        }
    }
    console.log("0000",locale)



    return (
        <section className="mx-auto my-32 w-full max-w-7xl py-4 px-6 sm:mt-44">
            <div className="grid grid-cols-none grid-rows-1 gap-20 lg:grid-cols-3">
                {/* Title */}
                <div className="col-span-2 mx-auto w-full text-left lg:col-span-1">
                    <p className="text-lg font-semibold leading-8 tracking-tight text-violet-500">
                        Your questions, <span className="text-violet-500">answered.</span>
                    </p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Frequently asked questions.
                    </h2>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        Can't find the answer you are looking for? Please{" "}
                        <a
                            href="mailto:jinpark0625@gmail.com"
                            className="font-medium text-violet-500"
                        >
                            contact
                        </a>{" "}
                        to us.
                    </p>
                </div>
                {/* contents */}
                <div className="col-span-2 mx-auto">
                    <dl className="flex flex-col gap-16">
                        {locale === "en-US" && FAQ_DATA.map((feature) => (
                            <div key={feature.name} className="relative pl-16">
                                <dt className="text-lg font-semibold leading-7 text-gray-900">
                                    <div
                                        className={`absolute top-0 left-0 flex h-10 w-10 items-center justify-center rounded-lg ${feature.color}`}
                                    >
                                        <feature.icon
                                            className="h-6 w-6 text-white"
                                            aria-hidden="true"
                                        />
                                    </div>
                                    {feature.name}
                                </dt>
                                <dd className="mt-2 whitespace-pre-line text-base leading-7 text-gray-600">
                                    {feature.description}
                                </dd>
                            </div>
                        ))}
                        {locale === "ko-KR" && FAQ_DATA_korea.map((feature) => (
                            <div key={feature.name} className="relative pl-16">
                                <dt className="text-lg font-semibold leading-7 text-gray-900">
                                    <div
                                        className={`absolute top-0 left-0 flex h-10 w-10 items-center justify-center rounded-lg ${feature.color}`}
                                    >
                                        <feature.icon
                                            className="h-6 w-6 text-white"
                                            aria-hidden="true"
                                        />
                                    </div>
                                    {feature.name}
                                </dt>
                                <dd className="mt-2 whitespace-pre-line text-base leading-7 text-gray-600">
                                    {feature.description}
                                </dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </section>
    );
};

export default Faq;