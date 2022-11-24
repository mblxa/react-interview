
// Boolean operators

export const CartCount = ({count}) => {
    return (
        <div>
            {count && `You have ${count} items in the Cart`}
        </div>
    )
}
