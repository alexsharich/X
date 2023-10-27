import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useCharacters } from '@/assets/hooks/useCharacters';
import { CharacterCard } from '@/components/characterCard/CharacterCard';
import { HeadMeta } from '@/components/headMeta/HeadMeta';
import { Navbar } from '@/components/navbar/Navbar';
import { getLayout } from '@/components/layout/Layout';
import Link from 'next/link';

type CharacterType = {
  name: string;
  id: string;
  image: string;
};

function Characters() {
  const characters = useCharacters();
  return (
    <>
      <HeadMeta title={'character'} />
      {characters &&
        characters.map((character) => (
          <Link key={character.id} href={`/characters/${character.id}`}>
            <CharacterCard character={character} />
          </Link>
        ))}
    </>
  );
}

Characters.getLayout = getLayout;
export default Characters;
