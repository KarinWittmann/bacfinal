import axios from './axios';
import axiosMedia from './axios-media'; 

export const getDogs = user => axios
  .get("/dogs", {
    params: {
      q: { user }
    }
  })
  .then(response => response.data);

export const deleteDog = dog => axios.delete(`/dogs/${dog._id}`)
  .then(response => response.data)
  .catch(error => console.log(error));

export const postDog = ({name, age, user, image}) => axios
  .post("/dogs", { name, age, user })
  .then(response => {
    const dog = response.data;
    const filename = `${dog._id}.${image.name.substr(image.name.lastIndexOf('.') + 1)}`;
    const imageData = new FormData();
    imageData.append("image", image, filename);
    return axiosMedia
      .post("", imageData)
      .then(() => axios
        .put(`dogs/${dog._id}`, { image:filename })
        .then(resp => resp.data)
      );
  })
  .catch(error => console.log(error.request));
