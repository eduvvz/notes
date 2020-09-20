const END_POINT = `${process.env.NEXT_PUBLIC_END_POINT}/`;

// USERS
const preffixUsers = 'users/';
export const CHECK_EMAIL_EXIST = (email) =>
  `${END_POINT}${preffixUsers}checkEmailExists?email=${email}`;
