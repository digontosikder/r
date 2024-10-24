export default function Friend({friends}){
    const [name,email]= friends
    console.log(friends)
return(
    <div>
        <h1>Name: {name}</h1>
        <h1>email: {email}</h1>
    </div>
)
}