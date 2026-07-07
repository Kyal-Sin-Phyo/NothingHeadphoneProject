import React from "react";
const rings = [100, 230, 400, 560];

const BackgroundRings = React.memo(() => {
    return (
        <>
            {rings.map(size => {
                return (
                    <span style={{ width: size, height: size }} key={size} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-l-border border-r-border border-y-0 opacity-30 z-0"></span>
                )
            })}
        </>
    )
})

export default BackgroundRings;