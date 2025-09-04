import React from 'react';

const NewsItem = ({ url, title, description, src }) => {
  return (
    <div className="card bg-dark text-light d-inline-block my-3 mx-3 px-2 py-2" style={{ width: "18rem", height: "100%" }}>
      <img src={src} style={{ width: "100%", height: "200px", objectFit: "cover" }} className="card-img-top" alt="..." />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{title ? title.slice(0, 50) : "There is no title"}</h5>
        <p className="card-text">{description ? description.slice(0, 90) : "News "}</p>
        <a href={url} target='_blank' className="btn btn-primary mt-auto">Read More</a>
      </div>
    </div>
  );
};

export default NewsItem;
