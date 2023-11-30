export function VideoBg({ videoSrc }) {
	return (
		<video
			className="absolute bg-cover object-cover min-w-full"
			src={videoSrc}
			autoPlay
			loop
			muted
		/>
	);
}
