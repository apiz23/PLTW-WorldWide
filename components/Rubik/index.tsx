import { motion, useScroll, useTransform } from "framer-motion";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselPrevious,
	CarouselNext,
} from "../ui/carousel";
import { useRef } from "react";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "../ui/accordion";

export default function Index() {
	const ball = useRef(null);

	const { scrollYProgress } = useScroll({
		target: ball,
		offset: ["start end", "end start"],
	});
	const height = useTransform(scrollYProgress, [0, 0.8], [50, 0]);

	return (
		<>
			<div ref={ball}>
				<div className="grid md:grid-cols-12 grid-cols-1 mt-20 bg-red-600">
					<div className="col-span-5 ps-20 py-10">
						<img
							src="https://speedcubeshop.com/cdn/shop/files/GAN-356-i3-3x3-Bluetooth-Smart-Cube-Magnetic-Stickerless-3.jpg?v=1730089828"
							alt="pic"
							className="md:w-5/6 mt-32 mx-auto rounded-lg shadow-xl transition-transform duration-300 ease-in-out hover:scale-110"
						/>
					</div>
					<div className="col-span-7 p-20 text-center items-center float-start text-white">
						<h1 className="scroll-m-20 text-4xl font-extrabold tracking-wider lg:text-5xl md:mt-20 mb-5">
							GAN356 i3 Preview
						</h1>
						<h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
							Experience the revolution of speedcubing with the GAN356 i3!
						</h3>
						<Accordion
							type="single"
							collapsible
							className="mt-10 max-w-xl mx-auto px-5 rounded-lg "
						>
							<AccordionItem value="item-1">
								<AccordionTrigger>Features</AccordionTrigger>
								<AccordionContent>
									<ul className="text-left text-lg ps-5 mt-2 space-y-1 list-disc list-inside">
										<li>9 adjustable tension levels for precise control</li>
										<li>Flash charging for extended cubing sessions</li>
										<li>Global battle-ready with online multiplayer functionality</li>
									</ul>
								</AccordionContent>
							</AccordionItem>
						</Accordion>
						<Accordion
							type="single"
							collapsible
							className="mt-5 max-w-xl mx-auto px-5 rounded-lg "
						>
							<AccordionItem value="item-1">
								<AccordionTrigger>Shipping</AccordionTrigger>
								<AccordionContent>
									<ul className="text-left text-lg ps-5 mt-2 space-y-1 list-disc list-inside">
										<li>RM8.00 - Peninsular Malaysia</li>
										<li>RM15.00 - Sabah/Sarawak</li>
									</ul>
								</AccordionContent>
							</AccordionItem>
						</Accordion>
					</div>
				</div>
				<motion.div className="relative" style={{ height }}>
					<div className="absolute h-[1550%] w-[120%] left-[-10%] rounded-b-[2000%] bg-red-600 shadow-lg"></div>
				</motion.div>
			</div>
		</>
	);
}
