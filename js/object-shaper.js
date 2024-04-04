import {searchRandomNumberRange, getRandomElementArray} from './utils.js';
import { commentId, photoId, urlId, NUMBER_PHOTO, NAMES, DESCRIPTIONS, MESSAGES, MIN_LIKES, MAX_LIKES, MAX_COMMENTS, MAX_AVATAR_NUMBER } from './generator-and-data.js';

// функция создания комментария записи под фото
const descriptionPhotoComment = () => ({
  id: commentId(),
  avatar: `img/avatar-${searchRandomNumberRange(1, MAX_AVATAR_NUMBER)}.svg`,
  message: getRandomElementArray(MESSAGES),
  name: getRandomElementArray(NAMES),
});

// функция, отвечающая за создание массива объектов (комментариев)
const createArrayObjects = () => {
  const arrayOfObjectsComments = [];
  const numberComments = searchRandomNumberRange(1, MAX_COMMENTS);
  for (let i = 0; i <= numberComments; i += 1){
    arrayOfObjectsComments.push(descriptionPhotoComment());
  }
  return arrayOfObjectsComments;
};

// функция, отвечающая за создания объекта - записи под фотокарточкой
const createOnePhotoObject = () => ({
  id: photoId(),
  url: `photos/${urlId()}.jpg`,
  description: getRandomElementArray(DESCRIPTIONS),
  likes: searchRandomNumberRange(MIN_LIKES, MAX_LIKES),
  comments: createArrayObjects()
});

const createManyPhotosPosts = () =>
  Array.from({ length: NUMBER_PHOTO }, createOnePhotoObject);

export{createManyPhotosPosts};
