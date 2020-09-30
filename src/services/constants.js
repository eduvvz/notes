const END_POINT = `${process.env.NEXT_PUBLIC_END_POINT}/`;

// USERS
const prefixUser = 'users';
export const USERS_DEFAULT = `${END_POINT}${prefixUser}`;
export const USERS_CHECK_EMAIL_EXIST = (email) =>
  `${USERS_DEFAULT}/checkEmailExists?email=${email}`;
export const USERS_LOGIN = `${USERS_DEFAULT}/login`;

// NOTES
const prefixNote = 'notes';
export const NOTES_DEFAULT = `${END_POINT}${prefixNote}`;
export const NOTES_GET_BY_USER = (userId) =>
  `${NOTES_DEFAULT}/byUser?userId=${userId}`;
export const NOTES_GET_BY_USER_AND_WITHOUT_FOLDER = (userId) =>
  `${END_POINT}${prefixNote}/getByUserAndWithoutFolder?userId=${userId}`;
export const NOTES_PUT_IN_FOLDER = `${NOTES_DEFAULT}/putInFolder`;
export const NOTES_GET_ALL_IN_FOLDER = (folderId) =>
  `${NOTES_DEFAULT}/getInFolder?folderId=${folderId}`;
export const NOTES_GET_DELETED_BY_USER = (userId) =>
  `${NOTES_DEFAULT}/getDeleted?userId=${userId}`;
export const NOTES_DELETE_BY_ID = (noteId) =>
  `${NOTES_DEFAULT}?noteId=${noteId}`;

// FOLDERS
const prefixFolder = 'folders';
export const FOLDERS_DEFAULT = `${END_POINT}${prefixFolder}`;
export const FOLDERS_GET_BY_USER = (userId) =>
  `${END_POINT}${prefixFolder}/byUser?userId=${userId}`;
