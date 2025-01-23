"use client";
import React from "react";
import { Button } from "../ui/button";
import { CldUploadButton } from "next-cloudinary";
import { useRouter } from "next/navigation";

const UploadButton = () => {
	const route = useRouter();
	const handleSuccess = (result: any) => {
		setTimeout(() => {
			route.refresh();
		}, 1000);
	};

	const handleError = (error: any) => {
		console.error("Upload failed:", error);
	};
	return (
		<Button asChild>
			<CldUploadButton
				uploadPreset="photoesset"
				onSuccess={handleSuccess}
				onError={handleError}
			/>
		</Button>
	);
};

export default UploadButton;
