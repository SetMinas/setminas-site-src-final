"use client";

import { useState } from "react";

export default function Player() {
	const [isPlaying, setIsPlaying] = useState(true);

	return (
		<section
			className={`bg-gray-100 z-40 flex justify-center items-center transition-[max-height] duration-500 ease-in-out ${
				isPlaying ? "max-h-[90vh]" : "max-h-0"
			}`}
		>
			<video
				autoPlay
				playsInline
				muted
				preload="metadata"
				onEnded={() => setIsPlaying(false)}
				className="w-full h-auto max-h-[90vh] object-cover"
			>
				{/* <source src="/videos/setminas-video-high.mp4" type="video/mp4" /> */}
				<source src="/videos/setminas-video-low.mp4" type="video/mp4" />
				Seu navegador não suporta o vídeo.
			</video>
		</section>
	);
}
