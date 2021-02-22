import React from "react";

//import "./Card.styles.scss";
import Header from "./Header";
import Loader from "./Loader";

import {
  CardContainerStyles,
  CardStyles,
  CardTitleStyles,
  CardHrefStyles,
  CardDescriptionStyles,
  LoaderContainerStyles,
} from "./Card.styles";

const Card = (props) => {
  const { vacancies } = props;
  return (
    <>
      <Header />
      <CardContainerStyles>
        {vacancies ? (
          vacancies.length ? (
            vacancies.map((vacancy) => (
              <CardStyles>
                <CardHrefStyles href={vacancy.href}>
                  <CardTitleStyles>{vacancy.title}</CardTitleStyles>
                  <CardDescriptionStyles>
                    {vacancy.description}
                  </CardDescriptionStyles>
                </CardHrefStyles>
              </CardStyles>
            ))
          ) : (
            <LoaderContainerStyles>
              <Loader />
            </LoaderContainerStyles>
          )
        ) : (
          <Loader />
        )}
      </CardContainerStyles>
    </>
  );
};

export default Card;
