import {Carousel} from 'react-bootstrap';

function ProjectCardX(props) {
  return (
    <Carousel slide={true}>
      <Carousel.Item interval={5000}>
        {props.cards[0]}
      </Carousel.Item>
      <Carousel.Item interval={5000}>
      {props.cards[1]}
      </Carousel.Item>
      <Carousel.Item interval={5000}>
      {props.cards[2]}
      </Carousel.Item>
    </Carousel>
  );
}

export default ProjectCardX;