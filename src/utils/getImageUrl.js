const getImageUrl = (record, id, image) => {
	const imageUrl = `https://shoeporium-pocketbase.onrender.com/api/files/${record}/${id}/${image}`;
	return imageUrl;
};

export default getImageUrl;
