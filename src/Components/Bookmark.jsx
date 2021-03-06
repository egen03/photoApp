import React from 'react';

const Bookmark = () => {
    return (
  <div className="homestyle"> 

    <div className="title">
        <h1>My Bookmarks</h1>  
    </div> 
    <p className="descript">
        Here are all your saved bookmarks. Click on the photo for the recipe.
    </p>  
        <div class="container">
  <div class="row">
    <div class="col-sm">
    <img src={require("/Users/student_ga111/Desktop/Cassini /mod2/wk3/homework/photoApp/photoapp/src/Components/Assets/Images/mussels.jpeg")} class="rounded float-left" alt="Mussels" height="250px" width="250px" />
    </div>
    <div class="col-sm">
    <img src={require("/Users/student_ga111/Desktop/Cassini /mod2/wk3/homework/photoApp/photoapp/src/Components/Assets/Images/steak.jpeg")} class="rounded float-left" alt="Steak" height="250px" width="250px" />
    </div>
    <div class="col-sm">
    <img src={require("/Users/student_ga111/Desktop/Cassini /mod2/wk3/homework/photoApp/photoapp/src/Components/Assets/Images/burger.jpeg")} class="rounded float-left" alt="Burger" height="250px" width="250px" />
    </div>
  </div>
</div>

</div>  
    )
}

export default Bookmark;