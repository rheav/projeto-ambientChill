import { useRef, useState } from "react";
import { Content } from "./layout/Content";
import { Screen } from "./layout/Screen";
import { Sidebar } from "./layout/Sidebar";

function App() {
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
		<Screen audioRef={audioRef}>
			<Sidebar />
			<Content handleAudioPlay={handleAudioPlay} />
		</Screen>
	);
}

export default App;
