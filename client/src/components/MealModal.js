import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";

const MealModal = ({ meal }) => {
  const [details, setDetails] = useState([]);

  const getMealDetails = async (id) => {
    const response = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    );

    const data = await response.data.meals;
    setDetails(data);
    console.log(data);
  };

  useEffect(() => {
    getMealDetails(meal.idMeal);
  }, []);

  return (
    <Fragment>
      <button
        type="button"
        className="btn btn-primary"
        data-toggle="modal"
        data-target={`#id${meal.idMeal}`}
      >
        Get Recipe
      </button>

      <div
        className="modal fade"
        id={`id${meal.idMeal}`}
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        {details.map((detail) => (
          <div
            className="modal-dialog modal-dialog-centered"
            role="document"
            key={detail.idMeal}
          >
            <div className="modal-content">
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span className="modal-times" aria-hidden="true">
                  &times;
                </span>
              </button>
              <div className="modal-header">
                <h3 className="modal-title col-12" id="exampleModalLongTitle">
                  {detail.strMeal}
                </h3>
              </div>
              <div className="modal-body">
                <h5>{detail.strCategory}</h5>
                <h4>Instructions</h4>
                <p>{detail.strInstructions}</p>
                <h6>Watch Video!</h6>
                <a href={detail.strYoutube} target="_blank">
                  <img className="modal-img" src={detail.strMealThumb} alt="" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Fragment>
  );
};

export default MealModal;
