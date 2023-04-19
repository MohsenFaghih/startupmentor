import React from "react";
import { YoutubeRoot } from "./youtube-styled";

const Youtube = ({ YoutubeLink }: any) => (
    <YoutubeRoot>
        <iframe
            width="500"
            height="280"
            src={`https://www.youtube.com/embed/${YoutubeLink}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
        />
    </YoutubeRoot>
);

export default Youtube;