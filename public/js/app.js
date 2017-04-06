// Get a reference to the storage service, which is used to create references in your storage bucket
var storage = firebase.storage();

// Create a storage reference from our storage service
var storageRef = storage.ref();

// Create a child reference
var imagesRef = storageRef.child('image');
// imagesRef now points to 'images'


// Child references can also take paths delimited by '/'
if(Math.random() >=0.5)
    var head = 'neko_code.jpg';
else
    var head = 'neko_code02.jpg';
var spaceRef = imagesRef.child(head);
var img = document.getElementById('header-i');
spaceRef.getDownloadURL().then(function(url) {
    // `url` is the download URL for 'images/stars.jpg'
    var pathhead = 'url("'+ url +'")';
    img.style.background = pathhead;

});

var neko1 = 'head_01.jpg';
var spaceRef1 = imagesRef.child(neko1);
var img1 = document.getElementById('ab1');
spaceRef1.getDownloadURL().then(function(url) {
    // `url` is the download URL for 'images/stars.jpg'
    img1.src = url;
    // console.log(url);
    // console.log('1');

});

var neko2 = 'head_02.jpg';
var spaceRef2 = imagesRef.child(neko2);
var img2 = document.getElementById('ab2');
spaceRef2.getDownloadURL().then(function(url) {
    // `url` is the download URL for 'images/stars.jpg'
    img2.src = url;
    // console.log(url);
    // console.log('2');
});

var neko3 = 'head_03.jpg';
var spaceRef3 = imagesRef.child(neko3);
var img3 = document.getElementById('ab3');
spaceRef3.getDownloadURL().then(function(url) {
    // `url` is the download URL for 'images/stars.jpg'
    img3.src = url;
    // console.log(url);
    // console.log('3');

});

// const btnComment = document.getElementById()

// const ref = new Firebase("localhost:5000");
// form.addEventListener("submit", postComment);

// const timeStamp = () => {
//     let options = {
//         month: '2-digit',
//         day: '2-digit',
//         year: '2-digit',
//         hour: '2-digit',
//         minute: '2-digit'
//     };
//     let now = new Date().toLocaleString('en-US', options);
//     return now;
// };

// function postComment(e) {
//     e.preventDefault();

//     let name = document.getElementById("name").value;
//     let comment = document.getElementById("comment").value;
//     // var textnum = storageRef.child('text/');
    


//     if (name && comment) {
//         firebase.auth().signInAnonymously();
//         var afuRef = storageRef.child('text/t00.txt');
//         var comm = name + ':' + comment; 
//         afuRef.putString(comm);
//         ref.push({
//             name: name,
//             comment: comment,
//             time: timeStamp()
//         });

//     }

//     document.getElementById("name").value = '';
//     document.getElementById("comment").value = '';
// };

// ref.on("child_added", function(snapshot) {
//     let comment = snapshot.val();
//     addComment(comment.name, comment.comment, comment.time);
// });

// const addComment = (name, comment, timeStamp) => {
//     let comments = document.getElementById("comments");
//     comments.innerHTML = `<hr><h4>${name} says<span>${timeStamp}</span></h4><p>${comment}</p>${comments.innerHTML}`;
// }