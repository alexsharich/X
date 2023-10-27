import Link from 'next/link';

export const Navbar = () => {
  return (
    <div>
      <Link href={'/'}>Main</Link>
      <Link href={'/characters'}>Characters</Link>
      <Link href={'/profile'}>Profile</Link>
      <Link href={'/signIn'}>SignIn</Link>
      <Link href={'/signUp'}>SignUp</Link>
    </div>
  );
};
