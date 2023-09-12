import "./Pagination.css"
import Button from "../button/Button";
import { Next, Previous } from "../../assest";

const Pagination = ({
  data,
  itemsPerPage,
  handlePaginate,
  active,
  handlePrevious,
  handleNext,
}) => {
  const pages = [];
  for (let i = 1; i <= Math.ceil(data && data.length / itemsPerPage); i++) {
    pages.push(i);
  }
  return (
    <div className="paginationContainer">
      <Button
        icon={<Previous fillColor="#0868AA" />}
        handleClick={() => handlePrevious()}
        title="Previous"
        customClass="previousBtn"
        titleCustomClass="title"
        iconCustomClass="icon"
      />
      {pages.map((item, index) => {
        return (
          <span
            key={index}
            // className={item === active ? styles.activePage : styles.pageNumber}
            onClick={() => handlePaginate(item)}
          >
            {item}
          </span>
        );
      })}
      <Button
        icon={<Next fillColor="#0868AA" />}
        handleClick={() => handleNext()}
        title="Next"
        customClass="nextBtn"
        titleCustomClass="title"
        iconCustomClass="icon"
      />
    </div>
  );
};

export default Pagination;
