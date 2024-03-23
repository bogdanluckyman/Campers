import { MainContainer } from "layouts/MainContainer";
import CamperSea from "assets/pictures/capmer-sea.jpg";
import CamperForest from "assets/pictures/camper-forest.jpg";
import CamperMountains from "assets/pictures/camper-mountains.jpg";
import CamperCouple from "assets/pictures/camper-couple.jpg";
import {
  PictureSection,
  SectionWrap,
  PicturesWrap,
  PicturePositionWrap,
  TextBlock,
} from "./PicturesSection.styled";

const PicturesSection = () => {
  return (
    <PictureSection>
      <MainContainer>
        <SectionWrap>
          <PicturesWrap>
            <img
              src={CamperMountains}
              alt="campervan in the mountains"
              width={300}
              height={500}
            />

            <PicturePositionWrap>
              <img
                src={CamperCouple}
                alt="couple sitting next to campervan"
                width={300}
                height={500}
              />
              <img
                src={CamperForest}
                alt="campervan in the forest"
                width={300}
                height={500}
              />
            </PicturePositionWrap>

            <img
              src={CamperSea}
              alt="campervan on the sea"
              width={300}
              height={500}
            />
          </PicturesWrap>

          <TextBlock>
            <div>
              <h2>Lorem ipsum dolor uatur</h2>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laboriosam, perferendis eaque minus labore in, impedit quae
                aperiam odit illo quas debitis cumque commodi harum dolores
                sapiente repudiandae explicabo, sequi provident. Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Nulla impedit neque
                magnam cum maxime perferendis id aspernatur quo sapiente
                voluptatibus excepturi repellendus mollitia sequi numquam
                placeat ab sit, aperiam possimus! Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Fugiat, officia maxime vero itaque
                voluptate quisquam nisi exercitationem sed? Odio animi
                asperiores accusamus labore nisi! Ducimus cumque asperiores
                assumenda quisquam distinctio.lorem
              </p>

              <p id="additional-info">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laboriosam, perferendis eaque minus labore in, impedit quae
                aperiam odit illo quas debitis cumque commodi harum dolores
                sapiente repudiandae explicabo, sequi provident. Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Nulla impedit neque
                magnam cum maxime perferendis id aspernatur quo sapiente
                voluptatibus excepturi repellendus mollitia sequi numquam
                placeat ab sit, aperiam possimus! Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Fugiat, officia maxime vero itaque
                voluptate quisquam nisi exercitationem sed? Odio animi
                asperiores accusamus labore nisi! Ducimus cumque asperiores
                assumenda quisquam distinctio.lorem
              </p>
            </div>
          </TextBlock>
        </SectionWrap>
      </MainContainer>
    </PictureSection>
  );
};

export default PicturesSection;
