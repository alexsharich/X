import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export type CharacterType = {
    name: string;
    id: string;
    image: string;
  };

export const useCharacter = ():null | CharacterType=>{
    const [character, setCharacter] = useState<null | CharacterType>(null);
    const router = useRouter()
  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_TEST_URL}/character/${router.query.id}`)
      .then((res: any) => setCharacter(res.data));
  });
  return character
}
