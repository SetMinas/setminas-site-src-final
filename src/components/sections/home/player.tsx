"use client";

import { useState } from "react";
// import { ListBlobResultBlob } from "@vercel/blob";

export default function Player({ videoName }: { videoName: string }) {
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
				controls
				preload="metadata"
				onEnded={() => setIsPlaying(false)}
				className="w-full h-auto max-h-[90vh] object-cover"
			>
				<source
					key={videoName}
					src={`/videos/${videoName}.mp4`}
					type="video/mp4"
				/>
				Seu navegador não suporta o vídeo.
			</video>
		</section>
	);
}
