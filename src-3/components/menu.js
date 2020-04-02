import React from 'react';
import {Media} from 'reactstrap';

function RenderMenuItem(props)
{
        const menu=props.dishes.map((dish)=>{ return (
            <div id={dish.id} className="col-12 mt-5">
                <Media tag='li'>
                    <Media left middle>
                        <Media object src={dish.image} alt={dish.id}/>
                    </Media>
                    <Media body className="ml-5">
                        <Media heading >{dish.name}</Media>
                        <p>{dish.description}</p>
                    </Media>
                </Media>
            </div>
        );});
        return menu;
}
function Menu(props)
{
        return(<div id='parent'>
            <div className="container">
                <div className="row">
                   <media list>
                       {RenderMenuItem(props)}
                   </media>
                </div>
            </div>
        </div>
        );

        }
 export default Menu;