function upload(){


      var title = document.getElementById("title").value;
      var article = document.getElementById("article").value;
      var imageLink = document.getElementById("file");
    var divTag = document.getElementById("float-child");

    sessionStorage.setItem("obj", title);
    sessionStorage.setItem("obj1", article);

    /*var blogImage = document.createElement("img");
   blogImage.src = imageLink;
   document.getElementById("float-container").appendChild(blogImage);*/
     ////var blogImageContent = document.createTextNode("<img src = " +imageLink+">");
    ////blogImage.appendChild(blogImage);


   // document.getElementById("float-container").appendChild(image);


const inpFile=document.getElementById("file");

document.querySelector("#file").addEventListener("change", function(){
    const reader = new FileReader();

    reader.addEventListener("load", ()=>{
        localStorage.setItem("recent-image", reader.result);
    });
    reader.readAsDataURL(this.files[0]);
});

document.addEventListener("DOMContentLoaded", ()=>{
    const recentImageDataUrl = localStorage.getItem("recent-image");

    if(recentImageDataUrl) {
        document.querySelector("#imgPreview").setAttribute("src", recentImageDataUrl);
    }
});


      var blogTag = document.createElement("p");
      var blogTagContent = document.createTextNode(title );
      blogTag.appendChild(blogTagContent );

      var blogTagArticle = document.createElement("p");
      var blogTagContentArticle = document.createTextNode(article);
                 blogTagArticle.appendChild(blogTagContentArticle);

       // divTag.appendChild(blogImage);
      divTag.appendChild(blogTag);
      divTag.appendChild(blogTagArticle)



      reset();
  }

  function reset(){
      document.getElementById("title").value = "";
      document.getElementById("article").value = "";
  }


  var realFileBtn = document.getElementById("file");
var customBtn = document.getElementById("image");
var customText= document.getElementById("custom-text");

/*customBtn.addEventListener("click", function(){
    realFileBtn.click();
});*/
  
