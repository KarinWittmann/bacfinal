export default function convertImageName(dogId, imageName){
  const ext = imageName.substr(imageName.lastIndexOf('.') + 1);
  return `${dogId}.${ext}`;
}