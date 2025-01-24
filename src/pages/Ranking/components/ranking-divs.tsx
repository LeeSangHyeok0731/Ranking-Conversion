import { useState } from "react";
import styled from "styled-components";

const Body = styled.div`
  width: 1639px;
  height: 102px;
  background-color: #f3f3f3;
  border-radius: 16px;
  display: flex;
  align-items: center;
`;

const RankingColor = styled.div`
  width: 135px;
  height: 102px;
  background-color: #f9d85e;
  clip-path: polygon(0 0, 100% 0, 70% 100%, 0% 100%);
  border-radius: 16px 0 0 16px;
  position: absolute;
`;

export default function RankingDiv() {
  const [name, setName] = useState<string>("이세민");
  const [rank, setRank] = useState<number>(0);

  return (
    <Body>
      <RankingColor />
      <h1 style={{ zIndex: 0 }}>{`#${rank}`}</h1>
      <h1 style={{ zIndex: 0 }}>{name}</h1>
    </Body>
  );
}
