import { FaStar } from "react-icons/fa";

type Props = {
    rating: number;
}

const Rating = ({rating}: Props) => {
    const fullStarts = Math.floor(rating);
    const decimalPart = rating - fullStarts;

    const fullStarElements = Array(fullStarts).fill(<FaStar />);
    let halfStarElement = null;
    if(decimalPart > 0) {
        halfStarElement = <FaStar />
    }

  return (
    <>
        {fullStarElements}
    </>
  )
}

export default Rating