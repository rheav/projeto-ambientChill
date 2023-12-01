import { useState } from "react";

export function SidebarItem({ children, ambientMode }) {
	const [isSelected, setIsSelected] = useState(ambientMode);
	return (
		<div className="grid items-center w-full grid-cols-3 gap-0 px-6 py-1 text-lg font-medium text-white transition duration-300 ease-linear cursor-pointer hover:bg-gradient-to-b hover:from-blue-300/10 hover:to-blue-300/80 hover:border-blue-300/90 hover:shadow-blue-200/90 hover:shadow-xl">
			{children}
		</div>
	);
}
