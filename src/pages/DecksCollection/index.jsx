import { Fragment } from "react";

export default function DecksCollection(props) {
    const { setPage } = props;

    return(
        <Fragment>
            <div>DECKS COLLECTION</div>
            <button onClick={(e) => setPage('home')}>VOLTAR</button>
        </Fragment>
    )
};