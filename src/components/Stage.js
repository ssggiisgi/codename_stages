import React from 'react' ; 
import dummy from '../db/data.json' ; 
import {useParams} from 'react-router-dom' ; 
import {Link} from 'react-router-dom' ;
import block1 from '../imgset/block1.png' ;
import block2 from '../imgset/block2.png' ;
import block3 from '../imgset/block3.png' ;
import block4 from '../imgset/block4.png' ;
import block5 from '../imgset/block5.png' ;
import block6 from '../imgset/block6.png' ;


export default function Stage() {

    const a = useParams();
    const stage = a.stage;

    return(
        <div className = "block-container">
        <Link to= {`/stage/${stage}/block/1`} ><img src ={block1}></img>
        </Link>

        <Link to={`/stage/${stage}/block/2`}><img src ={block2}></img>
        </Link>

        <Link to={`/stage/${stage}/block/3`}><img src ={block3}></img>
        </Link>

        <Link to={`/stage/${stage}/block/4`}><img src ={block4}></img>
        </Link>

        <Link to={`/stage/${stage}/block/5`}><img src ={block5}></img>
        </Link>

        <Link to={`/stage$/{stage}/block/6`}><img src ={block6}></img>
        </Link>

        </div>
    );
}
