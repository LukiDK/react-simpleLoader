import { useState, useEffect } from "react";
import { LoaderWrapper, ProgressBar } from "./Loader.styled.js";

// Set duration i ms
const duration = 1000;

export const Loader = ({ setLoading }) => {
    // loading stage og progress state

    const [progress, setProgress] = useState(0);

    useEffect(() => {
        // Laver et interval, som kører i længden af const duration
        const interval = setInterval(() => {
            setProgress((prev) => {
                // Hvis prev er >= 100, set loading = false, og return 100
                if (prev >= 100) {
                    // Sætter loading til false
                    setTimeout(() => setLoading(false), 0);
                    return 100;
                }
                return prev + 1;
            });
        }, duration / 100);

        // Returnerer en funktion, som cleare intervallet
        return () => clearInterval(interval);
    }, [setLoading]);

    return (
        <LoaderWrapper>
            <div>{progress}%</div>
            <div className="progressbar-container">
                {/* Giver ProgressBar en prop, som så er progress fra 1-100 */}
                <ProgressBar $progress={progress} />
            </div>
            <div>
                <h1>Loading...</h1>
            </div>
        </LoaderWrapper>
    );
};
