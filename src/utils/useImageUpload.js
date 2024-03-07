import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { v4 as uuidv4 } from 'uuid';
import { storage } from '../firebase/firebase.config';

const uploadImage = async (file) => {
    try {

        if (!file || !file?.name) {
            return
        }
        const storageRef = ref(storage, `images/${file.name + uuidv4()}`);

        const fileRef = await uploadBytes(storageRef, file);
        const imageUrl = await getDownloadURL(fileRef.ref);
        return imageUrl;
    } catch (error) {
        //console.log(error);
        throw error;
    }
};

export default uploadImage;