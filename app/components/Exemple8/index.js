/**
 *
 * Exemple8
 *
 */

import React from 'react';
import styled from 'styled-components';

const MainBoxStyled = styled.div`
  color: ${props => props.color || 'gray'};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid grey;
  border-radius: 3px;
`;

const ThemedBoxStyled = styled(MainBoxStyled)`
  color: ${props => props.theme.color};
  border-color: ${props => props.theme.color};
  background: ${props => props.theme.bg};
`;

const MyStyledComponent = styled(ThemedBoxStyled)`
  color: violet !important;
`;

function Exemple8() {
  return (
    <MyStyledComponent style={{ color: 'green', borderColor: 'green' }}>
      Override inline css with important
    </MyStyledComponent>
  );
}

Exemple8.propTypes = {};

export default Exemple8;
