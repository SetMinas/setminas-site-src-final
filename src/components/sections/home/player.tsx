"use client";

import { useState } from "react";
import { ListBlobResultBlob } from "@vercel/blob";

export default function Player({ videos }: { videos: ListBlobResultBlob[] }) {
	const [isPlaying, setIsPlaying] = useState(true);

	console.log("videos", videos);

	return (
		<section
			className={`bg-gray-100 z-40 flex justify-center items-center transition-[max-height] duration-500 ease-in-out ${
				videos.length > 0 && isPlaying ? "max-h-[90vh]" : "max-h-0"
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
				{videos &&
					videos.map((video) => (
						<source key={video.url} src={video.url} type="video/mp4" />
					))}
				Seu navegador não suporta o vídeo.
			</video>
		</section>
	);
}
