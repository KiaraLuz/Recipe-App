import { useContext } from "react";
import { RecipeItem } from "../../components/recipe-item";
import { GlobalContext } from "../../context";

export function Favorites() {
  const { favoritesList } = useContext(GlobalContext);

  return (
    <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
      {favoritesList && favoritesList.length > 0 ? (
        favoritesList.map((item, index) => (
          <RecipeItem item={item} key={index} />
        ))
      ) : (
        <div>
          <p className="lg:text-3xl text-lg text-center">
            Nothing is added in favorites
          </p>
        </div>
      )}
    </div>
  );
}
