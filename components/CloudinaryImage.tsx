"use client";
import React, { useState } from "react";
import { CldImage } from "next-cloudinary";
import { Skeleton } from "./ui/skeleton";

const CloudinaryImage = ({ public_id }: { public_id: string }) => {
	const [isLoading, setIsLoading] = useState(true);

	return (
		<div className=" relative">
			{isLoading && (
				<div className="absolute inset-0">
					<Skeleton className="w-full h-full object-cover rounded-lg" />
				</div>
			)}

			<CldImage
				width="460"
				height="300"
				src={public_id}
				sizes="100vw"
				alt="Description of my image"
				className={`w-full h-72 object-cover rounded-lg transition-opacity duration-300 ${
					isLoading ? "opacity-0" : "opacity-100"
				}`}
				onLoad={() => setIsLoading(false)}
			/>
		</div>
	);
};

export default CloudinaryImage;
