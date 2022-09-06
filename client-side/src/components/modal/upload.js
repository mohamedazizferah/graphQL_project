export const uploadImage = (image, setUrl, setLoading) => {
  setLoading(true);
  const data = new FormData();
  data.append("file", image);
  data.append("upload_preset", "gqlTestProj");
  data.append("cloud_name", "dqvl4jxvu");
  fetch("  https://api.cloudinary.com/v1_1/dqvl4jxvu/image/upload", {
    method: "post",
    body: data,
  })
    .then((resp) => resp.json())
    .then((data) => {
      setUrl(data.url);
      setLoading(false);
    })
    .catch((err) => console.log(err));
};
