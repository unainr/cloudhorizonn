"use client";
import { CldImage } from "next-cloudinary";
import React, { useState } from "react";
import { Button } from "../ui/button";

type EffectType =
	| undefined
	| "generativefill"
	| "blur"
	| "grayscale"
	| "pixelate"
	| "overlay"
	| "crop";

const GenerativeFill = ({ id }: { id: string }) => {
	const [GenerativeFill, setGenerativeFill] = useState<EffectType>();
	return (
		<>
			<div className="max-w-5xl mx-auto p-8">
				<div className="flex flex-col gap-8">
					<div className="flex flex-col sm:flex-row gap-2 sm:gap-4 items-center flex-wrap">
						<Button
							onClick={() => setGenerativeFill(undefined)}
							variant={"destructive"}>
							Clear All
						</Button>
						<Button
							onClick={() => setGenerativeFill("generativefill")}
							variant={"secondary"}>
							Generative Fill
						</Button>
						<Button
							onClick={() => setGenerativeFill("blur")}
							variant={"secondary"}>
							Apply Blur
						</Button>

						<Button
							onClick={() => setGenerativeFill("grayscale")}
							variant={"secondary"}>
							Gray Scale
						</Button>

						<Button
							onClick={() => setGenerativeFill("pixelate")}
							variant={"secondary"}>
							Pixelate
						</Button>

						<Button
							onClick={() => setGenerativeFill("overlay")}
							variant={"secondary"}>
							Overlay
						</Button>

						<Button
							onClick={() => setGenerativeFill("crop")}
							variant={"secondary"}>
							Crop Fill
						</Button>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
						<div className="relative rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
							<CldImage
								width="1200"
								height="800"
								src={id}
								sizes="(max-width: 768px) 100vw, 50vw"
								alt="Original image"
								className="w-full h-auto object-cover"
							/>
						</div>

						{/* generative fill */}
						{GenerativeFill === "generativefill" && (
							<div className="relative rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
								<CldImage
									width="1200"
									height="800"
									src={id}
									sizes="(max-width: 768px) 100vw, 50vw"
									crop="pad"
									fillBackground
									alt="Generated image"
									className="w-full h-auto object-cover"
								/>
							</div>
						)}
						{/* blur */}
						{GenerativeFill === "blur" && (
							<div className="relative rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
								<CldImage
									width="1200"
									height="800"
									src={id}
									sizes="(max-width: 768px) 100vw, 50vw"
									blur="1200"
									alt="Generated image"
									className="w-full h-auto object-cover"
								/>
							</div>
						)}

						{/* grayscale */}
						{GenerativeFill === "grayscale" && (
							<div className="relative rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
								<CldImage
									width="1200"
									height="800"
									src={id}
									sizes="(max-width: 768px) 100vw, 50vw"
									grayscale
									alt="Generated image"
									className="w-full h-auto object-cover"
								/>
							</div>
						)}
						{/* pixelate */}
						{GenerativeFill === "pixelate" && (
							<div className="relative rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
								<CldImage
									width="1200"
									height="800"
									src={id}
									sizes="(max-width: 768px) 100vw, 50vw"
									pixelate
									alt="Generated image"
									className="w-full h-auto object-cover"
								/>
							</div>
						)}

						{/* overlay */}
						{GenerativeFill === "overlay" && (
							<div className="relative rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
								<CldImage
									width="1200"
									height="800"
									src={id}
									sizes="(max-width: 768px) 100vw, 50vw"
									alt="Generated image"
									overlays={[
										{
											publicId: `${id}`,
											position: {
												x: 50,
												y: 50,
												gravity: "north_west",
											},
											effects: [
												{
													crop: "fill",
													gravity: "auto",
													width: 350,
													height: 350,
												},
											],
										},
									]}
									className="w-full h-auto object-cover"
								/>
							</div>
						)}

						{/* remove background */}

						{GenerativeFill === "crop" && (
							<div className="relative rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
								<CldImage
									width="1200"
									height="800"
									src={id}
									sizes="100vw"
									crop="fill"
									alt="Generated image"
									className="w-full h-auto object-cover"
								/>
							</div>
						)}
					</div>
				</div>
			</div>
		</>
	);
};

export default GenerativeFill;
