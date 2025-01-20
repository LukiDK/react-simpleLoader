import { useState, useEffect } from "react";
import { LoaderWrapper, ProgressBar } from "./Loader.styled.js";

// Set duration i ms
const duration = 5000;

export const Loader = () => {
    // loading stage og progress state
    const [loading, setLoading] = useState(true);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        // Laver et interval, som kører i længden af const duration
        const interval = setInterval(() => {
            setProgress((prev) => {
                // Hvis prev er >= 100, set loading = false, og return 100
                if (prev >= 100) {
                    setLoading(false);
                    return 100;
                }
                return prev + 1;
            });
        }, duration / 100);

        // Returnerer en funktion, som cleare intervallet
        return () => clearInterval(interval);
    }, []);

    return (
        <LoaderWrapper>
            <div>{progress}%</div>
            <div className="progressbar-container">
                {/* Giver ProgressBar en prop, som så er progress fra 1-100 */}
                <ProgressBar $progress={progress} />
            </div>
            <div>
                {loading ? <div>Loading...</div> : <div>Data loaded</div>}
            </div>
        </LoaderWrapper>
    );
};
