import pb from "./pocketbase";

const getImageUrl = (record, image) => {
	const imageUrl = pb.files.getURL(record, image);

	return imageUrl;
};

export default getImageUrl;
