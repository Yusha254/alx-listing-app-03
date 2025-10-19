import { PROPERTYLISTINGSAMPLE } from "@/constants/index";
import { useRouter } from "next/router";
import PropertyDetail from "@/components/property/PropertyDetail";
import ReviewSection from "@/components/property/ReviewSection";

export default function PropertyPage() {
  const router = useRouter();
  const { id } = router.query;

  const property = PROPERTYLISTINGSAMPLE.find(
    (item) => item.id.toString() === id
  );

  if (!property) return <p className="text-center mt-20">Property not found</p>;



  return (
    <div className="container mx-auto p-6 space-y-12">
      <PropertyDetail property={property} />

    </div>
  );
}
