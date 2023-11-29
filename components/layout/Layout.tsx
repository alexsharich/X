import { NextPage } from 'next';
import { PropsWithChildren, ReactElement } from 'react';
import { CharacterCard } from '../characterCard/CharacterCard';
import { Navbar } from '../navbar/Navbar';
import { Header } from '../header/Header';

export const Layout: NextPage<PropsWithChildren> = props => {
    const { children } = props;
    return (
        <>
            <Header />
            <Navbar />
            {children}
        </>
    );
};

export const getLayout = (page: ReactElement) => {
    return <Layout>{page}</Layout>;
};
