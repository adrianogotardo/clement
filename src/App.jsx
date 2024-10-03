import { Fragment, useState } from "react";
import HomePage from "./pages/HomePage";
import CardsCatalog from "./pages/CardsCatalog";
import DecksCollection from "./pages/DecksCollection";

export default function App() {
  const [page, setPage] = useState('home');

  return (
    <Fragment>
      {
        page === 'home' ? 
        <HomePage page={page} setPage={setPage} /> : page === 'catalog' ? 
        <CardsCatalog page={page} setPage={setPage} /> : 
        <DecksCollection page={page} setPage={setPage} />
      }
    </Fragment>
  );
};

