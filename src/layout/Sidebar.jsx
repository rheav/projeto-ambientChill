import Logo from "../assets/img/logo.png";
import { SidebarItem } from "../components/SidebarItem";
import { IconWindy } from "../weatherIcons/IconWindy";
import { IconThunderstorm } from "../weatherIcons/IconThunderstorm";
import { IconBeach } from "../weatherIcons/IconBeach";
import { IconLagoon } from "./../weatherIcons/IconLagoon";
import { IconMountain } from "../weatherIcons/IconMountain";

export function Sidebar() {
	return (
		<aside className=" border-r-slate-200/40 shadow-blue-300/70 shadow-lg border-r-2 min-w-[300px] bg-blue-200 col-span-1/2 flex flex-col items-center bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 w-full">
			<img
				src={Logo}
				alt=""
				width={230}
				className="mt-8"
			/>
			<div className="flex flex-col items-center w-full mt-12 gap-y-2">
				<SidebarItem>
					<IconThunderstorm
						iconHeight={70}
						iconWidth={70}
						iconStyles={"text-white col-span-1"}
					/>
					<p className="col-span-2">comfy thunderstorm</p>
				</SidebarItem>
				<SidebarItem>
					<IconWindy
						iconHeight={70}
						iconWidth={70}
						iconStyles={"text-white col-span-1"}
					/>
					<p className="col-span-2"> windy greenfield</p>
				</SidebarItem>
				<SidebarItem>
					<IconBeach
						iconHeight={70}
						iconWidth={70}
						iconStyles={"text-white col-span-1"}
					/>
					<p className="col-span-2"> calm beach</p>
				</SidebarItem>
				<SidebarItem>
					<IconLagoon
						iconHeight={70}
						iconWidth={70}
						iconStyles={"text-white col-span-1"}
					/>
					<p className="col-span-2"> tranquil lagoon</p>
				</SidebarItem>
				<SidebarItem>
					<IconMountain
						iconHeight={70}
						iconWidth={70}
						iconStyles={"text-white col-span-1"}
					/>
					<p className="col-span-2"> moonlighted mountain</p>
				</SidebarItem>
			</div>
		</aside>
	);
}
