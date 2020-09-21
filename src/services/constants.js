const END_POINT = `${process.env.NEXT_PUBLIC_END_POINT}/`;

// USERS
const prefixUser = 'users';
export const USERS_DEFAULT = `${END_POINT}${prefixUser}`;
export const USERS_CHECK_EMAIL_EXIST = (email) =>
  `${END_POINT}${prefixUser}/checkEmailExists?email=${email}`;
