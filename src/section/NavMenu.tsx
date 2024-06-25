import styled from "styled-components";

export const NavMenu = () => {
  return (
    <SNav>
      <ul>
        <li>
          <a>Profile</a>
        </li>
        <li>
          <a>Message</a>
        </li>
        <li>
          <a>News</a>
        </li>
        <li>
          <a>Music</a>
        </li>
        <li>
          <a>Settings</a>
        </li>
      </ul>
    </SNav>
  );
};

const SNav = styled.nav`
  grid-area: n;
  background-color: blanchedalmond;
`;
