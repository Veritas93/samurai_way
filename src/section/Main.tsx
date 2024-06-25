import styled from "styled-components";

export const Main = () => {
  return (
    <SMain>
      <img
        src={
          "https://www.hessen-tourismus.de/fileadmin/_processed_/e/6/csm_Region_FrankfurtRheinMain_web_c_www.lumen-art-images.de_4e40d4a0c1.jpg"
        }
      />

      <div>
        <img
          src={
            "https://upload.wikimedia.org/wikipedia/commons/a/a0/%D7%94%D7%9C%D7%95%D7%92%D7%95_%D7%A9%D7%9C_%D7%9E%D7%A2%D7%A8%D7%9B%D7%AA_%D7%94%D6%BEFace_ID.jpg"
          }
        />
        <div>description</div>
      </div>
      <div>
        My posts
        <div>New post</div>
      </div>
    </SMain>
  );
};

const SMain = styled.div`
  div img {
    height: 50px;
  }
  grid-area: m;
  background-color: blueviolet;
`;
