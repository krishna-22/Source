import React from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, Breadcrumb, BreadcrumbItem,CardImgOverlay } from 'reactstrap';
import { Link } from 'react-router-dom';
function RenderDish({dish}) {
    
    return (
        <Card>
    
                <CardImg width="100%" src={dish.image} alt={dish.name} />
                <CardImgOverlay>
                    <CardTitle>{dish.name}</CardTitle>
                </CardImgOverlay>
           
        </Card>
    );

  }

  function RenderComments({comments}) {
    
    return (
        <Card>
            
                
                    <CardTitle>{comments.author}</CardTitle>
                    <CardBody>
    <p>{comments.comment}</p>
                    </CardBody>
                
           
        </Card>
    );
    
  }

  const  DishDetail = (props) => {

            return (
                <div className="container">
                <div className="row">
                    <Breadcrumb>

                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>                
                </div>
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <RenderDish dish={props.dish} />
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <RenderComments comments={props.comments} />
                    </div>
                </div>
                </div>
            );
            }
export default DishDetail;
