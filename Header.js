function Header(props) {
    const activeItmes = props.items.filter(item => item.active);
    const numberOfOrder = activeItmes.length;
    return (
        <header>
        <h1>Ilość produktów: {numberOfOrder}</h1>
        <h2>Suma do zapłaty: {numberOfOrder ? `${numberOfOrder * 10} złotych` : 'Brak zamówień'}</h2>
        </header>
    )
}