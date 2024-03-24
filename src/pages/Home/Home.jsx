import { MainContainer } from 'layouts/MainContainer';
import { Box, Container, CardContainer } from './Home.styled';
import { selectIsLoading } from '../../redux/adverts/selectors';
import { useSelector } from 'react-redux';
import Loader from 'components/Loader';
const Home = () => {
  const isLoading = useSelector(selectIsLoading);

  return (
    <>
      <MainContainer>
        <Container>
          <CardContainer>
            <Box>
              <img
                src="https://activecampers.com.au/wp-content/uploads/2021/07/Active-Campers_155-772x532.jpg"
                alt="First van"
              />
              <p>
                Camping Experience: Camping offers a unique opportunity to
                reconnect with nature and unwind from the hustle and bustle of
                daily life. Waking up to the sound of birds chirping and the
                gentle rustle of leaves is truly rejuvenating. Sitting around a
                campfire under the starlit sky, sharing stories with loved ones,
                creates unforgettable memories. Exploring hiking trails,
                swimming in natural pools, and cooking meals over an open flame
                add to the adventure. Whether in a tent, camper van, or RV,
                camping allows for a sense of freedom and simplicity that is
                hard to find elsewhere.
              </p>
            </Box>
          </CardContainer>
          <CardContainer>
            <Box>
              <p>
                Family Adventures on Wheels: Traveling with a mobile home opens
                up endless possibilities for family adventures. With everything
                you need packed into one vehicle, there's no need to worry about
                accommodation or dining options. Children can experience the
                excitement of waking up in a new location every day, discovering
                hidden gems across the countryside. Family bonds strengthen as
                everyone works together to set up camp, prepare meals, and
                explore the great outdoors. From national parks to coastal
                beaches, the world becomes your playground when you hit the road
                with your home on wheels.
              </p>
              <img
                src="https://tboutdoorrentals.com/wp-content/w3-webp/uploads/2023/03/TB_Van_18-1500x1000.jpgw3.webp"
                alt="Second van"
              />
            </Box>
          </CardContainer>
          <CardContainer>
            <Box>
              <img
                src="https://i.insider.com/5f91f578abcd0c0018d69388?width=1136&format=jpeg"
                alt="Third van"
              />
              <p>
                The Joys of RV Travel: RV travel offers a unique blend of
                comfort and adventure for families seeking to explore the world
                on their own terms. With a fully-equipped kitchen, cozy sleeping
                quarters, and modern amenities, the RV becomes a home away from
                home. Traveling at your own pace, you can spontaneously stop to
                admire breathtaking landscapes or embark on impromptu hiking
                expeditions. Family relationships deepen as you spend quality
                time together, sharing meals, playing games, and marveling at
                the wonders of nature. Whether it's a weekend getaway or an
                extended road trip, RV travel creates unforgettable memories
                that will last a lifetime.
              </p>
            </Box>
          </CardContainer>
        </Container>
      </MainContainer>
      {isLoading && <Loader />}
    </>
  );
};

export default Home;
