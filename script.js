//----------------------------- getting data with promise -------------------------------//

document.getElementById("filmName").addEventListener("change", onChange);

function onChange(e) {
    let animeName = e.target.value;
    e.target.value = "";
     
    fetch("https://ghibliapi.herokuapp.com/films").then(response => {

        if(response.status === 200 && response.ok) {
            return response.json();
        }
        else {
            throw new Error("Ooops, something went wrong");
        }
    })
    .then(result => filterMyData(result, animeName))
    .catch(error => {
        console.log(error)
    });
}

function filterMyData(result, animeName) {
    let currentAnime = result.find(el => el.title === animeName);
    !currentAnime ? alert("Mmm, be careful!") : currentAnime;
    let {image, title, description, director, release_date} = currentAnime;

    let cntntWrapper = document.getElementById("content-wrapper");

    // checking for update
    if(cntntWrapper.childNodes.length === 6) { 
        cntntWrapper.removeChild(cntntWrapper.childNodes[cntntWrapper.childNodes.length - 1]);
    }

    let animeWrapper = document.createElement("div");
    animeWrapper.classList.add("anime-wrapper");
    

    let imgWrapper = document.createElement("div");
    imgWrapper.classList.add("img-wrapper");
    let imgNode = document.createElement("img");
    imgNode.src = image;
    imgNode.classList.add("anime-img");
    animeWrapper.appendChild(imgNode);


    let txtWrapper = document.createElement("div");
    txtWrapper.classList.add("text-wrapper");
    let ttlNode = document.createElement("div");
    ttlNode.innerHTML = title;
    ttlNode.classList.add("anime-title");
    txtWrapper.appendChild(ttlNode);

    let descNode = document.createElement("div");
    descNode.innerHTML = description;
    descNode.classList.add("anime-descript");
    txtWrapper.appendChild(descNode);

    let drctrNode = document.createElement("div");
    drctrNode.classList.add("extra");
    drctrNode.innerHTML = `Director : ${director}`;
    txtWrapper.appendChild(drctrNode);

    let yearNode = document.createElement("div");
    yearNode.classList.add("extra");
    yearNode.innerHTML = `Date : ${release_date}`;
    txtWrapper.appendChild(yearNode);
    animeWrapper.appendChild(txtWrapper);
    cntntWrapper. appendChild(animeWrapper);

    //console.log(currentAnime, result)
}


//----------------------------- getting data with async - await -------------------------------//


// document.getElementById("filmName").addEventListener("change", onChange);

// function onChange(e) {
//     let animeName = e.target.value;
//     e.target.value = "";
//     getMyDate(animeName);
// }

// async function getMyDate(animeName) {
//     let response = await fetch("https://ghibliapi.herokuapp.com/films");

//     try {
//         let result = await response.json();
//         filterMyData(result, animeName);
//     }
//     catch {
//         throw new Error("Ooops, something went wrong!");
//     }   
// }

// function filterMyData(result, animeName) {

//     let currentAnime = result.find(el => el.title === animeName);
//     !currentAnime ? alert("Mmm, be careful!") : currentAnime;
//     let {image, title, description, director, release_date} = currentAnime;

//     let cntntWrapper = document.getElementById("content-wrapper");

//     // checking for update
//     if(cntntWrapper.childNodes.length === 6) { 
//         cntntWrapper.removeChild(cntntWrapper.childNodes[cntntWrapper.childNodes.length - 1]);
//     }

//     let animeWrapper = document.createElement("div");
//     animeWrapper.classList.add("anime-wrapper");
    

//     let imgWrapper = document.createElement("div");
//     imgWrapper.classList.add("img-wrapper");
//     let imgNode = document.createElement("img");
//     imgNode.src = image;
//     imgNode.classList.add("anime-img");
//     animeWrapper.appendChild(imgNode);


//     let txtWrapper = document.createElement("div");
//     txtWrapper.classList.add("text-wrapper");
//     let ttlNode = document.createElement("div");
//     ttlNode.innerHTML = title;
//     ttlNode.classList.add("anime-title");
//     txtWrapper.appendChild(ttlNode);

//     let descNode = document.createElement("div");
//     descNode.innerHTML = description;
//     descNode.classList.add("anime-descript");
//     txtWrapper.appendChild(descNode);

//     let drctrNode = document.createElement("div");
//     drctrNode.classList.add("extra");
//     drctrNode.innerHTML = `Director : ${director}`;
//     txtWrapper.appendChild(drctrNode);

//     let yearNode = document.createElement("div");
//     yearNode.classList.add("extra");
//     yearNode.innerHTML = `Date : ${release_date}`;
//     txtWrapper.appendChild(yearNode);
//     animeWrapper.appendChild(txtWrapper);
//     cntntWrapper. appendChild(animeWrapper);

//     //console.log(result)
// }