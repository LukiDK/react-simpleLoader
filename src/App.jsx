import { useState } from "react";
import "./App.css";
import { Loader } from "./assets/components/Loader/Loader";

function App() {
    const [loading, setLoading] = useState(true);
    return (
        <>
            {loading && <Loader setLoading={setLoading} />}
            {!loading && (
                <div>
                    <h1>app</h1>
                    {/* Add other components or content here */}
                </div>
            )}
        </>
    );
}

export default App;
