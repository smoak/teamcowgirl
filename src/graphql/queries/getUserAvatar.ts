import { gql } from 'apollo-boost';

export default gql`
  query GetUserAvatar {
    currentUser {
      profilePhotoThumbnailUrl
    }
  }
`;
