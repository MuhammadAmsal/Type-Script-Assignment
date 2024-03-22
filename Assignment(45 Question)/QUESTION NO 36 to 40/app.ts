// QUESTION NO 36

// T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.

function make_shirt(size:string,text:string){
console.log(`The size of the shirt is ${size} & the message is ${text} should be printed  on the shirt`)
}

make_shirt("SMALL","SMILE SHINE SPARKLE")

// QUESTION NO 37

// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript.
// Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.

function make_shirt1(size:string="large",text:string="I love Typescript"){
    console.log(`The size of the shirt is ${size} & the message is ${text} should be printed  on the shirt`)
    }
    
    make_shirt1()
    make_shirt1("medium")
    make_shirt1("small","Typescript is high-level programming language")





// QUESTION NO 38

// Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan.
// Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country.

function describe_city(city:string,country:string="Pakistan"){
    console.log(`${city} is in ${country}`)
    }
    
    describe_city("Karachi")
    describe_city("lahore")
    describe_city("Sydney","Australia") 



// QUESTION NO 39

// City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:
// "Lahore, Pakistan"
// Call your function with at least three city-country pairs, and print the value that’s returned.

function city_country(city:string,country:string){
return `${city},${country}`
}

let cityCountry1=city_country("Newyork","United States")
console.log(cityCountry1)
let cityCountry2=city_country("Karachi","Pakistan")
console.log(cityCountry2)
let cityCountry3=city_country("london","England")
console.log(cityCountry3)




// QUESTION NO 40

// Album: Write a function called make_album() that builds a Object describing a music album. 
// The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. 
// Use the function to make three dictionaries representing different albums. 
// Print each return value to show that Objects are storing the album information correctly. 
// Add an optional parameter to make_album() that allows you to store the number of tracks on an album. 
// If the calling line includes a value for the number of tracks, add that value to the album’s Object. 
// Make at least one new function call that includes the number of tracks on an album.

function make_album(artist:string,album:string,tracks?:number){

interface dictionary{

    artist_Name:string,
    album:string,
    tracks?:number,

    }

   let dictionary:dictionary={

        artist_Name:artist,
        album:album,
    }

    if (tracks !== undefined){
        dictionary.tracks=tracks
    }
    return dictionary
}
let album1=make_album("Artist 1","Album 1")
console.log(album1)
let album2=make_album("Artist 2","Album2",5)
console.log(album2)
let album3=make_album("Artist 3","Album3",8)
console.log(album3)
