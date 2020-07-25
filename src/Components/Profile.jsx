import React from 'react';

const Profile = () => {
    return (
        <div className="container">
        
            <div className="row">
          
                <div className="col-sm">
                {/* <div> */}
                <img src={require("/Users/student_ga111/Desktop/Cassini /mod2/wk3/homework/photoApp/photoapp/src/Components/Assets/Images/burger.jpeg")} class="rounded float-left" alt="Burger" height="300px" width="300px" />
                {/* </div> */}
                </div>
          
                <div className="col-sm">
                    One of three columns
                </div>
          
                <div className="col-sm">
                    One of three columns
                </div>

            </div>

            <div className="row">
          
                <div className="col-sm">
                    One of three columns
                </div>
          
                <div className="col-sm">
                    One of three columns
                </div>
          
                <div className="col-sm">
                    One of three columns
                </div>

  
            </div>

      </div>
    )
} 

export default Profile;