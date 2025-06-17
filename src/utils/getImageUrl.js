const getImageUrl = (record, id, image) => {
	const imageUrl = `http://127.0.0.1:8090/api/files/${record}/${id}/${image}`;
	return imageUrl;
};

export default getImageUrl;
