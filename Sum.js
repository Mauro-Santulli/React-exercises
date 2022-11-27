export default function Sum(props) {
    
    console.log(props.number)
    const somma = props.number.reduce((x,y)=> x+y)
    return (
        <div>
            <h1>Total is: {somma}</h1>
        </div>

    )
}