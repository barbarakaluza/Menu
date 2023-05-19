function ListItems(props) {
    const items = props.items.map(item => (
        <Item 
            key={item.id} 
            id={item.id}
            name={item.name} 
            active={item.active}
            changeActive={props.changeActive}
        />
         ))
    return (
        <ul>
            {items}
        </ul>
    )
}