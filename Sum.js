export default function Sum({number = [2,1,5]}) {
    const somma = number.reduce((x,y)=> x+y)
    return (
        <div>
            <h1>Total is: {somma}</h1>
        </div>

    )
}