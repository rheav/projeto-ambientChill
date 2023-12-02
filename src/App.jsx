import { useRef, useState } from "react";
import { Content } from "./layout/Content";
import { Screen } from "./layout/Screen";
import { Sidebar } from "./layout/Sidebar";

import comfyThunderstorm from "./assets/video/comfyThunderstorm.mp4";
import windyGreenfield from "./assets/video/windyGreenfield.mp4";

function App() {
	const audioRef = useRef();
	const [isPlaying, setIsPlaying] = useState(false);
	const [backgroundVideo, setBackgroundVideo] = useState(comfyThunderstorm);

	function handleBackgroundVideo(videoSource) {
		console.log(videoSource);
	}

	function handleAudioPlay() {
		if (audioRef.current) {
			if (isPlaying) {
				audioRef.current.pause();
			} else {
				audioRef.current.play();
			}

			setIsPlaying(!isPlaying);
		}
	}

	return (
		<Screen
			audioRef={audioRef}
			videoSource={backgroundVideo}
		>
			<Sidebar handleBackgroundVideo={handleBackgroundVideo} />
			<Content handleAudioPlay={handleAudioPlay} />
		</Screen>
	);
}

export default App;
