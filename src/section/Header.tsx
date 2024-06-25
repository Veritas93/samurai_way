import { styled } from "styled-components";

export const Header: React.FC = () => {
  return (
    <SHeader>
      <img
        src={
          "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/LEGO_logo.svg/1024px-LEGO_logo.svg.png"
        }
      />
    </SHeader>
  );
};

const SHeader = styled.div`
  img {
    height: 60px;
  }
  grid-area: h;
  background-color: aqua;
`;
