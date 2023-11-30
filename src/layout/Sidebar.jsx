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
			<div className="mt-12 w-full flex flex-col items-center gap-y-2">
				<SidebarItem>
					<IconThunderstorm
						iconHeight={70}
						iconWidth={70}
						iconStyles={"text-white col-span-1"}
					/>
					<p className="col-span-2">Comfy Thunderstorm</p>
				</SidebarItem>
				<SidebarItem>
					<IconWindy
						iconHeight={70}
						iconWidth={70}
						iconStyles={"text-white col-span-1"}
					/>
					<p className="col-span-2"> Windy Greenfield</p>
				</SidebarItem>
				<SidebarItem>
					<IconBeach
						iconHeight={70}
						iconWidth={70}
						iconStyles={"text-white col-span-1"}
					/>
					<p className="col-span-2"> Calm Beach</p>
				</SidebarItem>
				<SidebarItem>
					<IconLagoon
						iconHeight={70}
						iconWidth={70}
						iconStyles={"text-white col-span-1"}
					/>
					<p className="col-span-2"> Tranquil Lagoon</p>
				</SidebarItem>
				<SidebarItem>
					<IconMountain
						iconHeight={70}
						iconWidth={70}
						iconStyles={"text-white col-span-1"}
					/>
					<p className="col-span-2"> Moonlighted Mountain</p>
				</SidebarItem>
			</div>
		</aside>
	);
}
