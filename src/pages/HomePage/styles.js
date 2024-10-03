import clementCards from '../../images/clement-cards.jpg';
import clementDecks from '../../images/clement-decks.jpg';
import { BelerenBold } from '../../styles/fonts';
import styled from 'styled-components';

const StyledHome = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

const StyledTitle = styled.div`
  font-size: 60px;
  color: #D3D3D3;
  text-align: center;
  h1:last-child {
    font-size: 34px;
    font-style: italic;
    margin-top: 10px;
  }
`;

const StyledNavigation = styled.div`
  position: relative;
  height: 40vh;
  width: 60vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  div {
    background-color: #0c0f0f;
    height: 100%;
    width: 25vw;
    filter: brightness(.25);
    background-image: url(${clementCards});
    background-size: cover;
    background-position: center;
    border-radius: 15px;
  }
  div:last-child {
    background-image: url(${clementDecks});
  }
  div:hover {
    filter: brightness(.75);
    cursor: pointer;
  }
  h1 {
    font-size: 24px;
    width: 110px;
    position: absolute;
    top: calc(50% - 24px);
    color: #D3D3D3;
    z-index: 1;
    text-align: center;
    text-shadow: -1px 1px 0 #000,
    1px 1px 0 #000,
    1px -1px 0 #000,
    -1px -1px 0 #000;
    cursor: pointer;
  }
`;

const CatalogBelerenBold = styled(BelerenBold)`
  left: calc(12.5vw - 55px);
`;

const CollectionBelerenBold = styled(BelerenBold)`
  right: calc(12.5vw - 55px);
`;

const StyledFootNote = styled.div`
  display: flex;
  flex-direction: column;
  color: #D3D3D3;
  img {
    margin-top: 10px;
  }
`;

export { StyledHome, StyledTitle, StyledNavigation, CatalogBelerenBold, CollectionBelerenBold, StyledFootNote };