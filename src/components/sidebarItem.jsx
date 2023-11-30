import { useState } from "react";

export function SidebarItem({ children, ambientMode }) {
	const [isSelected, setIsSelected] = useState(ambientMode);
	return (
		<div className=" py-1 px-6 grid grid-cols-3 gap-0 items-center font-semibold text-lg hover:bg-gradient-to-b hover:from-blue-300/10 hover:to-blue-300/80 w-full cursor-pointer text-white hover:border-blue-300/90  hover:shadow-blue-200/90 hover:shadow-xl transition duration-300 ease-linear">
			{children}
		</div>
	);
}
