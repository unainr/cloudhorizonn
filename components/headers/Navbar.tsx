"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
	LoginLink,
	LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { Button } from "../ui/button";
import Image from "next/image";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ModeToggle } from "../ui/modetoggle";

const Navbar = ({ user }: { user: any }) => {
	const pathname = usePathname();

	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	return (
		<nav className="dark:bg-black border-b   top-0 backdrop-blur  z-10">
			<div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
				<div className="relative flex h-16 items-center justify-between">
					<div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
						{/* Mobile menu button */}
						<button
							type="button"
							className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
							aria-controls="mobile-menu"
							aria-expanded={isMobileMenuOpen ? "true" : "false"}
							onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
							<span className="sr-only">Open main menu</span>
							{/* Menu icon */}
							<svg
								className={`${isMobileMenuOpen ? "hidden" : "block"} h-6 w-6`}
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth="1.5"
								stroke="currentColor"
								aria-hidden="true">
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
								/>
							</svg>
							{/* Close icon */}
							<svg
								className={`${isMobileMenuOpen ? "block" : "hidden"} h-6 w-6`}
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth="1.5"
								stroke="currentColor"
								aria-hidden="true">
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M6 18L18 6M6 6l12 12"
								/>
							</svg>
						</button>
					</div>
					<div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
						<div className="flex flex-shrink-0 items-center">
							<Link href={"/"}>
								<img className="h-8 w-auto block md:hidden " src={"/logo1.png"} />
							</Link>
						</div>
					</div>
					<div className="absolute inset-y-0 right-0 flex items-center gap-3 pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
						{user ? (
							<>
								<DropdownMenu>
									<DropdownMenuTrigger asChild>
										<Image
											src={
												user.picture ?? "https://ui.shadcn.com/avatars/01.png"
											}
											alt={user.given_name || "User avatar"}
											width={32}
											height={32}
											className="h-8 w-8 rounded-full object-cover"
										/>
									</DropdownMenuTrigger>
									<DropdownMenuContent className="w-56" align="end" forceMount>
										<DropdownMenuLabel className="font-normal">
											<div className="flex flex-col space-y-1">
												<p className="text-sm font-medium leading-none">
													{user.given_name} {user.family_name}
												</p>
												<p className="text-xs leading-none text-muted-foreground">
													{user.email}
												</p>
											</div>
										</DropdownMenuLabel>
										<DropdownMenuSeparator />
										<DropdownMenuItem>
											<Link href="/profile">Profile</Link>
										</DropdownMenuItem>
										<DropdownMenuItem>
											<Link href="/settings">Settings</Link>
										</DropdownMenuItem>
										<DropdownMenuSeparator />
										<DropdownMenuItem>
											<LogoutLink>Logout</LogoutLink>
										</DropdownMenuItem>
									</DropdownMenuContent>
								</DropdownMenu>
							</>
						) : (
							<>
								<LoginLink className="hidden md:block" >
									<Button variant={'outline'}>Login</Button>
								</LoginLink>
							</>
						)}
						<ModeToggle />
					</div>
				</div>
			</div>
			{/* Mobile menu */}
			{isMobileMenuOpen && (
				<div className="sm:hidden" id="mobile-menu">
					<div className="space-y-1 px-2 pb-3 pt-2">
						<Link
							href="/"
							className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white"
							aria-current="page">
							Home
						</Link>
						<Link
							href="/gallery"
							className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">
							Gallery
						</Link>
					</div>
				</div>
			)}
		</nav>
	);
};

export default Navbar;
