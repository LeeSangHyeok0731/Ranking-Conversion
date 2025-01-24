import styled from "styled-components";
import RankingDiv from "./components/ranking-divs";

const Body = styled.div`
  background-color: #fef9ef;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
`;

export default function Ranking() {
  return (
    <Body>
      <RankingDiv />
    </Body>
  );
}
