type ListProps = {
    items: string[]
};

const List = ({items}: ListProps) => {
    return (
        <ul>
            { items.map(item => <li key={item}>item</li>) }
        </ul>
    )
}

export default List;