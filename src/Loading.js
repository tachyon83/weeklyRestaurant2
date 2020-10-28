import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

const LoadingStyle = styled.div`
  svg {
    animation: loading-animation 5s linear;
    animation-iteration-count: infinite;
  }

  @keyframes loading-animation {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

const Loading = () => (
  <LoadingStyle>
    <FontAwesomeIcon icon={faSpinner} size="2x" />
  </LoadingStyle>
);

export default Loading;
