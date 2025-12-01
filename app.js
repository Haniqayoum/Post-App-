var form = document.querySelector(".signUpForm");
var signUpFormBox = document.getElementById("signUpFormBox");
var postApp = document.getElementById("postApp");


form.addEventListener("submit", function (event) {
  event.preventDefault();

  signUpFormBox.classList.add("hidden");

  postApp.classList.remove("hidden");

  Swal.fire({
    position: "center",
    icon: "success",
    title: "Account Created ❤️!",
    showConfirmButton: false,
    timer: 2000
  });
});

var profilePhotoImg = document.getElementById("profilePhotoImg");
var profilePhotoInput = document.getElementById("profilePhotoInput");

profilePhotoImg.addEventListener("change", function(){
  profilePhotoInput.click();
});

profilePhotoInput.addEventListener("change" , function(e){
  var file = e.target.files[0];
  if (!file) return;

  var reader = new FileReader();
  reader.onload = function(){
    profilePhotoImg.src = reader.result;
    cardImg = reader.result;
  };
  reader.readAsDataURL(file);
});

 var cardImg;
 function deletePost(){
 console.log(event.target.parentNode.parentNode);
 var card = event.target.parentNode.parentNode;
 card.remove();
 }
function editPost() {
  var card = event.target.parentNode.parentNode;
  var title = card.childNodes[3].childNodes[1].innerHTML;
  var description = card.childNodes[3].childNodes[3].innerHTML;
  document.getElementById("title").value = title;
  document.getElementById("description").value = description;
  card.remove();
  
}

function post() {
  var title = document.getElementById("title").value;
  var currentTime = new Date().toLocaleTimeString();
  var description = document.getElementById("description").value;
  var post = document.getElementById("posts");
  console.log(title,description);
  
  if (title.trim() && description.trim()) {
    posts.innerHTML += `
     <DIV class="card m-2">
                            <div class="card-header d-flex"> 
                            <img class="profilePhoto" src="${profilePhotoImg.src}"/>
                            <h6>Post</h6>           
                            <div class ="time">${currentTime}
                            </div>
                            </div>
                            <div style="background-image: url(${cardImg});" class="card-body">
                                <h5 class="card-title">${title}</h5>
                                <p class="card-text">${description}</p>
                            </div>
                            <div class="ms-auto m-2">
                                <button onclick="editPost()" class="btn btn-info">Edit</button>
                                <button onclick="deletePost()" class="btn btn-danger">Delete</button>
                            </div>
                        </DIV>`;
                        document.getElementById("title").value = "";
                        document.getElementById("description").value = "";
  } else {
    const swalWithBootstrapButtons = Swal.mixin({
  customClass: {
    confirmButton: "btn btn-success",
    cancelButton: "btn btn-danger"
  },
  buttonsStyling: false
});
swalWithBootstrapButtons.fire({
  title: "Account Not Created!",
  text: "You Can Edit or Delete Post",
  icon: "warning",
  showCancelButton: true,
  confirmButtonText: "Edit post!",
  cancelButtonText: "Delete Post!",
  reverseButtons: true
}).then((result) => {
  if (result.isConfirmed) {
    Swal.fire({
      title: "You Can Edit Post",
      text: "your post is editable",
      icon: "success"
    });
  } else if (
    /* Read more about handling dismissals below */
    result.dismiss === Swal.DismissReason.cancel
  ) {
    Swal.fire({
      title: "Delete Edits",
      text: "delete edits",
      icon: "error"
    });
  }
});
  }
}
function selectImg(src) {
  cardImg = src;
  console.log(cardImg);
  var cImg = document.getElementsByClassName("bgImg");
  for( var i = 0; i< cImg.length; i++){
    cImg[i].className = "bgImg";
  }
  event.target.classList.add("selectImg");
}
