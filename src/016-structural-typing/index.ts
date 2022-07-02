// NOTE: typescript don't care about the type identity, that is, typescript
// will look at the properties and not the type identity. That's called
// 'Structural Typing System'.

type VerifyUserFn = (user: User, sentValue: User) => boolean;
type User = { username: string; password: string };

export const verifyUser: VerifyUserFn = (user, sentValue) => {
  return (
    user.username === sentValue.username && user.password === sentValue.password
  );
};

const dbUser = { username: 'Joaquim', password: '123456' };
const sentUser = { username: 'Joaquim', password: '123456', permissions: {} };
const loggedIn = verifyUser(dbUser, sentUser); // typescript will look at the properties and not the identity
console.log(loggedIn);
