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
import { useCharacter } from '@/assets/hooks/useCharacter';

type CharacterType = {
  name: string;
  id: string;
  image: string;
};

function Character() {
  const character = useCharacter();
  return (
    <>
      <HeadMeta title={'character'} />
      {character && <CharacterCard key={character.id} character={character} />}
    </>
  );
}

Character.getLayout = getLayout;
export default Character;
