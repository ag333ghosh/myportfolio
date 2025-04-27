import { useEffect } from "react";
import { useState } from "react"

export const LoadingScreen = ({ onCmplete }) => {

    const [text, setText] = useState("");
    const fullTest = "< Hello World />"

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            setText(fullTest.substring(0, index))
            index++;

            if (index > fullTest.length) {
                clearInterval(interval);

                setTimeout(() => {
                    onCmplete();
                }, 1000);

            }
        }, 100);
        return () => {
            clearInterval(interval); // this is for avoiding memory leaks
        }
    }, [onCmplete]);

    return (
        <div className="fixed inset-0 z-50 bg-black text-gray-100 flex flex-col items-center justify-center">
            <div className="mb-4 text-4xl font-mono font-bold">
                {text} <samp className="animate-blink ml-1"> | </samp>
            </div>
            <div className="w-[200px] h-[2px] bg-gray-800 relative overflow-hidden ">
                <div className="w-[40%] h-full bg-blue-500 shadow-[0_0_15px_#3b82f6] animate-loading-bar">
                </div>
            </div>
        </div>
    )
}