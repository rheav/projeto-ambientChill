export function VideoBg({ videoSource }) {
	return (
		<video
			className="fixed object-cover min-w-full min-h-screen bg-cover"
			src={videoSource}
			autoPlay
			loop
			muted
		/>
	);
}
