import Image from "next/image";
import {
	ArrowRight,
	Sparkles,
	Wand2,
	Cloud,
	Star,
	Shield,
	Zap,
	ImageIcon,
	Layers,
	Palette,
} from "lucide-react";
import Link from "next/link";
import cloudinary from "cloudinary";
import CloudinaryImage from "@/components/CloudinaryImage";

interface SearchResult {
	public_id: string;
}

export default async function Home() {
	const result = (await cloudinary.v2.search
		.expression(`resource_type:image`)
		.sort_by("created_at", "desc")
		.max_results(30)
		.execute()) as { resources: SearchResult[] };
	const images = result.resources.map((resource) => resource.public_id);
	return (
		<main>
			{/* Hero Section */}
			<div className="relative h-[300px] flex items-center justify-center overflow-hidden">
				<Image
					src="/banner-bg.png"
					alt="Banner"
					fill
					className="object-cover opacity-80 hover:scale-105 transition-transform duration-700"
					priority
				/>

				{/* Gradient Overlay */}
				<div className="absolute inset-0 bg-gradient-to-r  to-transparent" />

				{/* Content */}
				<div className="relative z-10 w-full">
					<div className="container mx-auto px-4 flex items-center">
						<div className="flex flex-col items-center text-center w-full">
							<div className="inline-flex items-center px-3 py-1.5 bg-white/10 rounded-full backdrop-blur-sm border border-white/20 mb-4">
								<Sparkles className="h-3 w-3 text-purple-400 mr-2" />
								<span className="text-purple-400 text-xs font-medium">
									AI-Powered Image Transformation
								</span>
							</div>

							<h1 className="text-3xl md:text-4xl font-bold text-white mb-6">
								Transform Images with
								<span className="block bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
									AI Magic
								</span>
							</h1>

							{/* Features Grid */}
							<div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
								{[
									{
										icon: <Wand2 className="h-5 w-5 text-purple-600" />,
										label: "Generative Fill",
										description: "Expand images intelligently",
									},
									{
										icon: <ImageIcon className="h-5 w-5 text-pink-600" />,
										label: "Object Remove",
										description: "Clean unwanted elements",
									},
									{
										icon: <Palette className="h-5 w-5 text-blue-600" />,
										label: "Color Enhance",
										description: "Vibrant color correction",
									},
									{
										icon: <Layers className="h-5 w-5 text-green-600" />,
										label: "Background Magic",
										description: "Transform backgrounds",
									},
								].map((feature, index) => (
									<div key={index} className="group flex flex-col items-center">
										<div className="h-10 w-10 md:h-12 md:w-12 flex items-center justify-center bg-white rounded-lg shadow-lg mb-2 group-hover:scale-110 transition-all duration-300">
											{feature.icon}
										</div>
										<span className="text-white text-xs md:text-sm font-medium">
											{feature.label}
										</span>
										<span className="text-gray-300 text-[10px] hidden md:block">
											{feature.description}
										</span>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="space-y-8 my-5">
				<div className="text-center">
					<h1 className="text-3xl font-bold tracking-tight mb-4">
						Image Gallery & Effects
					</h1>
					<p className="text-lg text-gray-600 max-w-2xl mx-auto">
						Transform your images with our powerful editing tools. Apply
						stunning effects like generative fill, blur, grayscale and more.
						Select any image below to start editing.
					</p>
				</div>
				<div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-4">
					{images.slice(0, 8).map((public_id: string) => (
						<Link href={`/edit/${public_id}`} key={public_id}>
							<CloudinaryImage public_id={public_id} />
						</Link>
					))}
				</div>
			</div>
			<div className="border-t border-white/10">
				<div className="container mx-auto px-4 py-20">
					<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
						<div className="text-center">
							<h4 className="text-4xl font-bold text-white mb-2">50K+</h4>
							<p className="text-gray-400">Active Users</p>
						</div>
						<div className="text-center">
							<h4 className="text-4xl font-bold text-white mb-2">100K+</h4>
							<p className="text-gray-400">Images Enhanced</p>
						</div>
						<div className="text-center">
							<h4 className="text-4xl font-bold text-white mb-2">15+</h4>
							<p className="text-gray-400">AI Effects</p>
						</div>
						<div className="text-center">
							<h4 className="text-4xl font-bold text-white mb-2">99%</h4>
							<p className="text-gray-400">Satisfaction Rate</p>
						</div>
					</div>
				</div>
			</div>

			{/* How It Works */}
			<div className="container mx-auto px-4 py-32">
				<div className="text-center mb-16">
					<h2 className="text-4xl font-bold text-white mb-4">How It Works</h2>
					<p className="text-gray-400 max-w-2xl mx-auto">
						Transform your images in three simple steps
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-12">
					<div className="relative">
						<div className="bg-gradient-to-br from-purple-500/20 to-transparent p-8 rounded-2xl border border-purple-500/20">
							<span className="absolute -top-6 left-8 text-7xl font-bold text-white/10">
								1
							</span>
							<h3 className="text-2xl font-bold text-white mb-4">Upload</h3>
							<p className="text-gray-400">
								Upload your image to our secure platform
							</p>
						</div>
					</div>
					<div className="relative">
						<div className="bg-gradient-to-br from-pink-500/20 to-transparent p-8 rounded-2xl border border-pink-500/20">
							<span className="absolute -top-6 left-8 text-7xl font-bold text-white/10">
								2
							</span>
							<h3 className="text-2xl font-bold text-white mb-4">Enhance</h3>
							<p className="text-gray-400">
								Choose from our AI-powered enhancement options
							</p>
						</div>
					</div>
					<div className="relative">
						<div className="bg-gradient-to-br from-red-500/20 to-transparent p-8 rounded-2xl border border-red-500/20">
							<span className="absolute -top-6 left-8 text-7xl font-bold text-white/10">
								3
							</span>
							<h3 className="text-2xl font-bold text-white mb-4">Download</h3>
							<p className="text-gray-400">Get your enhanced image instantly</p>
						</div>
					</div>
				</div>
			</div>

			{/* Benefits Section */}
			<div className="bg-gradient-to-b from-purple-900/20 to-transparent">
				<div className="container mx-auto px-4 py-32">
					<div className="text-center mb-16">
						<h2 className="text-4xl font-bold text-white mb-4">
							Why Choose Us
						</h2>
						<p className="text-gray-400 max-w-2xl mx-auto">
							Experience the best in AI-powered image enhancement
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						{[
							{
								icon: <Star className="text-yellow-500" />,
								title: "Premium Quality",
								description: "High-quality output for every image",
							},
							{
								icon: <Zap className="text-blue-500" />,
								title: "Lightning Fast",
								description: "Get results in seconds, not minutes",
							},
							{
								icon: <Shield className="text-green-500" />,
								title: "Secure Platform",
								description: "Your images are safe with us",
							},
						].map((benefit, index) => (
							<div
								key={index}
								className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl hover:bg-white/10 transition-all">
								<div className="bg-white/10 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
									{benefit.icon}
								</div>
								<h3 className="text-2xl font-bold text-white mb-4">
									{benefit.title}
								</h3>
								<p className="text-gray-400">{benefit.description}</p>
							</div>
						))}
					</div>
				</div>
			</div>

			{/* CTA Section */}
			<div className="container mx-auto px-4 py-32">
				<div className="bg-gradient-to-r from-purple-900/40 to-pink-900/40 p-12 rounded-3xl text-center">
					<h2 className="text-4xl font-bold text-white mb-6">
						Ready to Transform Your Images?
					</h2>
					<p className="text-gray-300 mb-8 max-w-2xl mx-auto">
						Join thousands of satisfied users and experience the power of AI
						image enhancement
					</p>
					<Link
						href="/gallery"
						className="inline-flex items-center px-8 py-4 bg-white text-black rounded-xl font-semibold hover:bg-gray-100 transition-all">
						Get Started Now
						<ArrowRight className="ml-2" />
					</Link>
				</div>
			</div>
		</main>
	);
}
