import { Box } from './Home.styled';

const Home = () => {
  return (
    <div>
      <ul>
        <li>
          <Box>
            <img src="/public/images/van-min.jpg" alt="First van" />
            <p></p>
          </Box>
        </li>
        <li>
          <Box>
            <p></p>
            <img src="/public/images/secondVan-min.jpg" alt="Second van" />
          </Box>
        </li>
        <li>
          <Box>
            <img src="/public/images/thirdVan-min.jpg" alt="Third van" />
            <p></p>
          </Box>
        </li>
      </ul>
    </div>
  );
};

export default Home;
