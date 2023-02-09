import React from "react";
function Card({ url, height }) {
    return (
        <div
            style={{
                backgroundImage: `url(${url})`,
                height: height,
                width: '200px',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                borderRadius: '4px',
                marginBottom: '0.4rem',
            }}  >
        </div>
    )
}
export default Card;
