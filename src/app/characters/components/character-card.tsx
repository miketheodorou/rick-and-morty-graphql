import { CharactersQuery } from '@/services/rickandmorty/generated/graphql';
import { Dna, Skull } from 'lucide-react';
import Image from 'next/image';

export interface CharacterCardProps {
  character: NonNullable<
    NonNullable<NonNullable<CharactersQuery['characters']>['results']>[number]
  >;
}
export function CharacterCard({ character }: CharacterCardProps) {
  return (
    <div className='rounded-lg shadow-xl p-4 border border-violet-400'>
      <div className='mb-4'>
        <Image
          src={character.image ?? ''}
          alt={character.name ?? 'Character'}
          width={160}
          height={160}
          className='rounded-full border-2 border-violet-400 mx-auto mb-2'
        />
        <h2 className='font-bold text-center text-lg'>{character.name}</h2>
      </div>

      <dl className='text-sm flex gap-4 flex-wrap justify-center'>
        <div className='text-center'>
          <div className='flex items-center gap-1 mb-1 font-bold'>
            <Dna className='size-4' />
            <dt>Species</dt>
          </div>
          <dd>{character.species}</dd>
        </div>

        <div className='text-center'>
          <div className='flex items-center gap-1 mb-1 font-bold'>
            <Skull className='size-4' />
            <dt className='font-bold '>Status</dt>
          </div>
          <dd>{character.status}</dd>
        </div>
      </dl>
    </div>
  );
}
