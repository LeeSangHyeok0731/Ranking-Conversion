import { useEffect, useState } from "react";
import styled from "styled-components";
import { User } from "..";

const Body = styled.div`
  width: 1639px;
  height: 102px;
  background-color: #f3f3f3;
  border-radius: 16px;
  display: flex;
  align-items: center;
  margin-top: 12px;
  margin-bottom: 12px;
`;

const RankingColor = styled.div`
  width: 135px;
  height: 102px;
  background-color: #f9d85e;
  clip-path: polygon(0 0, 100% 0, 70% 100%, 0% 100%);
  border-radius: 16px 0 0 16px;
`;

const InfoBox = styled.div`
  width: 1460px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
`;

const FirstInfo = styled.div`
  display: flex;
  align-items: center;
`;
const SecondInfo = styled.div`
  display: flex;
  align-items: center;
`;

export default function RankingDiv({ name, rank, click }: User) {
  const [Name, setName] = useState<string>("이세민");
  const [Rank, setRank] = useState<number>(0);

  const [Click, setClick] = useState<number>(1000000);

  useEffect(() => {
    setName(name);
    setRank(rank);
    setClick(click);
  }, []);

  return (
    <Body>
      <RankingColor />
      <InfoBox>
        <FirstInfo>
          <h1 style={{ zIndex: 0 }}>{`#${Rank}  `}</h1>
          <h1 style={{ zIndex: 0 }}>{Name}</h1>
        </FirstInfo>
        <SecondInfo>
          <h1 style={{ zIndex: 0 }}>{Click}</h1>
          <h1 style={{ zIndex: 0 }}>클릭</h1>
        </SecondInfo>
      </InfoBox>
    </Body>
  );
}
