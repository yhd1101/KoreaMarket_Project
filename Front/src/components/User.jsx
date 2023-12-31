export default function User({ displayName, profileImg, mobile }) {
    return (
        <div className="flex items-left">
            {!mobile && <p className="mr-2">{displayName}</p>}
            <img
                className="h-[90px] w-[90px] rounded border border-gray-300"
                src={
                    profileImg === 'default' || !profileImg
                        ? '/images/default_image.webp'
                        : profileImg
                }
                alt={displayName ?? 'Anonymous'}
            />
            {mobile && <p className="ml-2">{displayName}</p>}
        </div>
    );
}