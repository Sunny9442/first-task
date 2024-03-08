let favourites_bikes : string[]=["Yamaha", "Honda", "Kawasaki"]
for (let i=0; i < Object.keys(favourites_bikes).length; i++){
    console.log("This all my favourites bike " + Object.keys(favourites_bikes)[i], " is "+ favourites_bikes[Object.keys(favourites_bikes)[i]] )
}
let transport: string[]=["Car Lambhorgini", "Car Rolls Royce", "Car Ferrari"]
transport.forEach(transport => {
    console.log(`i would like to own this ${transport}`)
});