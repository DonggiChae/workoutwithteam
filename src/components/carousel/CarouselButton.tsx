import Image from "next/image";
import LeftArrow from "../../../public/icons/left_arrow.png";
import RightArrow from "../../../public/icons/right_arrow.png";

type SlideButtonProps = {
  direction: "left" | "right";
  onClick: () => void;
};

export default function SlideButton({ direction, onClick }: SlideButtonProps) {
  return (
    <div>
      {direction == "left" ? (
        <button
          onClick={onClick}
          className={`btn-slide-control btn-${direction}`}
        >
          <Image width={30} height={60} src={LeftArrow} alt="left arrow" />
        </button>
      ) : (
        <button
          onClick={onClick}
          className={`btn-slide-control btn-${direction}`}
        >
          <Image width={30} height={60} src={RightArrow} alt="right arrow" />
        </button>
      )}
    </div>
  );
}
