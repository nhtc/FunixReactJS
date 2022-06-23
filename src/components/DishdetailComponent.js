import React, { Component, useEffect } from 'react';
import { Control, Errors, LocalForm } from 'react-redux-form';
import { Link } from 'react-router-dom';
import {
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Card,
  CardBody,
  CardImg,
  CardText,
  CardTitle,
  Col,
  Label,
  Modal,
  ModalBody,
  ModalHeader,
  Row,
} from 'reactstrap';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !val || val.length <= len;
const minLength = (len) => (val) => val && val.length >= len;
const isNumber = (val) => !isNaN(Number(val));
const validEmail = (val) =>
  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

function RenderDish({ dish }) {
  return (
    <div className="">
      <Card>
        <CardImg width="50%" src={dish.image} alt={dish.name} />
        <CardBody>
          <CardTitle>{dish.name}</CardTitle>
          <CardText>{dish.description}</CardText>
        </CardBody>
      </Card>
    </div>
  );
}

function RenderComments({ comments }) {
  const handleOnclick = () => {
    console.log('click');
    return <CommentForm />;
  };
  if (comments != null) {
    return (
      <div className="text-left">
        <h4>Comments</h4>
        <ul className="list-unstyled">
          {comments.map((comment) => {
            return (
              <li key={comment.id}>
                <p>{comment.comment}</p>
                <p>
                  --{comment.author},
                  {new Intl.DateTimeFormat('en-US', {
                    year: 'numeric',
                    month: 'short',
                    day: '2-digit',
                  }).format(new Date(Date.parse(comment.date)))}
                </p>
              </li>
            );
          })}
        </ul>
        <CommentForm dishId={dishId} addComment={addComment} />
      </div>
    );
  } else {
    return <div></div>;
  }
}

class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.props.addComment(
      this.props.dishId,
      values.rating,
      values.author,
      values.comment
    );
    this.state = {
      isCommentFormModalOpen: false,
    };

    this.toggleCommentFormModal = this.toggleCommentFormModal.bind(this);
    this.handleCommentFormSubmit = this.handleCommentFormSubmit.bind(this);
  }

  handleCommentFormSubmit(values) {
    console.log('Current State is: ' + JSON.stringify(values));
    alert('Current State is: ' + JSON.stringify(values));
  }

  toggleCommentFormModal() {
    this.setState({
      isCommentFormModalOpen: !this.state.isCommentFormModalOpen,
    });
  }

  render() {
    return (
      <React.Fragment>
        <Button outline onClick={this.toggleCommentFormModal}>
          <span className="fa fa-comments fa-lg"></span> Submit Comment
        </Button>

        {/* commentform  Modal */}
        <Modal
          isOpen={this.state.isCommentFormModalOpen}
          toggle={this.toggleCommentFormModal}
        >
          <ModalHeader toggle={this.toggleCommentFormModal}>
            {' '}
            Submit Comment{' '}
          </ModalHeader>
          <ModalBody>
            <LocalForm
              onSubmit={(values) => this.handleCommentFormSubmit(values)}
            >
              {/* rating */}
              <Row className="form-group">
                <Label htmlFor="rating" md={12}>
                  Rating
                </Label>
                <Col md={12}>
                  <Control.select
                    model=".rating"
                    className="form-control"
                    name="rating"
                    id="rating"
                    validators={{
                      required,
                    }}
                  >
                    <option>Please Select</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </Control.select>
                  <Errors
                    className="text-danger"
                    model=".author"
                    show="touched"
                    messages={{
                      required: 'Required',
                    }}
                  />
                </Col>
              </Row>

              {/* author */}
              <Row className="form-group">
                <Label htmlFor="author" md={12}>
                  {' '}
                  Your Name{' '}
                </Label>
                <Col md={12}>
                  <Control.text
                    model=".author"
                    id="author"
                    name="author"
                    placeholder="First Name"
                    className="form-control"
                    validators={{
                      required,
                      minLength: minLength(3),
                      maxLength: maxLength(15),
                    }}
                  />
                  <Errors
                    className="text-danger"
                    model=".author"
                    show="touched"
                    messages={{
                      required: 'Required',
                      minLength: 'Must be greater than 2 characters',
                      maxLength: 'Must be 15 characters or less',
                    }}
                  />
                </Col>
              </Row>

              {/* comment */}
              <Row className="form-group">
                <Label htmlFor="comment" md={12}>
                  Comment
                </Label>
                <Col md={12}>
                  <Control.textarea
                    model=".comment"
                    id="comment"
                    name="comment"
                    rows="6"
                    className="form-control"
                    validators={{
                      required,
                    }}
                  />
                  <Errors
                    className="text-danger"
                    model=".author"
                    show="touched"
                    messages={{
                      required: 'Required',
                    }}
                  />
                </Col>
              </Row>

              {/* submit button */}
              <Row className="form-group">
                <Col>
                  <Button type="submit" color="primary">
                    Submit
                  </Button>
                </Col>
              </Row>
            </LocalForm>
          </ModalBody>
        </Modal>
      </React.Fragment>
    );
  }
}

const DishDetail = (props) => {
  if (props.dish != null) {
    return (
      <div className="container">
        <div className="row">
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/menu">Menu</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
          </Breadcrumb>
          <div className="col-12">
            <h3>{props.dish.name}</h3>
            <hr />
          </div>
        </div>
        <div className="row">
          <div className="col-6 col-md-5 m-1">
            <RenderDish dish={props.dish} />
          </div>
          <div className="col-6 col-md-5 m-1">
            <RenderComments
              comments={props.comments}
              addComment={props.addComment}
              dishId={props.dish.id}
            />
          </div>
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default DishDetail;
