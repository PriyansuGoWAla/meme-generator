const generate = document.querySelector('.generate');//now we can reach buttom and add functioning to it {it is class thtas why we are using.}
const memetitle=document.querySelector('.memetitle');//now we caN reach title and change it with the new title
const memeimg=document.querySelector('.memeimg');//now we can reach img and post the new meeme img
const author0 =document.querySelector('.author');//here we have to add span bcoz we wrote the whole sentence in ptag


function getmeme(){
    fetch('https://meme-api.com/gimme/wholesomememes')//fetching the data
    .then((res) => res.json())//it give aresponse and the convert the res in json format
    .then((data) => {//then u get the data and use it
        console.log(data);
        const { author, url, title } = data; // Destructure the data object
        author0.innerText =`meme by ${author}`; // Update the author name
        memetitle.innerText = title; // Update the meme title
        memeimg.src = url; // Update the meme image source
    })
}

getmeme()



generate.addEventListener('click', () => {
getmeme()
});
