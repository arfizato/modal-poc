import { DrawerDialogDemo } from "./ui/Dialog";

export default function Home() {
	return (
		<>
			<div className='w-screen h-screen overflow-hidden flex items-center justify-center '>
				{/* <button className=' bg-cta  px-4 py-2 rounded-md hover:text-cta-foreground hover:bg-foreground transition-all duration-200 '>
					Do not click me!
				</button> */}
				<DrawerDialogDemo />
			</div>
		</>
	);
}
