import React from "react";
import InfoCard from "./InfoCard";

function InfoCardList() {
  return (
    <div className="px-10 mt-20">
      <h1 className="text-2xl font-bold mb-8 text-center">Info Card</h1>
      <div className="flex justify-center gap-8 flex-wrap">
        <InfoCard
          img="https://preview.redd.it/quite-ocean-v0-sk81yv256jne1.jpeg?width=640&crop=smart&auto=webp&s=c85637cfbad1b0b64e6529d1ec82a3bda8309f48"
          title="Uncovering the Mysteries of the Ocean"
          desc="Explore fascinating underwater worlds, from coral reefs to deep sea life."
        />
        <InfoCard
          img="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Himalayas,_Ama_Dablam,_Nepal.jpg/1200px-Himalayas,_Ama_Dablam,_Nepal.jpg"
          title="Discovering the World of Mountains"
          desc="Adventures await in the highest peaks and serene alpine lakes."
        />
        <InfoCard
          img="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Himalayas,_Ama_Dablam,_Nepal.jpg/1200px-Himalayas,_Ama_Dablam,_Nepal.jpg"
          title="Mountain Climbing Experience"
          desc="Enjoy climbing experiences with scenic views and fresh air."
        />
        <InfoCard
          img="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Himalayas,_Ama_Dablam,_Nepal.jpg/1200px-Himalayas,_Ama_Dablam,_Nepal.jpg"
          title="Outdoor Skills & Survival"
          desc="Make the most of your outdoor journeys with new skills."
        />
        <InfoCard
          img="https://img.goodfon.ru/wallpaper/big/1/97/priroda-ozero-derevia-solntse-zakat-gory-skaly-nebo.webp"
          title="Exploring the Secrets of the Forest"
          desc="Step into the mysterious world of trees, animals, and wild air."
        />
      </div>
    </div>
  );
}

export default InfoCardList;
