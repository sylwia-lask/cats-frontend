import gql from 'graphql-tag';

export const AllCatsQuery = gql`
  query GetAllCats {
    cats {
      id
      name
      description
    }
  }
`;
