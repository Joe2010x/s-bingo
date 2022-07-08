import React, { useEffect, useState } from 'react';

const DisplayBox = ({ number }) => {
    const [value, setValue] = useState(number.toString());
    const [effect,setEffect] = useState ("noise");
    useEffect(() => {
        setTimeout(() => {
            setEffect("quiet");
            setValue("");
        }, 1000);
    }, [])

    return (
        <div className={effect}>{value}</div>
      
    )
}

export default DisplayBox;