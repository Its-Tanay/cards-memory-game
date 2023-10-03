import { useState, useEffect } from "react";

export default function Game({randomImages, handleImageClick}) {

    return (
        <>
            <div id="card-grid">
                {randomImages.map((image, index) => (
                    <img 
                        key={index} 
                        src={image} 
                        alt={`char${index + 1}`}
                        onClick={handleImageClick} 
                        id={`char${index + 1}`}
                    />
                ))}
            </div>
        </>
    );
}