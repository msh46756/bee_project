import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./nativeplants.css";

function HomeNativePlants() {
  return (
    <div className="d-flex justify-content-start my-3">
      <div className="nativeplants-colored-box p-3">
        <h2 className="nativeplants-box-title">
          Why are native plants essential for bee populations
        </h2>
        <p className="nativeplants-box-text">
          In the Netherlands alone, there are around 360 different species of
          bees. Alarmingly, half of these species are currently endangered,
          putting them at risk of disappearing forever. Tragically, 34 species
          have already vanished from Dutch ecosystems. Native plants are
          essential for supporting these local bee populations. They provide the
          specific nectar and pollen that bees need to survive. These plants
          have co-evolved alongside bees over time, creating a perfect match for
          their nutritional needs. By choosing native plants for our gardens and
          green spaces, we can create safe havens for bees to thrive, along with
          other pollinators. This not only helps bees but also benefits other
          pollinating animals, contributing to a richer and more diverse
          ecosystem overall.
        </p>
      </div>
    </div>
  );
}

export default HomeNativePlants;
