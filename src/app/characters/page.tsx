'use client';

import { charactersQuery } from '@/services/rickandmorty/queries';
import { useSuspenseQuery } from '@apollo/client';

export default function CharactersPage() {
  const { data } = useSuspenseQuery(charactersQuery);

  return (
    <div>
      <pre>{JSON.stringify(data?.characters?.results, null, 2)}</pre>
    </div>
  );
}
