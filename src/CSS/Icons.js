import "./style.css";

function Icons(){
    return(
    <div id="Section">
      <h1 className="subHeading">Icons</h1>
      <div>
      <button className="button">Button <span class="material-icons md-24">face</span></button>
      <span id="textIcon">Like  <span class="material-icons md-36 md-dark md-inactive">thumb_up</span></span>
      </div>
      </div>
    );
}

export default Icons;