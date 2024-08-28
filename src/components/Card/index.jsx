/* eslint-disable react/prop-types */
const Card = ({ image, description, title }) => {
  return (
    <div className="card col-span-4 bg-slate-700 card-compact  w-full shadow-xl">
      <figure className="w-full">
        <img src={image} alt="Shoes" className="w-full h-96" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};
export default Card;
