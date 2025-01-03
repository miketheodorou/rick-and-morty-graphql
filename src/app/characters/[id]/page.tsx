import { getClient } from '@/lib/apollo-client';
import { characterQuery } from '@/services/rickandmorty/queries';

export default async function Page({
  params
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  const { data } = await getClient().query({
    query: characterQuery,
    variables: { characterId: id }
  });

  return <h1>{data.character?.name}</h1>;
}
