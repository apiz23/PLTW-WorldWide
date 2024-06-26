"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ChevronLeft, Menu } from "lucide-react";
import { menuSlide } from "./anim";
import Link from "next/link";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Lobster } from "next/font/google";
const lobster = Lobster({
	weight: "400",
	subsets: ["latin"],
});

export default function Home() {
	const [isActive, setIsActive] = useState(false);
	const navItems = [
		{ text: "Home", href: "/" },
		{
			text: "Buy",
			href:
				"https://docs.google.com/forms/d/e/1FAIpQLSde44xXB1OSBiUkskWN7aib_gESVTCsuNvSI3dr8Tn7AArrjg/viewform?usp=sf_link",
		},
	];
	return (
		<>
			<div className="pt-10 w-full">
				<h1
					className={` ${lobster.className} scroll-m-20 text-[50px] md:text-[100px] font-medium text-center tracking-wider`}
				>
					PLTW
				</h1>
			</div>
			<Sheet>
				<div className="fixed top-0 right-0 z-50 p-8">
					<SheetTrigger>
						<div
							onClick={() => {
								setIsActive(!isActive);
							}}
							className="w-14 h-14 rounded-full bg-gray-400 flex items-center justify-center cursor-pointer"
						>
							<div>
								<Menu size={24} />
							</div>
						</div>
					</SheetTrigger>
				</div>

				<SheetContent className="w-max bg-white bg-opacity-80 ">
					<motion.div
						variants={menuSlide}
						initial="initial"
						animate="enter"
						exit="exit"
						className="h-screen text-black"
					>
						<div className="flex flex-col justify-between h-full p-10">
							<div className="flex flex-col space-y-5">
								<div className="text-3xl pb-5 text-gray-800 uppercase border-b text-center border-gray-600 mb-4">
									PLTW X UTHM
								</div>
								{navItems.map((item, index) => (
									<Link
										key={index}
										href={item.href}
										className="font-extrabold text-3xl inline-flex group"
									>
										<span className="group-hover:text-blue-800">{item.text}</span>
										<ChevronLeft className="w-8 h-8 ms-3 transition-transform transform group-hover:-translate-x-2 group-hover:animate-in" />
									</Link>
								))}

								<Popover>
									<PopoverTrigger>
										<button className="font-extrabold text-3xl inline-flex group float-left">
											<span className="group-hover:text-blue-800">Contact</span>
											<ChevronLeft className="w-8 h-8 ms-3 transition-transform transform group-hover:-translate-x-2 group-hover:animate-in" />
										</button>
									</PopoverTrigger>
									<PopoverContent>
										<div className="grid grid-cols-2 gap-4">
											<Link
												href="https://wa.link/nrwpef"
												target="_blank"
												className="flex flex-col items-center"
											>
												<Avatar>
													<AvatarImage src="/images/pp.svg" />
													<AvatarFallback>ZAI</AvatarFallback>
												</Avatar>
												<label>Ruzainish</label>
											</Link>
											<Link
												href="https://wa.link/3tnaky"
												target="_blank"
												className="flex flex-col items-center"
											>
												<Avatar>
													<AvatarImage src="/images/pp.svg" />
													<AvatarFallback>AIYZ</AvatarFallback>
												</Avatar>
												<label>Fariez</label>
											</Link>
										</div>
									</PopoverContent>
								</Popover>
							</div>
						</div>
					</motion.div>
				</SheetContent>
			</Sheet>
		</>
	);
}
