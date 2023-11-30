import { useRef, useState } from "react";
import ForestRainVideo from "../assets/video/forestRainVideo.mp4";
import ForestRainAudio from "../assets/audio/forestRainSound.mp3";
import { VideoBg } from "../components/VideoBg";
import { AudioBg } from "../components/AudioBg";

export function Screen({ children }) {
	const audioRef = useRef();
	const [isPlaying, setIsPlaying] = useState(false);

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
		<section className="relative h-screen bg-slate-500 grid grid-cols-8 overflow-hidden auto-cols-min">
			<button
				className="absolute z-10 top-0 left-0"
				onClick={handleAudioPlay}
			>
				Unmute audio
			</button>
			<AudioBg
				audioSrc={ForestRainAudio}
				ref={audioRef}
			/>
			<VideoBg videoSrc={ForestRainVideo} />
			{children}
		</section>
	);
}
