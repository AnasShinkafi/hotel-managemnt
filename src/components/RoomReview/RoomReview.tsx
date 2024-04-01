import { Review } from "@/models/review";
import axios from "axios"
import { FC } from "react"
import useSWR from "swr";
import Rating from "../Rating/Rating";

const RoomReview: FC<{ roomId: string }> = ({ roomId }) => {
  const fetchRoomReviews = async () => {
    const { data } = await axios.get<Review[]>(`/api/room-reviews/${roomId}`);
    return data;
  };

  const { data: roomReviews, error, isLoading } = useSWR('/api/room-reviews', fetchRoomReviews);

  if (error) throw new Error('Can not fetch data');
  if (typeof roomReviews === 'undefined' && !isLoading) throw new Error('Can not fetch data');

  return (
    <>
      {roomReviews && roomReviews.map(review => (
        <div key={review._id} className=" bg-gray-100 dark:bg-gray-900 rounded-lg">
          <div className="font-semibold mb-2 flex">
            <p className="">{review.user.name}</p>
            <div className="ml-4 flex items-center text-tertiary-light text-lg">
              <Rating rating={review.userRating} />
            </div>
          </div>

          <p className="">{review.text}</p>
        </div>
      ))}
    </>
  )
}

export default RoomReview