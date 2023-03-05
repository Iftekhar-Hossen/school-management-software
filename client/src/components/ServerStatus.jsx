import axios from "axios";
import React, { useState, useEffect } from "react";
import { Tag } from "antd";
import errorAudio from "../audio/error.mp3";

export default function ServerStatus() {
    const [apiResponse, setApiResponse] = useState(null);
    const [error, setError] = useState(null);

    const handleApiCall = async () => {
        try {
            const response = await (
                await fetch("http://localhost:8000/status")
            ).json();
            setApiResponse(response);
            setError(null);
            console.log(response)
        } catch (err) {
            setError(err);
            console.log(err)
            let audio = document.getElementById("audio");
            audio.play({ force: true }).catch(console.error);
        }
    };

    useEffect(() => {
        const intervalId = setInterval(() => {
            handleApiCall();
        }, 3000);
        return () => clearInterval(intervalId);
    }, []);

    return (
        <div>
            {error && <Tag color="error">Server error</Tag>}

            <audio id="audio" src={errorAudio}></audio>
        </div>
    );
}
