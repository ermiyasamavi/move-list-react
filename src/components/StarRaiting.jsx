import { useState } from "react";
import Star from "./Star";
import PropTypes from "prop-types";
StarRaiting.propTypes = {
  maxRating: PropTypes.number,
  messages: PropTypes.array,
  onSetRating: PropTypes.func,
};

function StarRaiting({ maxRatind = 5, rating, setRating }) {
  const [tempRating, setTampRating] = useState(0);
  return (
    <div className="">
      <div className="flex items-center gap-5">
        <div className="flex gap-1 ">
          {Array.from({ length: maxRatind }, (_, i) => (
            <Star
              key={i}
              full={tempRating ? tempRating >= i + 1 : rating >= i + 1}
              onRating={() => setRating(i + 1)}
              onHoverEnter={() => setTampRating(i + 1)}
              onHoverLive={() => setTampRating(0)}
            />
          ))}
        </div>
        <p className="text-white text-sm md:text-xl">
          {tempRating || rating || ""}
        </p>
      </div>
    </div>
  );
}

export default StarRaiting;
