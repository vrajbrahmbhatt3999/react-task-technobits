import "./Pagination.css"
import Button from "../button/Button";
import { Next, Previous } from "../../assest";
import Container from 'react-bootstrap/Container';
const Pagination = ({
  data,
  itemsPerPage,
  handlePrevious,
  handleNext,
}) => {
  const pages = [];
  for (let i = 1; i <= Math.ceil(data && data.length / itemsPerPage); i++) {
    pages.push(i);
  }
  return (
    <Container fluid="md">
      <div className="paginationContainer">
        <Button
          icon={<Previous fillColor="#0868AA" />}
          handleClick={() => handlePrevious()}
          title="Previous"
          customClass="previousBtn"
          titleCustomClass="title"
          iconCustomClass="icon"
        />
        <Button
          icon={<Next fillColor="#0868AA" />}
          handleClick={() => handleNext()}
          title="Next"
          customClass="nextBtn"
          titleCustomClass="title"
          iconCustomClass="icon"
        />
      </div>
    </Container>
  );
};

export default Pagination;
