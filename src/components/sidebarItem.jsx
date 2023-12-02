import { useState } from "react";

export function SidebarItem({ children, linkedVideo, handleBackgroundVideo }) {
	return (
		<div
			onClick={() => console.log(handleBackgroundVideo)}
			className="grid items-center w-full grid-cols-5 px-4 py-1 text-sm font-normal text-white transition duration-300 ease-linear cursor-pointer gap-x-2 lg:text-sm 3xl:text-lg hover:bg-gradient-to-b hover:from-blue-300/10 hover:to-blue-300/80 hover:border-blue-300/90 hover:shadow-blue-200/90 hover:shadow-xl"
		>
			{children}
		</div>
	);
}
