import { gql } from "@apollo/client"

const query = gql`
  query($start: Int!, $limit: Int!) {
    posters (sort: "date:desc", start: $start, limit: $limit ) {
      id
      date
      price
      adress
      play {
        title
        text
        slug
        preview {
          formats
        }
      }
    }
  }
`

export default query