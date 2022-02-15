import React from "react";

export interface PokemonThumbnailProps {
  id: string;
  name: string;
  image: string;
  type: string;
}

const PokemonThumbnail: React.FC<PokemonThumbnailProps> = ({
  id,
  name,
  image,
  type,
}) => {
  const style = `thumb-container ${type}`;
  return (
    <div className={style}>
      <div className="number">
        <small>#0{id}</small>
        <img src={image} alt="image" />
        <div className="detail-wrapper">
          <h3>{name}</h3>
          <small>{type}</small>
        </div>
      </div>
    </div>
  );
};

export default PokemonThumbnail;
