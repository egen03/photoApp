import React from 'react';

const Profile = () => {
    return(
<div className="profile">
<div class="container">
  
  <div>
      <h1>Top Bloggers</h1>
      <p>These users have the most likes and followers </p>
  </div> 

  <div class="row">

    <div class="col-md">
    <img src={require("/Users/student_ga111/Desktop/Cassini /mod2/wk3/homework/photoApp/photoapp/src/Components/Assets/Images/person1.jpeg")} class="rounded float-left" alt="Makayla" height="250px" width="250px" />
    </div>

    <div class="col-md">
    <img src={require("/Users/student_ga111/Desktop/Cassini /mod2/wk3/homework/photoApp/photoapp/src/Components/Assets/Images/person2.jpeg")} class="rounded float-left" alt="Erin" height="250px" width="250px" />
    </div>

    <div class="col-md">
    <img src={require("/Users/student_ga111/Desktop/Cassini /mod2/wk3/homework/photoApp/photoapp/src/Components/Assets/Images/person3.jpeg")} class="rounded float-left" alt="Mike" height="250px" width="250px" />
    </div>

  </div>

</div>

</div>

    )
}


export default Profile;