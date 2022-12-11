import classNames from 'classnames/bind';
import { useQuery, gql } from '@apollo/client';
import JSXStyle from 'styled-jsx/style';

const FRONTPAGE_QUERY = gql`
    
    { 
        nodeByUri(uri: "/") {
            __typename
            ... on Page {
              title
              content
            }
        }
    }
`;

export default function FrontPage() {
 
 const { data } = useQuery(FRONTPAGE_QUERY);
//  console.log(data.nodeByUri.content)
// const html = data.nodeByUri.content
//  const html = data.pageBy.content;
//  console.log(html)
const html = "<div>what</div>";
  return (
    <main>
              <div dangerouslySetInnerHTML={{ __html: html }} />

    </main>
  );
}

