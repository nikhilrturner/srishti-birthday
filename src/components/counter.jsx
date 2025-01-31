import { useState, useEffect } from "react";

export const Counter = () => {
    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount(c => c+1)
    }

    return (
        <div>
            <button className="btn" onClick={handleClick}>
                {count}
            </button>
        </div>
    )
};