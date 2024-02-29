import { useContext } from "react";
import { GlobalContext } from "../../context";
import { RecipeItem } from "../../components/recipe-item";

export function Home() {
  const { recipeList, loading } = useContext(GlobalContext);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="py-8">
      {recipeList && recipeList.length > 0 && (
        <p className="lg:text-xl text-2xl text-center">
          {recipeList.length} results
        </p>
      )}
      <div className="flex flex-wrap justify-center gap-10">
        {recipeList && recipeList.length > 0 ? (
          recipeList.map((item, index) => (
            <RecipeItem item={item} key={index} />
          ))
        ) : (
          <div>
            <p className="lg:text-3xl text-lg text-center">
              Nothing to show. Please search something
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
