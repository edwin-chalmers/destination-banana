import parse from 'html-react-parser';

export default function MyComponent( { pageHTML }) {
    const myHTMLString = pageHTML
    return <div>{parse(myHTMLString)}</div>
  }