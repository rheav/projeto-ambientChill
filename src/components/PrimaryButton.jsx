import { useState } from "react";
import { RxSpeakerLoud, RxSpeakerOff } from "react-icons/rx";

export function PrimaryButton({ fireEvent }) {
	const [isMuted, setIsMuted] = useState(true);

	function handleIsMuted() {
		setIsMuted(!isMuted);
	}

	return (
		<button
			className="z-10 flex items-center justify-center w-1/5 col-span-3 px-12 py-6 mb-16 text-2xl font-thin tracking-wider text-white transition duration-300 bg-blue-300 border rounded-lg shadow-md hover:bg-transparent gap-x-6 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 border-blue-300/70 shadow-blue-300/70 hover:shadow-lg hover:shadow-blue-300/90 hover:-translate-y-2"
			onClick={() => {
				fireEvent();
				handleIsMuted();
			}}
		>
			{isMuted ? (
				<>
					<RxSpeakerLoud />
					<p>Listen to nature 😄</p>
				</>
			) : (
				<>
					<RxSpeakerOff />
					<p>Mute nature ☹️</p>
				</>
			)}
		</button>
	);
}
