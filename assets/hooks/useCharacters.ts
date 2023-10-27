import axios from "axios";
import { useEffect, useState } from "react";

export type CharacterType = {
    name: string;
    id: string;
    image: string;
  };

export const useCharacters = (): null | CharacterType[]=>{
    const [characters, setCharacters] = useState<null | CharacterType[]>(null);
  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_TEST_URL}/character`)
      .then((res: any) => setCharacters(res.data.results));
  });
  return characters
}
