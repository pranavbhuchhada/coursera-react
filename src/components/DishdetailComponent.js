import React from 'react';
import { Card, CardImg, CardText, CardBody,CardTitle } from 'reactstrap';
function RenderDish({dish}) {
    return(
        <div  className="col-12 col-md-5 m-1">
            <Card>
                <CardImg top src={dish.image} alt={dish.name} />
                <CardBody>
                <CardTitle>{dish.name}</CardTitle>
                <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        </div>
    );   
}
function RenderComments({comments}) {
    const showComments = comments.map((comment) => {
        return (
            <div key={comment.id}>
                <div>{comment.comment}</div>
                <div>
                    {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}
                </div>
                <br/>
            </div>
        );
    })
    return (
        <div className="col-12 col-md-5 m-1">
            <h3>Comments</h3>
            <ul className="list-unstyled">
                {showComments}
            </ul>
        </div>
    );
}
const  DishDetail = (props) => {
    let dish = props.dish;
    if(dish != null){
        return(
        <div className="row">
            <RenderDish dish={dish} />
            <RenderComments comments={dish.comments}/>
        </div>
        );
    }else{
        return(<div></div>);
    }
}
export default DishDetail;