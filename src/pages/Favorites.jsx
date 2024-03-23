import { useSelector } from "react-redux";
import { GrCatalog } from "react-icons/gr";
import { selectFavorites } from "../redux/adverts/selectors";
import { MainContainer } from "layouts/MainContainer";
import AdvertCard from "components/AdvertCard";
import {
  AdvertsList,
  CardItem,
  GoToCatalogLink,
  NoItemsMsg,
} from "components/AdvertCard/AdvertCard.styled";

const Favorites = () => {
  const favorites = useSelector(selectFavorites);
  return (
    <>
      <MainContainer>
        {favorites.length > 0 ? (
          <AdvertsList>
            {favorites.map((fav) => (
              <CardItem key={fav._id}>
                <AdvertCard card={fav} />
              </CardItem>
            ))}
          </AdvertsList>
        ) : (
          <NoItemsMsg className="favs">
            It seems you have not added anything to favorites ...
            <GoToCatalogLink to="/catalog">
              Go to catalog <GrCatalog size={20} fill="var(--accent-red)" />
            </GoToCatalogLink>
          </NoItemsMsg>
        )}
      </MainContainer>
    </>
  );
};

export default Favorites;
