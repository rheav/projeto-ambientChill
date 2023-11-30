import { forwardRef } from "react";

export const AudioBg = forwardRef(({ audioSrc }, ref) => {
	return (
		<audio
			ref={ref}
			src={audioSrc}
			loop
		/>
	);
});

AudioBg.displayName = "AudioBg";
