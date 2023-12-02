import Logo from "../assets/img/logo.png";
import { SidebarItem } from "../components/SidebarItem";
import { IconWindy } from "../weatherIcons/IconWindy";
import { IconThunderstorm } from "../weatherIcons/IconThunderstorm";
import { IconBeach } from "../weatherIcons/IconBeach";
import { IconLagoon } from "./../weatherIcons/IconLagoon";
import { IconMountain } from "../weatherIcons/IconMountain";
import { IconCaption } from "../components/IconCaption";

import comfyThunderstorm from "../assets/video/comfyThunderstorm.mp4";
import windyGreenfield from "../assets/video/windyGreenfield.mp4";

export function Sidebar({ handleBackgroundVideo }) {
	return (
		<aside className="z-20 flex flex-col items-center w-full col-span-1 bg-blue-200 border-r-2 shadow-lg border-r-slate-200/40 shadow-blue-300/70 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30">
			<img
				src={Logo}
				alt=""
				width={170}
				className="mt-8"
			/>
			<div className="flex flex-col items-center w-full mt-8 gap-y-2">
				<SidebarItem
					linkedVideo={comfyThunderstorm}
					handleBackgroundVideo={handleBackgroundVideo}
				>
					<IconThunderstorm
						iconHeight={30}
						iconWidth={30}
						iconStyles={"text-white col-span-1 justify-self-center"}
					/>
					<IconCaption>comfy thunderstorm</IconCaption>
				</SidebarItem>
				<SidebarItem linkedVideo={windyGreenfield}>
					<IconWindy
						iconHeight={30}
						iconWidth={30}
						iconStyles={"text-white col-span-1 justify-self-center"}
					/>
					<IconCaption>windy greenfield</IconCaption>
				</SidebarItem>
				<SidebarItem>
					<IconBeach
						iconHeight={30}
						iconWidth={30}
						iconStyles={"text-white col-span-1 justify-self-center"}
					/>
					<IconCaption>calm beach</IconCaption>
				</SidebarItem>
				<SidebarItem>
					<IconLagoon
						iconHeight={30}
						iconWidth={30}
						iconStyles={"text-white col-span-1 justify-self-center"}
					/>
					<IconCaption>tranquil lagoon</IconCaption>
				</SidebarItem>
				<SidebarItem>
					<IconMountain
						iconHeight={30}
						iconWidth={30}
						iconStyles={"text-white col-span-1 justify-self-center"}
					/>
					<IconCaption>moonlighted mountain</IconCaption>
				</SidebarItem>
			</div>
		</aside>
	);
}
