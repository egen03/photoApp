import React from 'react';

const Profile = () => {
    return (
        <div className="container">
        
            <div className="row">
          
                <div className="col-sm">
                {/* <div> */}
                    <img src={require("/Users/student_ga111/Desktop/Cassini /mod2/wk3/homework/photoApp/photoapp/src/Components/Assets/Images/burger.jpeg")} class="rounded float-left" alt="Burger" height="250px" width="250px" />
                {/* </div> */}
                </div>
          
                <div className="col-sm">
                    <img src={require("/Users/student_ga111/Desktop/Cassini /mod2/wk3/homework/photoApp/photoapp/src/Components/Assets/Images/mussels.jpeg")} class="rounded float-left" alt="Mussels" height="250px" width="250px" />
                </div>
          
                <div className="col-sm">
                <img src={require("/Users/student_ga111/Desktop/Cassini /mod2/wk3/homework/photoApp/photoapp/src/Components/Assets/Images/pasta.jpeg")} class="rounded float-left" alt="Pasta" height="250px" width="250px" />
                </div>

            </div>

            <div className="row">
          
                <div className="col-sm">
                <img src={require("/Users/student_ga111/Desktop/Cassini /mod2/wk3/homework/photoApp/photoapp/src/Components/Assets/Images/salad.jpeg")} class="rounded float-left" alt="Salad" height="250px" width="250px" />
                </div>
          
                <div className="col-sm">
                <img src={require("/Users/student_ga111/Desktop/Cassini /mod2/wk3/homework/photoApp/photoapp/src/Components/Assets/Images/steak.jpeg")} class="rounded float-left" alt="Steak" height="250px" width="250px" />
                </div>
          
                <div className="col-sm">
                    One of three columns
                </div>

  
            </div>

      </div>
    )
} 

export default Profile;