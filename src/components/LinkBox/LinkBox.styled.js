// LinkBox.js (or wherever your LinkBox component is defined)

import React from 'react';
import styled from 'styled-components';

// Styled components
const LinkContainer = styled.div`
  background: white;
  max-width: 322px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  min-width: 322px;

  p {
    margin-top: 1px;
    margin-bottom: 1px;
    color: rgb(53,98,201);
    
    &:hover {
      cursor: pointer;
    }
  }
`;

// Assuming LinkBox is something like this:
const LinkBox = ({ linkList, updatePages }) => {
  return (
    <LinkContainer>
      {/* Assuming you're rendering links here */}
      {linkList.map((link, index) => (
        <p key={index} onClick={() => updatePages(link)}>
          {link.name} {/* Example property */}
        </p>
      ))}
    </LinkContainer>
  );
};

export default LinkBox;
