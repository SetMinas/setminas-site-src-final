import { list } from "@vercel/blob";

export async function getVideos() {
	try {
		const { blobs } = await list({
			token: process.env.BLOB_READ_WRITE_TOKEN,
		});

		return blobs;
	} catch (err) {
		console.error(err);
	}
}
