import { forwardRef } from "react";

export const AudioBg = forwardRef(({ audioSource }, ref) => {
	return (
		<audio
			ref={ref}
			src={audioSource}
			loop
		/>
	);
});

AudioBg.displayName = "AudioBg";
