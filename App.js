class App extends React.Component {
    state = {
        items: [
            { id: 1, name: 'herbata', active: false },
            { id: 2, name: 'chleb', active: true },
            { id: 3, name: 'kawa', active: false },
            { id: 4, name: 'zupa', active: false },
            { id: 5, name: 'pierogi', active: false },
        ]
    }

    handleChangeActive = (id) => {
        const items = this.state.items.map(item => {
            if(id === item.id) {
                item.active = !item.active
            }
            return item
    })
        this.setState({
            items: items
        })   
    }

    render() {
        return (
            <div>
                <Header items={this.state.items}/>
                <ListItems items={this.state.items} changeActive={this.handleChangeActive}/>
            </div>
        )
    }
}