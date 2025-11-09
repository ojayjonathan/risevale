"use client"
import { useParams } from "next/navigation"
import { TourDetailsClient } from "./tour-details-client"
import { TOUR_DETAILS } from "@/lib/data"

export default function TourDetailsPage() {
  const {id} = useParams<{id:string}>()
  const tour = TOUR_DETAILS[id]

  if (!tour) {
    return <div className="section-padding text-center">Tour not found</div>
  }

  return <TourDetailsClient tour={tour} />
}
