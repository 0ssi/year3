type Props = {
    children: any
}

function MySecondComponent(props: Props) {
    return(
        <div>
            {props.children}
        </div>
    );
}

export default MySecondComponent