import React, {useContext, useRef, useState} from 'react';
import MenuDesktop from "./MenuDeskTop";
import {useAuthContext} from "../../context/AuthContext";
import {classNames} from "../../utils/util";
import {useNavigate} from "react-router-dom";
import i18n from "../../lang/i18n";
import {useTranslation} from "react-i18next";
import localeContext from "../../LocaleContext";

const Navbar = () => {
    // const { t } = useTranslation()
    // const { locale } = useContext(localeContext)
    // const changeLocale = (l) => {
    //     if (locale !== l) {
    //         i18n.changeLanguage(l)
    //     }
    // }
    // const displayLanguage = (l) => {
    //     switch (l){
    //         case "ko-KR":
    //             return "한국어"
    //         case "en-US" :
    //             return "English"
    //         case "jp-JP" :
    //             return "日本語"
    //         case "cn-CN" :
    //             return "中国话"
    //         default:
    //             return ""
    //     }
    // }

    const navigate = useNavigate()
    const {user} = useAuthContext()
    // const isAdmin = user?.
    const logout = () => {
        localStorage.removeItem("token")
        localStorage.removeItem("userInfo")
    }
    const [open, setOpen] = useState(false);

    const buttonRef = useRef(null);
    const timeoutDuration = 200;
    let timeout

    const closePopover = () => {
        return buttonRef.current?.dispatchEvent(
            new KeyboardEvent('keydown', {
                key: 'Escape',
                bubbles: true,
                cancelable: true,
            }),
        );
    };

    const onMouseEnter = (open) => {
        clearTimeout(timeout);
        if (open) return;
        return buttonRef.current?.click();
    };

    const onMouseLeave = (open) => {
        if (!open) return;
        timeout = setTimeout(() => closePopover(), timeoutDuration);
    };
    return (
        <header className={"border-b"}>
            <MenuDesktop
                classNames={classNames}
                userData={user}
                navigate={navigate}
                logout={logout}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                setOpen={setOpen}
                ref={buttonRef}
                // changeLocale={changeLocale}
                // displayLanguage={displayLanguage}
            />
        </header>
    );
};

export default Navbar;