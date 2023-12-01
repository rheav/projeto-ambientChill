import ForestRainVideo from "../assets/video/forestRainVideo.mp4";
import ForestRainAudio from "../assets/audio/forestRainSound.mp3";
import { VideoBg } from "../components/VideoBg";
import { AudioBg } from "../components/AudioBg";

export function Screen({ children, audioRef, audioSource }) {
	return (
		<section className="relative grid w-full h-screen grid-cols-8 overflow-hidden bg-slate-500 auto-cols-min">
			<AudioBg
				audioSource={ForestRainAudio}
				ref={audioRef}
			/>
			<VideoBg videoSource={ForestRainVideo} />
			{children}
		</section>
	);
}
