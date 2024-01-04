import { ref, listAll, getDownloadURL } from "firebase/storage";
import { storage } from "./firebase";

async function getImageUrls(path) {
  const storageRef = ref(storage, path);
  const imageList = await listAll(storageRef);

  const imageUrlPromises = imageList.items.map(async (item) => {
    const url = await getDownloadURL(item);
    return url;
  });

  return Promise.all(imageUrlPromises);
}

export default getImageUrls;