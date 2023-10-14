import {
    GlobeAltIcon,
    CurrencyDollarIcon,
    WalletIcon,
} from "@heroicons/react/24/outline";
import { FaMobile } from "react-icons/fa";
import {useTranslation} from "react-i18next";
import i18n from "../../lang/i18n";
import {useContext} from "react";
import LocaleContext from "../../LocaleContext";

const LanguageSelector = () => {
    const {t } = useTranslation();
    const {locale} = useContext(LocaleContext);

    const changeLocale = (l) => {
        if (locale !== l) {
            i18n.changeLanguage(l);
        }
    };

    const displayLanguage = (l) => {
        switch (l) {
            case 'ko-KR':
                return '한국어';
            case 'en-US':
                return 'English';
            case 'jp-JP':
                return '日本語';
            case 'cn-CN':
                return '中国话';
            default:
                return '';
        }
    };
}

export const MAIN_DATA = [

    {
        name: "polo",
        price: 0.01,
        time: "16: 21: 01",
        image: "https://www.innovill.com/shopimages/juinnovill/006000129681.jpg?1694745940",
        rotation: "-rotate-[12deg]",
        scale: "scale-[.8]",
        direction: "left-0 right-[unset] lg:left-[unset] lg:right-[120px]",
    },
    {
        name: "Burberry",
        price: 0.02,
        time: "12: 21: 01",
        image: "https://assets.burberry.com/is/image/Burberryltd/709BA03F-AA3A-4863-B55F-E86BF44E760C?$BBY_V2_SL_1x1$&wid=1251&hei=1251",
        zIndex: "z-10",
        direction: "right-[unset] lg:right-[60px]",
    },
    {
        name: "Happy Jolly #14",
        price: 0.01,
        time: "08: 21: 01",
        image: "https://assets.burberry.com/is/image/Burberryltd/603C9580-3210-46A0-9E90-0EA631ACCF10?$BBY_V2_SL_1x1$&wid=1251&hei=1251",
        rotation: "rotate-[12deg]",
        scale: "scale-[.8]",
        direction: "right-0",

    }
];

export const FAQ_DATA= [
    {
        name: "Which country is primarily served, and is it exclusive to Koreans?",
        description: "Our primary audience is Korean, but Korea Market is open to customers from around the world. We welcome everyone to explore our platform, connect with Korean sellers, and discover authentic treasures. While our focus is on serving the Korean community, our doors are wide open to all who wish to experience the richness of Korean culture and craftsmanship. Join us today and be part of our global community!",
        icon: GlobeAltIcon,
        color: "bg-violet-500",
    },
    {
        name: i18n.t("Is it available as a mobile app as well?"),
        description:
            "At the moment, it's not available as a mobile app, but we plan to launch one in the near future.",
        icon: FaMobile,
        color: "bg-blue-500",
    },
    {
        name: "How are the costs structured? Is it in dollars or Korean won?",
        description: `Our platform is designed for direct transactions, so whether it's in dollars or Korean won, it doesn't matter. One of the advantages of our site is that when you list a product, it automatically calculates the currency exchange based on the country, making it convenient for both local and international users. This feature ensures a seamless and user-friendly experience for all our members. Join us today to experience the simplicity and flexibility of Korea Market`,
        icon: CurrencyDollarIcon,
        color: "bg-green-500",
    },
    {
        name: "How do I make a purchase?",
        description: `1. Search for the desired product using categories or product names.
        2. Click on the product to enter its details and confirm if it meets your criteria. Check the cost, which includes currency conversion.
        3. Choose a date, add any necessary notes, and specify the location. Click the 'Reserve' button located in the upper right corner.
        4. Once the date and location are confirmed, proceed with the direct transaction.
        5. To ensure trustworthiness for future transactions, both parties may rate each other with a trust score.
        `,
        icon: WalletIcon,
        color: "bg-orange-500",
    },
];

// 한국어 번역
export const FAQ_DATA_korea = [
    {
        name: "주로 어떤 국가를 위해 서비스되며, 한국인에게만 제한되는가요?",
        description: "우리의 주요 대상은 한국인이지만, 한국 시장은 전 세계의 고객에게 열려 있습니다. 우리는 모든 분들이 우리의 플랫폼을 탐험하고 한국 판매자와 연결하며 정통한 보물을 발견할 수 있도록 환영합니다. 한국 커뮤니티를 서비스하는 것이 우리의 중점이지만, 한국 문화와 장인 정신의 풍부함을 경험하고자 하는 모든 분들에게도 문을 활짝 열어 놓았습니다. 오늘 우리의 글로벌 커뮤니티의 일원이 되어 보세요!",
        icon: GlobeAltIcon,
        color: "bg-violet-500",
    },
    {
        name: "모바일 앱으로도 사용 가능한가요?",
        description:
            "현재로서는 모바일 앱으로 제공되지 않지만, 곧 출시할 계획입니다.",
        icon: FaMobile,
        color: "bg-blue-500",
    },
    {
        name: "비용은 어떻게 구성되어 있으며, 달러 또는 원으로 계산되나요?",
        description: "우리의 플랫폼은 직거래를 위해 설계되었으므로 달러이든 원화이든 상관없습니다. 우리 사이트의 장점 중 하나는 제품을 등록할 때 국가별로 통화 환율을 자동으로 계산한다는 것입니다. 이 기능을 통해 지역 및 국제 사용자 모두에게 편리한 경험을 제공합니다. 오늘 가입하여 한국 마켓의 간단하고 유연한 경험을 누려보세요.",
        icon: CurrencyDollarIcon,
        color: "bg-green-500",
    },
    {
        name: "어떻게 구매를 진행하나요?",
        description: `1. 카테고리 또는 제품 이름을 사용하여 원하는 제품을 검색합니다.
        2. 제품을 클릭하여 상세 정보를 확인하고 기준을 충족하는지 확인합니다. 통화 환산을 포함한 비용을 확인합니다.
        3. 날짜를 선택하고 필요한 메모를 추가하고 위치를 지정합니다. 오른쪽 상단에 있는 '예약' 버튼을 클릭합니다.
        4. 날짜와 위치가 확인되면 직거래를 진행합니다.
        5. 미래 거래의 신뢰성을 보장하기 위해 양쪽 모두 신뢰 점수로 평가할 수 있습니다.
        `,
        icon: WalletIcon,
        color: "bg-orange-500",
    },
];
