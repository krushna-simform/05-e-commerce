import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

interface RecipeRatingProp {
  rating: number;
}

export const Rating = ({ rating }: RecipeRatingProp) => {
  let remaining = rating;

  return (
    <div className="flex items-center gap-1" role="presentation">
      {Array.from({ length: 5 }, (_, i) => {
        let StarIcon = FaRegStar;
        if (remaining >= 1) {
          StarIcon = FaStar;
        } else if (remaining > 0) {
          StarIcon = FaStarHalfAlt;
        }
        remaining--;

        return <StarIcon key={i} className="text-blue-600 w-4.5 h-4.5" />;
      })}
      <span className="ml-2 text-lg text-gray-700 font-medium">
        {rating.toFixed(1)}
      </span>
    </div>
  );
};
