import React from 'react';
import './Styles/profile.css';

const Profile = () => {
    return(
<div className="profile">

    <div className="container">
  
  <div>
      <h1 className="title">Top Bloggers</h1>
      <p className="descript">These users have the most likes and followers </p>
  </div> 

  <div className="row">

    <div className="col-md">
    <img src={require("/Users/student_ga111/Desktop/Cassini /mod2/wk3/homework/photoApp/photoapp/src/Components/Assets/Images/person1.jpeg")} class="rounded float-left" alt="Makayla" height="250px" width="250px" />
    
    <div>
        <h6>UserName: kayla_Wins</h6>
    </div>

    </div>
{/* ========================================================================================== */}
    <div className="col-md">
    <img src={require("/Users/student_ga111/Desktop/Cassini /mod2/wk3/homework/photoApp/photoapp/src/Components/Assets/Images/person2.jpeg")} class="rounded float-left" alt="Erin" height="250px" width="250px" />
    
    <div>
        <h6>UserName: Erin@Home</h6>
    </div>
    
    </div>
{/* ========================================================================================== */}
    <div className="col-md">
    <img src={require("/Users/student_ga111/Desktop/Cassini /mod2/wk3/homework/photoApp/photoapp/src/Components/Assets/Images/person3.jpeg")} class="rounded float-left" alt="Mike" height="250px" width="250px" />
    
    <div>
        <h6>UserName: MikeJagger</h6>
    </div>

    </div>
{/* ========================================================================================== */}
  </div> 

</div>

</div>

    )
}


export default Profile;