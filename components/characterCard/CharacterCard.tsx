import { CharacterType } from '@/assets/hooks/useCharacters';
import Image from 'next/image';
import s from './CharacterCard.module.css';

type CharacterPropsType = {
  character: CharacterType;
};

export const CharacterCard = ({ character }: CharacterPropsType) => {
  return (
    <div key={character.id} className={s.card}>
      <p>{character.name}</p>
      <Image src={character.image} width={100} height={100} alt={`Picture of ${character.name}`} />
    </div>
  );
};
