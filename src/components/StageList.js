import dummy from '../db/data.json' ; 
import {Link} from 'react-router-dom' ;
import stage_img1 from '../imgset/stage1.png' ; 
import stage_img2 from '../imgset/stage2.png' ; 
import stage_img3 from '../imgset/stage3.png' ; 
import stage_img4 from '../imgset/stage4.png' ; 



export default function StageList() {

    return (
        
        
        <div className = "stage-container">
            <Link to ={"/stage/1"}><img src= {stage_img1}></img>
            </Link>
            <Link to={"/stage/2"}><img src= {stage_img2}></img>
            </Link>
            <Link to={"/stage/3"}> <img src= {stage_img3}></img>
            </Link>
           <Link to={"/stage/4"}><img src= {stage_img4}></img>
           </Link>
            
        </div>
        
    )

}