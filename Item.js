function Item(props) {
    return (
        <li 
        className={props.active ? 'enabled' : 'disabled'}
        onClick={() => props.changeActive(props.id)}
        >
        {props.name}
         </li>
    )
}