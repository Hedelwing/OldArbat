import { gql } from "@apollo/client"

const query = gql`
  query ($date: String!) {
    posters(limit: 1, sort: "date:asc", where: {date_gt: $date}) {
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
    homepage {
      title
      meta
      text
      galery {
        url
        formats
      }
    }
  }
`

export default query