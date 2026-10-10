var users=[{
    "name":"John Doe",
    "gender":"Male",
    "image":"john.png"
},
{
   "name":"Jane Doe",
    "gender":"Female",
    "image":"jane.png"
},
]
var index=0;
function toggle(){
    if(index==0){
        index=1;
    }else{
     index=0;
    }
     document.getElementById("name").innerText=users[index].name;
     document.getElementById("gender").innerText=users[index].gender;
     document.getElementById("image").src=users[index].image;
}
function randomUser(){
    fetch("https://randomuser.me/api")
    .then(function(rawData){
        return rawData.json();
    })
    .then(function(jsonData){
        var user=jsonData.results[0];
        var ugender=user.gender;
        var image=user.picture.large;
        var fn=user.name.title+" "+user.name.first+" "+user.name.last;
        document.getElementById("name").innerText=fn;
        document.getElementById("gender").innerText=ugender;
        document.getElementById("image").src=image;
    })
}
