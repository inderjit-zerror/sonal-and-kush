import RSVP from "@/components/common/RSVP";
import FAQ from "@/components/sections/home/FAQ";
import Explore from "@/components/sections/venue/Explore";
import HeroSectionVenue from "@/components/sections/venue/HeroSectionVenue";
import TravelInfo from "@/components/sections/venue/TravelInfo";
import VenueGallery from "@/components/sections/venue/VenueGallery";
import WeddingVenue from "@/components/sections/venue/WeddingVenue";

const venue = () => {
    return (
        <>
            <HeroSectionVenue />
            <WeddingVenue />
            <VenueGallery />
            <TravelInfo />
            <FAQ/>
        </>
    )
}

export default venue
