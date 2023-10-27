import { NextPage } from 'next';
import { PropsWithChildren, ReactElement } from 'react';
import { CharacterCard } from '../characterCard/CharacterCard';
import { Navbar } from '../navbar/Navbar';

export const Layout: NextPage<PropsWithChildren> = (props) => {
  const { children } = props;
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export const getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>;
};
