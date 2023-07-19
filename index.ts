// question no 2
var personName: string = "Muhammad Obaid";
console.log('Hello '+personName+'  would you like to learn some Python today?');


//question no 3 
var personName: string = "muhammad obaid";
var toUpperCase = personName.toUpperCase();
var toLowerCase = personName.toLowerCase(); 
var toTitleCase = personName.replace(/\b\w/g, function (char) { return char.toUpperCase(); });
console.log(`${personName} UpperCased: ${toUpperCase} ,${personName} LowerCased: ${toLowerCase}, TitleCased:${toTitleCase}`);

//question no 4

let famousPersonName: string = " George Eliot";
let quote : string = "It is never too late to be what you might have been."
console.log(quote+' by '+famousPersonName);

//question no 5 
let famous_person : string = "Allama Iqbal";
let myMessage : string = "you are a good motivator and eye opener sir"
console.log("My Message to " +famous_person+" is that "+ myMessage );


// question no 6 
let stripNameOne: string = "Muhammad";
let stripNameTwo: string = "Obaid";
console.log("Name on next line \n "+stripNameOne + "\t "+ stripNameTwo);


//question no 7 
console.log (10+10)
console.log (10-4)
console.log (10*2)
console.log (10/2)
 
//question no 8 
console.log ("console.log(5 + 3)");
console.log ("console.log(5 + 3)");
console.log ("console.log(5 + 3)");
console.log ("console.log(5 + 3)");


// question no 9 
let favNumber: number= 3
console.log (`Obaid Favourite Number Is ${favNumber}`);

//question no 10 

// program 1 
// initiating a string variable called famousPersonName
let famousPersonName: string = " George Eliot";
// // initiating quote variable type string and storing famous quote of that author
let quote : string = "It is never too late to be what you might have been."
// //printing that quote with spoken by name
console.log(quote+' by '+famousPersonName);

// // program 2 
// initiating a string variable caleed famous_person
let famous_person : string = "Allama Iqbal";
// intitaing a myMessage variable type string in which my response is stored 
let myMessage : string = "you are a good motivator and eye opener sir"
// printing in a required manner 
console.log("My Message to " +famous_person+" is that "+ myMessage );

// question no 11 
let myFriends: string[] = ['Obaid' , 'Hanzala' , 'Owais' , 'Arsalan' , 'Zakariya' , 'Abubakar']

for (let friend of myFriends){
    console.log (`My Friend is ${friend}`);
}

// question 12
let myFriendss: string[] = ['Obaid' , 'Hanzala' , 'Owais' , 'Arsalan' , 'Zakariya' , 'Abubakar']

for (let friend of myFriendss){
    console.log (`Hello ${friend} are you fine ?`);
} 

//question 13 
let myDreamTranspotation : String[] = ["Honda" , "Yamaha" ,"Kawasaki" , "Hayabusa" , "Suzuki"]

console.log(`I would like to own ${myDreamTranspotation[0]} motorbike`)
console.log(`I would like to own ${myDreamTranspotation[1]} motorbike`)
console.log(`I would like to own ${myDreamTranspotation[2]} motorbike`)
console.log(`I would like to own ${myDreamTranspotation[3]} motorbike`)
console.log(`I would like to own ${myDreamTranspotation[4]} motorbike`)

// question 14 
let friendsWantToInviteForDinner: string[] = ['Obaid' , 'Hanzala' , 'Owais' , 'Arsalan' , 'Zakariya' , 'Abubakar']

for (let friend of friendsWantToInviteForDinner){
    console.log (`Hello ${friend}, hope you're doing fine, would you join me on dinner on weekend `);}

// question 15 
let friendsWantToInviteForDinner: string[] = ['Obaid' , 'Hanzala' , 'Owais' , 'Arsalan' , 'Zakariya' , 'Abubakar']
console.log (` \n ${friendsWantToInviteForDinner[2]} will not be able to come  \n`)
friendsWantToInviteForDinner.splice(2,1)
friendsWantToInviteForDinner.push("Ali Abbas")
for (let friend of friendsWantToInviteForDinner){
    console.log (`Hello ${friend}, hope you're doing fine, would you join me on dinner on weekend `);}

// question 16 
let myFriendsIWantToInvite: string[] = ['Obaid' , 'Hanzala' , 'Owais' , 'Arsalan' , 'Zakariya' , 'Abubakar']
myFriendsIWantToInvite.push("Ali Abbas")
//   to add the guest in the begining of array
myFriendsIWantToInvite.unshift("Shahveer")
//   to add the guest in the begining of array
myFriendsIWantToInvite.push("Sohaib") 
for (let friend of myFriendsIWantToInvite){
    console.log (`Hello ${friend}, hope you're doing fine, would you join me on dinner on weekend `);
}
   console.log ("Hey guys, found the bigger table so now I can invite you'll , happy dinner :)")

// question 17 
let myFriendssIWantToInvite: string[] =  ['Obaid' , 'Hanzala' , 'Owais' , 'Arsalan' , 'Zakariya' , 'Abubakar']

console.log ("Due to limited space we are inviting only few members")

while (myFriendssIWantToInvite.length > 2){
    let uninvitedFriend = myFriendssIWantToInvite.pop()
    console.log (`sorry ${uninvitedFriend} you're not invited now`)}

for (let invitedFriend of myFriendssIWantToInvite){

    console.log (`dear ${invitedFriend} , you're still invited `)
}

console.log (myFriendssIWantToInvite)

// //question 18 
let locations : string[] = ["Singapore","London","Chicago","Switzerland","Germany"]
console.log("Original Order");
console.log(locations)

console.log("Alphabetical Order")
let alphabeticOrder : string[] = [...locations].sort();
console.log(alphabeticOrder);

console.log("Original Order")
console.log(locations);

console.log ("Reverse Order")
let reverseAlphabeticalOrder: string []  = ([...locations].sort((alphabet,reverse) => reverse.localeCompare(alphabet)))
console.log (reverseAlphabeticalOrder)

console.log("Original Order")
console.log(locations);

console.log ("Reversed Order")
let reversedOrder: string [] = [...locations].reverse()
console.log (reversedOrder )

console.log("Reversed Again")
let reversedOrderAgain: string [] = [...reversedOrder].reverse()
console.log (reversedOrderAgain )

console.log("Sorted Original Error")
let sortedArray: string [] = locations.sort()
console.log (sortedArray)

// question 19 
let myFriendsIWantToInvite: string[] = ['Obaid' , 'Hanzala' , 'Owais' , 'Arsalan' , 'Zakariya' , 'Abubakar']
myFriendsIWantToInvite.push("Ali Abbas")
//   to add the guest in the begining of array
myFriendsIWantToInvite.push("Shahveer")
//   to add the guest in the begining of array
myFriendsIWantToInvite.push("Sohaib") 
for (let friend of myFriendsIWantToInvite){
    console.log (`Hello ${friend}, hope you're doing fine, would you join me on dinner on weekend `);
}
   console.log ("Hey guys, found the bigger table so now I can invite you'll , happy dinner :)")

   console.log(myFriendsIWantToInvite.length);

// question 20 

let languagesLearned : string[]= ["Python","C#","Flutter","C+","Type Script"]

for (let language of languagesLearned)
{
console.log(language);
}

// question 21
type userDetail = {

    dateBirthNumber : number 
    userName : string
    email : string 
    password : number
    
}

let  newUser : userDetail = {

    dateBirthNumber :101 ,
    userName : "Obaid" ,
    email : 'obaid5869@gmail.com' ,
    password : 123456789 ,
};

console.log(newUser)

// question 22 
let languagesLearned : string[]= [123,"C#","Flutter","C+","Type Script"]
console.log (languagesLearned)

// question 23 

let racingCar = 'subaru';
console.log("Is car == 'subaru'? I predict True.")
console.log(racingCar == 'subaru') 


let anime = 'onePiece';
console.log("Is anime == 'subaru'? I predict True.")
console.log(anime == 'onePiece') 

let bestFootballer = 'Messiii';
console.log("Is bestFootballer == 'Messiii'? I predict True.")
console.log(bestFootballer == 'Messiii') 

let mySibling = 'talha';
console.log("Is mySibling == 'talha'? I predict True.")
console.log(mySibling == 'talha') 

let bike = 'yamahaR6';
console.log("Is bike == 'yamahaR6'? I predict True.")
console.log(bike == 'yamahaR6') 

let city = 'karachi';
console.log("Is city == 'karachi'? I predict True.")
console.log(city == 'lahore') 

let favColor = 'yellow';
console.log("Is favColor == 'yellow'? I predict True.")
console.log(favColor == '') 

let occupation = 'programming';
console.log("Is occupation == 'programming'? I predict True.")
console.log(occupation == 'gardening') 

let favCountry = 'Denmark';
console.log("Is favCountry == 'Denmark'? I predict True.")
console.log(favColor == 'USA') 

let favShow = 'Intersteller';
console.log("Is favShow == 'intersteller'? I predict True.")
console.log(favShow == 'indianaJhons')

// question 24 


let firstPerson = 'Muhammad Obaid'
let secondPerson = 'Muhammad Hanzala'
if (firstPerson[0] && secondPerson[0] == 'M'){
    console.log("both Muhammad start from 'M'")
}
if (firstPerson[0] || secondPerson[0] == 'M'){
    console.log("atleast one started from'M'")
}


if (firstPerson.length > secondPerson.length ){
    console.log(`${firstPerson} name is bigger`)
}else{
console.log(`${secondPerson} name is bigger`)
}


// question 25 
let alienColor: string = "green"

if (alienColor == "green"){
    console.log ("player earned 5 points")
}

let anotherAlienColor: string = "Red"

if (anotherAlienColor == "green"){
    console.log ("player earned 5 points")
}

// question 26 
let gameAlienColor: string = "green"

if (gameAlienColor == "green"){
    console.log ("player earned 5 points")
}
else {
    console.log ("player earned 10 points")
}

let anotherGameAlienColor = "Red"


if (anotherGameAlienColor == "green"){
    console.log ("player earned 5 points")
}
else {
    console.log ("player earned 10 points")
}

// question 27


let gameAlienColor31= "green"

if (gameAlienColor31 == "green"){
    console.log ("player earned 5 points")
}
else if (gameAlienColor31 == "yellow"){
    console.log ("player earned 10 points")
}
else if (gameAlienColor31 == "red"){
    console.log ("player earned 15 points")
}

let gameAlienColor32= "yellow"

if (gameAlienColor32 == "green"){
    console.log ("player earned 5 points")
}
else if (gameAlienColor32 == "yellow"){
    console.log ("player earned 10 points")
}
else if (gameAlienColor32 == "red"){
    console.log ("player earned 15 points")
}


let gameAlienColor33 = "red"

if (gameAlienColor33 == "green"){
    console.log ("player earned 5 points")
}
else if (gameAlienColor33 == "yellow"){
    console.log ("player earned 10 points")
}
else if (gameAlienColor33 == "red"){
    console.log ("player earned 15 points")
}

//question 28 
let person  = 6

if ( person < 2) {
    console.log("person is baby")
}
else if ( person >= 2 && person <=4) {
    console.log("person is toddler")
}
else if ( person >= 4 && person <=13) {
    console.log("person is kid")
}

else if ( person >= 13 && person <=20) {
    console.log("person is teenagers")
}

else if ( person >= 20 && person <=65) {
    console.log("person is adult")
}

else if ( person >= 65) {
    console.log("person is elder")
}
else {
    console.log("your given value is wrong")
}

// question 29 
let favFruits :string [] = ['mango' , 'peach', 'pineapple' , 'banana', 'apple']

for (let fruits of favFruits){

    if (fruits == 'mango') {
    console.log('You really like mangos!');
    }

    if (fruits == 'peach') {
        console.log('You really like peach!');
        }

    if (fruits == 'pineapple') {
        console.log('You really like pineapple!');
        }

    if (fruits == 'banana') {
            console.log('You really like bananas!');
            }
    if (fruits == 'apple') {
                console.log('You really like apples!');
                }
}

// question 30 
let usersOfSite: string[] = ['Obaid' , 'Hanzala' , 'Owais' , 'Arsalan' , 'Zakariya' , 'admin']

for (let user of usersOfSite){

        if (user == 'admin') {
        console.log('Hello admin, would you like to see a status report?');
        break;
        }
        else if (user != 'admin'){
        console.log(`Welcome ${user}, how are you`);
        }}
        
// question 31 
let usersOfSite: string[] = ['Obaid' , 'Hanzala' , 'Owais' , 'Arsalan' , 'Zakariya' ]

    if (usersOfSite.length == 0 ) {
    console.log('We need to find some users!');
    }
    else {
    console.log(`we have some users`);
    }

    console.log(usersOfSite);

// question 32 
let currentUsers : string[] = ['Obaid' , 'Hanzala' , 'Owais' , 'Arsalan' , 'Zakariya' ]
let newUsers : string[] = ['Obaid' , 'Hanzala' , 'Owais' , 'Husaain' , 'Asif' ]

for (let newUser of newUsers){
    let usernameTaken = false;
    for (let currentUser of currentUsers) {
            if (newUser.toLowerCase() ==currentUser.toLowerCase()){
            usernameTaken = true
          break
            }}
        
if (usernameTaken != true){
    console.log (`${newUser} is available`)
                }
else{
    console.log (`${newUser} is taken`)
 }       
}

//question 33 
let ordinalNumber : number[] = [1,2,3,4,5,]
for (let num of ordinalNumber) {
    if (num == 1){
        console.log('1st')
    }
    if (num == 2){
        console.log('2nd')
    }
    if (num == 3){
        console.log('3rd')
    }
    if (num == 4){
        console.log('4th')
    }
    if (num == 5){
        console.log('5th')
    }
  
}

// // question 34 
let myTypeOfPizza : string[] = ["peperoni pizza" , 'arabian pizza' , 'cheesy delight pizza' ]

for (let favpizza of myTypeOfPizza)
{
console.log(`My Favourite pizza are ${favpizza}`)
}
console.log (`
I absolutely love pizza! Its mouthwatering flavors and delicious toppings make it one of my all-time favorite foods. Whether it's a ${myTypeOfPizza[0]} or a ${myTypeOfPizza[2]}, pizza always brings me immense joy. I could eat it every day without ever getting tired of its cheesy goodness.`)

// question  35 
let commonAnimal : string []= ["cat" , 'dog' , 'rabbit' , 'wolf'] 
let commonCharecterstics : string [] = ["nails" , "ears" , 'nose' , 'teeth']


for (let animal of commonAnimal){
    console.log(`A ${animal} would be a great pet`)
}

console.log(`they all have the same ${commonCharecterstics[0]}, ${commonCharecterstics[1]} ,${commonCharecterstics[2]} and ${commonCharecterstics[3]} `)

// question 36 

let shirtSize = (text : String, size : number ) => {

    console.log(`${text} and ${size}`);
}

shirtSize("Babar",100)
shirtSize("Rizwan",102)


// question 37 
const size = ["large",'medium'] as const
let largeShirt = (msg:string,  size:string ) => {
    if (size == "medium" || size == "large" ){
        console.log (`${msg} size : ${size}`)
    }
    else {
        console.log (`${msg} size : S,XL`)
    }
}
largeShirt( " I love TypeScript" , "X")

// question 38 
let describeCity = (city: string  , country : string = "unknown country") => {
    console.log (`${city} is in ${country}`)
}

describeCity ("Karachi" , "Pakistan")
describeCity ("Amastardam")
describeCity ("Mombay" , "India")

question 39 
let cityCountry = (city: string  , country : string) => {
    console.log (`"${city},${country}"`)
}

cityCountry ("Karachi" , "Pakistan")
cityCountry ("Quetta", "Pakistan")
cityCountry ("Kolkata" , "India")

// question 40 
interface artistswAlbums { 
    artists: string;
    albums: string;
    tracks?: number;
};
const AlbumDetails = (artists: string, albums: string, tracks: number): artistswAlbums => {
    const albumDetails: artistswAlbums = {
        artists,
        albums, };

        if (tracks != undefined)
{
    albumDetails.tracks = tracks
} 
    return albumDetails;
};
const weekendAlbumDetails = AlbumDetails("The Weeknd", "Starboy", 18);
const StrangerThingsAlbumDetails = AlbumDetails("Stranger Things", "Apocalypse", 21);
const anuvJainAlbumDetails = AlbumDetails("Anuv Jain", "Barishien", 9);
console.log(weekendAlbumDetails);
console.log(StrangerThingsAlbumDetails);
console.log(anuvJainAlbumDetails);

//question 41 
let magicians:string [] = [ 'Albus Dumbledore' , 'Voldemort' , 'The Founders' , 'Gellert Grindelwald', 'Minerva McGonagall' , 'James and Lily Potter' , 'Remus Lupin', 'Sirius Black'] 

let showMagicians = () => {
    for (let magician of magicians){
        console.log (magician)
    }
}
showMagicians()

// question 42 
let magiciansCopy:string [] = [ 'Albus Dumbledore' , 'Voldemort' , 'The Founders' , 'Gellert Grindelwald', 'Minerva McGonagall' , 'James and Lily Potter' , 'Remus Lupin', 'Sirius Black'] 


let makeGreat = () => {

        for (let magicians = 0 ; magicians < magiciansCopy.length; magicians++ ){
            magiciansCopy[magicians] = " the great "  + magiciansCopy[magicians] 
        }

        for (let magician of magiciansCopy){
            console.log (magician)
           
        }
    }
makeGreat()

// question 43 
function show_Magicians(magicians: string[]): void {
    magicians.forEach((magician) => {
      console.log(magician);
    });
  }
  
  function make_great(magicians: string[]): string[] {
    const greatMagicians: string[] = [];
    for (let i = 0; i < magicians.length; i++) {
      greatMagicians.push("the Great " + magicians[i]);
    }
    return greatMagicians;
  }
  
  // Example usage
  const magicianNames: string[] = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"];
  
  const greatMagicianNames: string[] = make_great([...magicianNames]);
  show_Magicians(magicianNames);
  show_Magicians(greatMagicianNames);
  


// question 44 
let makeSandwich = (sandwichItemsPersonWants: string[]) => {
    return console.log (`Items Customer want in sandwich are ${sandwichItemsPersonWants} `)
}

makeSandwich(["Tomato" , "BBQ" , "Cheese" , "Toast" , "Ketchup" , "Mayo" , 'Egg'])

// question 45 
interface details {
    manufacturer : string,
    modelName : string 
    numberPlate? : number
    color? : string 
}

let carDetails = (manufacturer:string , modelName:string , numberPlate?: number , color? : string ) => { 
    let showDetails: details = {
    manufacturer, modelName
    } 
if (numberPlate !== undefined)
{
    showDetails.numberPlate = numberPlate
}
if (color !== undefined){
    showDetails.color = color
}
    return showDetails
}

let car1Detail = carDetails("toyota" , " Corrola", 2424, 'yellow')
let car2Detail = carDetails("Honda" , "Civic" , 4040 , 'black')
let car3Detail =carDetails("Toyota" , "Camry" , 3030 , "maroon")
let car4Detail =carDetails("Honda" , "Accord" , 8989 , "white")
let car5Detail =carDetails("BMW" , "X3")


console.log (car1Detail)
console.log (car2Detail)
console.log (car3Detail)
console.log (car4Detail)
console.log (car5Detail)
