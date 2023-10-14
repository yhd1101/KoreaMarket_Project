import React from 'react';

const KakaoLoginButton = ({ text, onClick, disabled, className, icon }) => {
    const handleKakaoLogin = () => {
        const popup = window.open('http://localhost:8000/api/auth/kakao', 'Kaako Login', 'width=800,height=600');

        const receiveLoginCompleteMessage = (event) => {
            if (event.origin === 'http://localhost:8000' && event.data === 'loginComplete') {
                popup.close();

                // 여기서 프론트엔드에서 사용자 정보를 처리할 수 있습니다.
                // 예: 로그인 상태 유지, 사용자 정보를 상태에 저장 등
            }
        };

        window.addEventListener('message', receiveLoginCompleteMessage);
    };

    return (
        <button
            onClick={handleKakaoLogin}
            className={`flex max-h-[44px] items-center justify-center rounded-md transition-all ${
                className ?? ""
            }`}
            disabled={disabled}
            aria-label={text}
        >
            {icon && React.createElement(icon)}
            {text}
        </button>
    );
};

export default KakaoLoginButton;