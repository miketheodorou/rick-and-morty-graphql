import { charactersQuery } from '@/services/rickandmorty/queries';
import { CharacterCard } from './components/character-card';
import { getClient } from '@/lib/apollo-client';

export default async function CharactersPage() {
  const { data } = await getClient().query({ query: charactersQuery });

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
