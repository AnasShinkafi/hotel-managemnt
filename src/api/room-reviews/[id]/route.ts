import { getRoomReviews } from "@/libs/apis";
import { NextResponse } from "next/server";

export async function GET(req: Request, { params }: {params: { id: string}}) {
    const roomId = params.id;

    try {
        const roomReviews = getRoomReviews(roomId);
        return NextResponse.json(roomReviews, { status: 200, statusText: "Successful"});  
    } catch (error) {
        return new NextResponse("Unable to fetch", { status: 400 });
    }
};