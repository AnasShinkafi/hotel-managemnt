import { groq } from "next-sanity";

export const getFeaturedRoomQuery = groq `*[_type == "hotelRoom" && isFeatured == true][0] {
    _id,
    description,
    discount,
    images,
    isFeatured,
    name,
    price,
    slug,
    coverImage,
}`;

export const getRoomsQuery = groq`*[_type == "hotelRoom"] {
    _id,
    description,
    dimension,
    isBooked,
    isFeatured,
    name,
    price,
    slug,
    type,
}`;

export const getRoom = groq`*[_type == "hotelRoom" && slug.current == $slug][0] {
    _id,
    coverImage,
    dimension,
    discount,
    images,
    isBooked,
    isFeatured,
    name,
    numberOfBeds,
    offeredAmenities,
    price,
    slug,
    specialNote,
    type,
}`;

export const getUserBookingQuery = groq`*[_type == 'booking' && user._ref == $userId], {
    _id,
    hotelRoom -> {
        _id,
        name,
        slug,
        price,
    },
    checkingDate,
    checkoutDate,
    numberOfDays,
    adults,
    children,
    totalPrice,
    discount,
}`;

export const getUserData = groq`*[_type == 'user' && _id == $userId] {
    _id,
    name,
    email,
    isAdmin,
    about,
    _createdAt,
    image,
}`;

export const getRoomReviewsQuery = groq`*[_type == "review" && hotelRoom._ref == $roomId] {
    _createAt,
    _id,
    user -> {
        name
    },
    userRating
}`;