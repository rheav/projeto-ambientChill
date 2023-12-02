import comfyThunderstorm from "../assets/video/comfyThunderstorm.mp4";
import ForestRainAudio from "../assets/audio/forestRainSound.mp3";
import { VideoBg } from "../components/VideoBg";
import { AudioBg } from "../components/AudioBg";

export function Screen({ children, audioRef, audioSource, videoSource }) {
	return (
		<section className="relative grid w-full h-screen grid-cols-5 overflow-hidden 3xl:grid-cols-6 4xl:grid-cols-8 bg-slate-500 auto-cols-min">
			<AudioBg
				audioSource={ForestRainAudio}
				ref={audioRef}
			/>
			<VideoBg videoSource={videoSource} />
			{children}
		</section>
	);
}
