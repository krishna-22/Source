import React,{Component} from 'react';
import {Media} from 'reactstrap';
class Menu extends Component
{
    constructor(props)
    {
        super(props);
        this.state=
        {
            dishes:[
                {
                "id":0,
                'name':'virat',
                'image':'assets/images/v1.jpg',
                'description': 'He is cool'
                },
                {
                    "id":1,
                    'name':'virat-jim',
                    'image':'assets/images/v2.jpg',
                    'description':'He is hot here'
                    }
            ]
        }
    }
    render()
    {
        const menu=this.state.dishes.map((dish)=>{ return (
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
        return(<div id='parent'>
            <div className="container">
                <div className="row">
                   <media list>
                       {menu}
                   </media>
                </div>
            </div>
        </div>
        );
    }
}
 export default Menu;