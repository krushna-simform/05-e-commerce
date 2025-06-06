import authImage from "/images/auth.png";
import authGradient from "/images/auth-gradient.png";
import authShowcaseText from "/images/auth-showcase-text.svg";

export const AuthImgShowcase = () => {
  return (
    <div className="h-full">
      <img
        src={authImage}
        alt="Authentication showcase image"
        className="h-full relative"
      />
      <img
        src={authGradient}
        alt="Authentication showcase image"
        className="h-full absolute top-0 left-0"
      />
      <img
        src={authShowcaseText}
        alt="Authentication showcase image"
        className="h-85 absolute top-80 left-10"
      />
    </div>
  );
};
