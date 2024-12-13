import { ResponsiveDrawer } from "./ui/Dialog";

export default function Home() {
	return (
		<>
			<div className='w-screen h-screen overflow-hidden flex items-center justify-center '>
				<ResponsiveDrawer />
			</div>

			<a
				href='https://github.com/arfizato/modal-poc'
				target='_blank'
				className=' font-semibold underline underline-offset-2 hover:text-cta-foreground transition-all duration-200 absolute top-4 left-4  '>
				GitHub Repo
			</a>
		</>
	);
}
