import { useEffect } from "react";

function GoogleAd({ id }) {

    useEffect(() => {
        window.adsbygoogle = (window.adsbygoogle || []).push({});
    }, []);

    return (
        <div className={id}>
            <ins className="adsbygoogle"
                style={{ display: "block" }}
                data-ad-client="ca-pub-0129100887757604"
                data-ad-slot="4752959226"
                data-ad-format="auto"
                data-full-width-responsive="true"></ins>
        </div>
    );
};

export default GoogleAd;