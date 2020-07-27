import React from 'react';
import './Styles/home.css';


const Home = () => {
    return (
      <div className="homestyle">
      
      <div>
          <h1 className="title">Erica's Favorite Blogs</h1>
          <p className="descript"> Below are some of my favorite food blogs. Browse the photos and click on them to find recipes. Create an account to save the recipes and follow other bloggers.</p>
      </div>

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

<div className="secondrow">
            <div className="row">
          
                <div className="col-sm">
                <img src={require("/Users/student_ga111/Desktop/Cassini /mod2/wk3/homework/photoApp/photoapp/src/Components/Assets/Images/salad.jpeg")} class="rounded float-left" alt="Salad" height="250px" width="250px" />
                </div>
          
                <div className="col-sm">
                <img src={require("/Users/student_ga111/Desktop/Cassini /mod2/wk3/homework/photoApp/photoapp/src/Components/Assets/Images/steak.jpeg")} class="rounded float-left" alt="Steak" height="250px" width="250px" />
                </div>
          
                <div className="col-sm">
                <img src={require("/Users/student_ga111/Desktop/Cassini /mod2/wk3/homework/photoApp/photoapp/src/Components/Assets/Images/sweets.jpeg")} class="rounded float-left" alt="Sweets" height="250px" width="250px" />
                </div>

  
            </div>
</div>
      </div>

      </div>  
    )
} 
export default Home;