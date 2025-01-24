import { useState } from "react";
import styled from "styled-components";

const Body = styled.div`
  width: 1639px;
  height: 102px;
  background-color: #f3f3f3;
  border-radius: 16px;
`;

const RankingColor = styled.div`
  width: 135px;
  height: 102px;
  background-color: #f9d85e;
  clip-path: polygon(0 0, 100% 0, 70% 100%, 0% 100%);
`;

export default function RankingDiv() {
  const [name, setName] = useState<string>("이세민");

  return (
    <Body>
      <RankingColor />
      <h1>{name}</h1>
    </Body>
  );
}
