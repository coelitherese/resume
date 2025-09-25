import './App.css'

function App() {
  return (
    <div className="App">
      {leftContainerMain()}
      {rightContainerMain()}
    </div>
  );
}

// LEFT MAIN CONTAINER START
  // MAIN FUNCTION START
  function leftContainerMain(){
    return(
      <div className="leftContainerMain">
        {leftContainerTop()}
        {leftContainerMiddle()}
        {leftContainerBottom()}
      </div>
    )
  }
  // MAIN FUNCTION END

  // LEFT CONTAINER TOP COMPONENTS START
    function leftContainerTop(){
      return(
        <div className="leftContainerTop">
          {profileImage()}
          {profileName()}
        </div>
      );
    }

    function profileImage(){
    return(
      <div className="profileImage">
        <img src="https://scontent.fmnl3-4.fna.fbcdn.net/v/t39.30808-6/469400841_1647760519113262_5283149282386151970_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=101&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFQAhnD5Lspz8FHKMeJQQMIwLLkeuEJxj_AsuR64QnGP9j-3HPNZUjHdXYjE8bjlJIj2yIM2-6yR2yciQ6cKF_U&_nc_ohc=St8LE5p6nJcQ7kNvwHR8f0X&_nc_oc=AdnwpMD6k-XnYvccuc7CVEbV3T9eYIV_RVl4jk4RcXCxNhvzHxBZowyO1oFAQp_pEfE&_nc_zt=23&_nc_ht=scontent.fmnl3-4.fna&_nc_gid=xITduUO6eauEmLXhFczlOQ&oh=00_AfZqSMBE_2WKfglpFs3U6C_K7NVbSG1sO1UFu8wGYwEBzw&oe=68D952AA"/>
      </div>
    )
  }

  function profileName(){
    return(
      <div className="profileName">
        <h2>Coeli Therese</h2>
        <h2>G. Brillante</h2>
      </div>
    )
  }
  // LEFT CONTAINER TOP COMPONENTS END

  // LEFT CONTAINER MIDDLE COMPONENTS START
    function leftContainerMiddle(){
      return(
        <div className="leftContainerMiddle">
          {contactHeader()}
          {contactAddress()}
          {contactPhone()}
          {contactEmail()}
        </div>
      );
    }

    function contactHeader(){
      return(
        <div className="contactHeader">
          <h2>Contact</h2>
        </div>
      );
    }

    function contactAddress(){
      return(
        <div className="contactAddress">
          <p><strong>Address</strong></p>
          <p>Macabebe, Pampanga</p>
        </div>
      );
    }

    function contactPhone(){
      return(
        <div className="contactPhone">
          <p><strong>Phone</strong></p>
          <p>0994 310 5946</p>
        </div>
      );
    }

    function contactEmail(){
      return(
        <div className="contactEmail">
          <p><strong>Email</strong></p>
          <p className='email'>ctg-brillante.student@ua.edu.ph</p>
        </div>
      );
    }
  // LEFT CONTAINER MIDDLE COMPONENTS END


  // LEFT CONTAINER BOTTOM COMPONENTS START
    function leftContainerBottom(){
      return(
        <div className="leftContainerBottom">
          {skillsHeader()}
          {skillsContent()}
        </div>
      );
    }

    function skillsHeader(){
      return(
        <div className='skillsHeader'>
          <h2>Skills</h2>
        </div>
      );
    }

    function skillsContent(){
      return(
        <div className='skillsContent'>
          {skillsContentOne()}
          {skillsContentTwo()}
          {skillsContentThree()}
        </div>
      );
    }

    function skillsContentOne(){
      return(
        <div className='skillsContentOne'>
          <ul>
            <li className='skill1'>Experience in creating graphic designs for Esports Organizations.</li>
          </ul>
        </div>
      );
    }

    function skillsContentTwo(){
      return(
        <div className='skillsContentTwo'>
          <ul>
            <li className='skill2'>Proficient in Adobe Photoshop, Adobe Illustrator, and Canva.</li>
          </ul>
        </div>
      );
    }

    function skillsContentThree(){
      return(
        <div className='skillsContentThree'>
          <ul>
            <li className='skill3'>Strong understanding of design principles, color theory, and typography.</li>
          </ul>
        </div>
      );
    }
  // LEFT CONTAINER BOTTOM COMPONENTS END
// LEFT MAIN CONTAINER END





// RIGHT MAIN CONTAINER START
    // MAIN FUNCTION START
      function rightContainerMain(){
        return(
          <div className='rightContainerMain'>
            {rightContainerTop()}
          </div>
        );
      }
    // MAIN FUNCTION END

    // RIGHT CONTAINER TOP COMPONENTS START
      function rightContainerTop(){
        return(
          <div className='rightContainerTop'>
            {aboutMe()}
            {educationHeader()}
            {rightContainerMiddle()}
            {experienceHeader()}
            {rightContainerBottom()}
          </div>
        );
      }

      function aboutMe(){
        return(
          <div className='aboutMe'>
            <p className='aboutMeText'>Experienced graphic designer with a strong passion in design and graphics. Excels in developing carefully curated graphics and designs ensuring high standards and good quality products. With a keen eye for detail and a mastery of industry-standard software, I bring creative visions to life through compelling visual communication.</p>
          </div>
        );
      }
    // RIGHT CONTAINER TOP COMPONENTS END

    // RIGHT CONTAINER MIDDLE COMPONENTS START
    function educationHeader(){
      return(
        <div className='educationHeader'>
          <h2>Education</h2>
        </div>
      );
    }

    function rightContainerMiddle(){
      return(
        <div className='rightContainerMiddle'>
          {rightContainerMiddleLeft()}
          {rightContainerMiddleRight()}
        </div>
      );
    }

    function rightContainerMiddleLeft(){
      return(
        <div className='rightContainerMiddleLeft'>

        </div>
      );
    }

    function rightContainerMiddleRight(){
      return(
        <div className='rightContainerMiddleRight'>
          {rightContainerMiddleRightContentOne()}
          {rightContainerMiddleRightContentTwo()}
          {rightContainerMiddleRightContentThree()}
          {rightContainerMiddleRightContentFour()}
        </div>
      );
    }
    
    function rightContainerMiddleRightContentOne(){
      return(
        <div className='rightContainerMiddleRightContentOne'>
          <h2 className='yearLevel'>Bachelor of Science in Information Technology</h2>
          <p><em>University of the Assumption - City of San Fernando Pampanga</em></p>
        </div>
      );
    }

    function rightContainerMiddleRightContentTwo(){
      return(
        <div className='rightContainerMiddleRightContentTwo'>
          <h2 className='yearLevel'>General Academic Strand</h2>
          <p><em>St. Scholastica's Academy - City of San Fernando Pampanga</em></p>
        </div>
      );
    }

    function rightContainerMiddleRightContentThree(){
      return(
        <div className='rightContainerMiddleRightContentThree'>
          <h2 className='yearLevel'>Junior High School</h2>
          <p><em>Colegio De San Lorenzo - Macabebe Pampanga</em></p>
        </div>
      );
    }
    
    function rightContainerMiddleRightContentFour(){
      return(
        <div className='rightContainerMiddleRightContentFour'>
          <h2 className='yearLevel'>Elementary Education</h2>
          <p><em>Colegio De San Lorenzo - Macabebe Pampanga</em></p>
        </div>
      );
    }
    // RIGHT CONTAINER MIDDLE COMPONENTS END
    
    // RIGHT CONTAINER BOTTOM COMPONENTS START
      function rightContainerBottom(){
        return(
          <div className='rightContainerBottom'>
            {rightContainerBottomContentOne()}
            {rightContainerBottomContentTwo()}
            {rightContainerBottomContentThree()}
          </div>
        );
      }

      function experienceHeader(){
        return(
          <div className='experienceHeader'>
            <h2>Experience</h2>
          </div>
        );
      }

      function rightContainerBottomContentOne(){
        return(
          <div className='rightContainerBottomContentOne'>
            {rightContainerBottomContentOneLeft()}
            {rightContainerBottomContentOneRight()}
          </div>
        );
      }

      function rightContainerBottomContentOneLeft(){
        return(
          <div className='rightContainerBottomContentOneLeft'>
            <h4>2020 - 2025</h4>
          </div>
        );
      }

      function rightContainerBottomContentOneRight(){
        return(
          <div className='rightContainerBottomContentOneRight'>
            <h2 className='jobExperience'>Freelance (Graphics, Event Staff)</h2>
            <h3><em>Esports</em></h3>
            <ul>
              <li>Organized online esports tournaments</li>
              <li>Produced graphics / digital assets for the live broadcasts.</li>
            </ul>
          </div>
        );
      }

      function rightContainerBottomContentTwo(){
        return(
          <div className='rightContainerBottomContentTwo'>
            {rightContainerBottomContentTwoLeft()}
            {rightContainerBottomContentTwoRight()}
          </div>
        );
      }

      function rightContainerBottomContentTwoLeft(){
        return(
          <div className='rightContainerBottomContentTwoLeft'>
            <h4>2020 - 2023</h4>
          </div>
        );
      }

      function rightContainerBottomContentTwoRight(){
        return(
          <div className='rightContainerBottomContentTwoRight'>
            <h2 className='jobExperience'>Graphic Designer</h2>
            <h3><em>Sventures Gaming</em></h3>
              <ul>
                <li>Organized online esports tournaments</li>
                <li>Produced graphics / digital assets for the live broadcasts.</li>  
            </ul>
          </div>
        );
      }

      function rightContainerBottomContentThree(){
        return(
          <div className='rightContainerBottomContentThree'>
            {rightContainerBottomContentThreeLeft()}
            {rightContainerBottomContentThreeRight()}
          </div>
        );
      }

      function rightContainerBottomContentThreeLeft(){
        return(
          <div className='rightContainerBottomContentThreeLeft'>
            <h4>2023 - 2024</h4>
          </div>
        );
      }

      function rightContainerBottomContentThreeRight(){
        return(
          <div className='rightContainerBottomContentThreeRight'>
            <h2 className='jobExperience'>Graphic Designer</h2>
            <h3><em>Esports</em></h3>
            <ul>
                <li>Central Luzon Esports Organization</li>
                <li>Dragon Esports (Wyrm, Wyvern, Pyra)</li>  
                <li>BlackDime PH</li>
            </ul>
          </div>
        );
      }
    // RIGHT CONTAINER BOTTOM COMPONENTS END
// RIGHT MAIN CONTAINER END

export default App