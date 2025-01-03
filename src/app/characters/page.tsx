'use client';

import { charactersQuery } from '@/services/rickandmorty/queries';
import { useSuspenseQuery } from '@apollo/client';
import { CharacterCard } from './components/character-card';

export default function CharactersPage() {
  const { data } = useSuspenseQuery(charactersQuery);

  return (
    <div className='w-full grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-4 p-4'>
      {data?.characters?.results
        ?.filter((item) => !!item)
        .map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
    </div>
  );
}
