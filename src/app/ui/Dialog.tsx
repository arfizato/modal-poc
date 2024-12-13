"use client";
import * as React from "react";

import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import {
	Drawer,
	DrawerContent,
	DrawerFooter,
	DrawerHeader,
	DrawerTitle,
	DrawerTrigger,
} from "@/components/ui/drawer";
import { useIsMobile } from "@/hooks/use-mobile";
import Image from "next/image";

import GiftIcon from "@/lib/assets/images/Gift.svg";
import Banner from "@/lib/assets/images/Banner.png";
import Telegram from "@/lib/assets/images/Telegram.svg";

export function ResponsiveDrawer() {
	const [open, setOpen] = React.useState(false);
	// const isDesktop = useMediaQuery("(min-width: 768px)");
	const isMobile = useIsMobile();
	if (!isMobile) {
		return (
			<Dialog open={open} onOpenChange={setOpen}>
				<DialogTrigger asChild>
					<Button
						variant='outline'
						className=' bg-cta font-semibold  px-6 py-2 rounded-md hover:text-cta hover:bg-foreground transition-all duration-200 border-none '>
						Do not click me!
					</Button>
				</DialogTrigger>
				<DialogContent className='sm:max-w-[472px] bg-secondary '>
					<DialogHeader>
						<DialogTitle className=' flex gap-2 items-center text-lg font-bold '>
							<Image src={GiftIcon} alt='' className=' w-8 h-8 ' />
							Redeem Code
						</DialogTitle>
					</DialogHeader>

					<ModalContent />
					<DialogFooter>
						<a href='https://arfizato.tn' target='_blank' className=' w-full '>
							<Button
								variant='outline'
								className=' w-full bg-cta  px-4 py-2 rounded-md hover:text-cta hover:bg-foreground transition-all duration-200 border-none '>
								Claim Bonus
							</Button>
						</a>
					</DialogFooter>
				</DialogContent>
			</Dialog>
		);
	}

	return (
		<Drawer open={open} onOpenChange={setOpen}>
			<DrawerTrigger asChild>
				<Button
					variant='outline'
					className=' bg-cta font-semibold  px-6 py-2 rounded-md hover:text-cta hover:bg-foreground transition-all duration-200 border-none '>
					Do not click me!
				</Button>
			</DrawerTrigger>
			<DrawerContent className=' bg-secondary '>
				<DrawerHeader className='text-left'>
					<DrawerTitle className=' flex gap-2 items-center text-lg font-bold '>
						<Image src={GiftIcon} alt='' className=' w-8 h-8 ' />
						Redeem Code
					</DrawerTitle>
				</DrawerHeader>
				<ModalContent />
				<DrawerFooter className='pt-2'>
					<a href='https://arfizato.tn' target='_blank' className=' w-full'>
						<Button
							variant='outline'
							className=' w-full bg-cta  px-4 py-2 rounded-md hover:text-cta hover:bg-foreground transition-all duration-200 border-none '>
							Claim Bonus
						</Button>
					</a>
				</DrawerFooter>
			</DrawerContent>
		</Drawer>
	);
}
function ModalContent() {
	return (
		<>
			<div className=' w-full py-2 px-4 md:px-0 flex flex-col gap-4  justify-between '>
				<div>
					<Image src={Banner} alt='' />
				</div>
				<h3 className=' font-semibold'>Redeem your code</h3>

				<p className=' text-muted-foreground text-xs '>
					<span>{`Codes are dropped from our `}</span>
					<Image src={Telegram} alt='telegram' className=' inline ' />
					<a
						href='https://arfizato.tn'
						target='_blank'
						className=' text-cta-foreground underline underline-offset-2 '>{`Telegram Channel`}</a>
					<span>{`, we will post it there, so be sure to follow us to be updated!`}</span>
				</p>
			</div>
		</>
	);
}
