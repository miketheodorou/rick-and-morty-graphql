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

export const characterQuery = gql(`
  query Character($characterId: ID!) {
    character(id: $characterId) {
      id
      created
      gender
      image
      name
      species
      status
    }
  }  
`);
