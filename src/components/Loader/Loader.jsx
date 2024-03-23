import { Watch } from "react-loader-spinner";
import { LoaderWrapper } from "./Loader.styled";

const Loader = () => {
  return (
    <LoaderWrapper>
      <Watch
        visible={true}
        height="200"
        width="200"
        radius="48"
        color="var(--accent-red)"
        ariaLabel="watch-loading"
      />
    </LoaderWrapper>
  );
};

export default Loader;
