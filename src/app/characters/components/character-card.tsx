import { CharactersQuery } from '@/services/rickandmorty/generated/graphql';
import Image from 'next/image';

export interface CharacterCardProps {
  character: NonNullable<
    NonNullable<NonNullable<CharactersQuery['characters']>['results']>[number]
  >;
}
export function CharacterCard({ character }: CharacterCardProps) {
  return (
    <div className='rounded-lg shadow-lg p-4 border border-white'>
      <Image
        src={character.image ?? ''}
        alt={character.name ?? 'Character'}
        width={160}
        height={160}
        className='rounded-full border-2 border-white mx-auto mb-4'
      />
      <h2>{character.name}</h2>
      <p>{character.species}</p>
      <p>{character.status}</p>
    </div>
  );
}
