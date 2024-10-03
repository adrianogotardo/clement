import { StyledHome, StyledTitle, StyledNavigation, StyledFootNote, CatalogBelerenBold, CollectionBelerenBold } from "./styles"
import { BelerenBold } from '../../styles/fonts';
import mtgaLogo from '../../images/pngegg.png';


export default function HomePage(props) {
    const { setPage } = props;

    return(
        <StyledHome>

            <StyledTitle>
                <BelerenBold>CLEMENT</BelerenBold>
                <BelerenBold>your personal deck builder</BelerenBold>
            </StyledTitle>

            <StyledNavigation>
                <CatalogBelerenBold onClick={(e) => setPage('catalog')}>Cards Catalog</CatalogBelerenBold>
                <CollectionBelerenBold onClick={(e) => setPage('collection')}>Decks Collection</CollectionBelerenBold>
                <div onClick={(e) => setPage('catalog')}></div>
                <div onClick={(e) => setPage('collection')}></div>
            </StyledNavigation>

            <StyledFootNote>
                <BelerenBold>(obviously) inspired by:</BelerenBold>
                <img width="450px" height="150px" src={mtgaLogo} alt=''/>
            </StyledFootNote>
        
      </StyledHome>
    )
};