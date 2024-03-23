import { Box } from './Home.styled';

const Home = () => {
  return (
    <div>
      <ul>
        <li>
          <Box>
            <img src="/images/van.jpg" alt="First van" />
            <p></p>
          </Box>
        </li>
        <li>
          <Box>
            <p></p>
            <img src="/images/secondVan.jpg" alt="Second van" />
          </Box>
        </li>
        <li>
          <Box>
            <img src="/images/thirdVan.jpg" alt="Third van" />
            <p></p>
          </Box>
        </li>
      </ul>
    </div>
  );
};

export default Home;
