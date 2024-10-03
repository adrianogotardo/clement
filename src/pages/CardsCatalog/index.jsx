import { Fragment } from "react";

export default function CardsCatalog(props) {
    const { setPage } = props;

    return(
        <Fragment>
            <div>CARDS CATALOG</div>
            <button onClick={(e) => setPage('home')}>VOLTAR</button>
        </Fragment>
    )
};