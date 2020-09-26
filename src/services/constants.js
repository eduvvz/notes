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
