import { PrimaryButton } from "../components/PrimaryButton";

export function Content({ handleAudioPlay }) {
	return (
		<div className="z-10 grid items-end w-screen max-w-full grid-cols-3 col-span-7 justify-items-center bg-gradient-to-b from-white/10 via-white/10 to-black/50 to-95%">
			<PrimaryButton fireEvent={handleAudioPlay} />
		</div>
	);
}
