import { gql } from './generated/gql';

export const charactersQuery = gql(`
  query Characters {
    characters {
      info {
        count
        pages
        next
        prev
      }
      results {
        id
        created
        gender
        image
        name
        species
        status
      }
    }
  }
`);
