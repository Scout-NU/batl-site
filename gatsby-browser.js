import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
const addScript = (url) => {
  const script = document.createElement("script");
  script.src = url;
  script.async = true;
  document.body.appendChild(script);
};

const addStylesheet = (url) => {
  var head = document.head;
  var link = document.createElement("link");

  link.type = "text/css";
  link.rel = "stylesheet";
  link.href = url;

  head.appendChild(link);
};

export const onClientEntry = () => {
  window.onload = () => {
    addStylesheet(
      "https://unpkg.com/@northeastern-web/global-elements@^1.0.0/dist/css/index.css"
    );

    var head = document.head;
    var script = document.createElement("script");
    script.src =
      "https://unpkg.com/@northeastern-web/global-elements@^1.0.0/dist/js/index.umd.js";
    script.defer = true;
    head.appendChild(script);

    addScript(
      "https://unpkg.com/@northeastern-web/kernl-ui@^2.0.0/dist/js/index.umd.js"
    );
  };
};

export const wrapPageElement = ({ element, props }) => (
  <>
    <div x-data="NUGlobalElements.header()" x-init="init()" />
    {element}
    <div x-data="NUGlobalElements.footer()" x-init="init()" />
  </>
);
