import styled from "styled-components";
import RankingDiv from "./components/ranking-divs";
import { useState } from "react";

export type User = {
  name: string;
  rank: number;
  click: number;
  me?: boolean;
};

const Body = styled.div`
  background-color: #fef9ef;
  width: 100vw;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  transition: all 0.5s;
`;

export default function Ranking() {
  const [set, setReverse] = useState<boolean>(false);

  const UserInfo: User[] = [
    {
      name: "김민수",
      rank: 1,
      click: 10000,
    },
    {
      name: "이서현",
      rank: 2,
      click: 9999,
    },
    {
      name: "박지훈",
      rank: 3,
      click: 9998,
    },
    {
      name: "이상혁",
      rank: 4,
      click: 9997,
      me: true,
    },
    {
      name: "최영수",
      rank: 5,
      click: 9996,
    },
    {
      name: "최영수",
      rank: 5,
      click: 9996,
    },
    {
      name: "최영수",
      rank: 5,
      click: 9996,
    },
    {
      name: "최영수",
      rank: 5,
      click: 9996,
    },
    {
      name: "최영수",
      rank: 5,
      click: 9996,
    },
    {
      name: "최영수",
      rank: 5,
      click: 9996,
    },
    {
      name: "최영수",
      rank: 5,
      click: 9996,
    },
    {
      name: "최영수",
      rank: 5,
      click: 9996,
    },
    {
      name: "최영수",
      rank: 5,
      click: 9996,
    },
    {
      name: "최영수",
      rank: 5,
      click: 9996,
    },
    {
      name: "최영수",
      rank: 5,
      click: 9996,
    },
    {
      name: "최영수",
      rank: 5,
      click: 9996,
    },
    {
      name: "최영수",
      rank: 5,
      click: 9996,
    },
    {
      name: "최영수",
      rank: 5,
      click: 9996,
    },
    {
      name: "최영수",
      rank: 5,
      click: 9996,
    },
    {
      name: "최영수",
      rank: 5,
      click: 9996,
    },
    {
      name: "최영수",
      rank: 5,
      click: 9996,
    },
    {
      name: "최영수",
      rank: 5,
      click: 9996,
    },
    {
      name: "최영수",
      rank: 5,
      click: 9996,
    },
    {
      name: "최영수",
      rank: 5,
      click: 9996,
    },
    {
      name: "최영수",
      rank: 5,
      click: 9996,
    },
    {
      name: "최영수",
      rank: 5,
      click: 9996,
    },
    {
      name: "최영수",
      rank: 5,
      click: 9996,
    },
    {
      name: "최영수",
      rank: 5,
      click: 9996,
    },
    {
      name: "최영수",
      rank: 5,
      click: 9996,
    },
    {
      name: "최영수",
      rank: 5,
      click: 9996,
    },
    {
      name: "최영수",
      rank: 5,
      click: 9996,
    },
    {
      name: "최영수",
      rank: 5,
      click: 9996,
    },
    {
      name: "최영수",
      rank: 5,
      click: 9996,
    },
    {
      name: "최영수",
      rank: 5,
      click: 9996,
    },
    {
      name: "최영수",
      rank: 5,
      click: 9996,
    },
    {
      name: "최영수",
      rank: 5,
      click: 9996,
    },
    {
      name: "최영수",
      rank: 5,
      click: 9996,
    },
    {
      name: "최영수",
      rank: 5,
      click: 9996,
    },
    {
      name: "최영수",
      rank: 5,
      click: 9996,
    },
    {
      name: "최영수",
      rank: 5,
      click: 9996,
    },
    {
      name: "최영수",
      rank: 5,
      click: 9996,
    },
    {
      name: "최영수",
      rank: 5,
      click: 9996,
    },
    {
      name: "최영수",
      rank: 5,
      click: 9996,
    },
    {
      name: "최영수",
      rank: 5,
      click: 9996,
    },
    {
      name: "최영수",
      rank: 5,
      click: 9996,
    },
    {
      name: "최영수",
      rank: 5,
      click: 9996,
    },
    {
      name: "최영수",
      rank: 5,
      click: 9996,
    },
  ];

  const UserInfo2: User[] = [
    {
      name: "이상혁",
      rank: 1,
      click: 10000,
    },
    {
      name: "이서현",
      rank: 2,
      click: 9999,
    },
    {
      name: "박지훈",
      rank: 3,
      click: 9998,
    },
    {
      name: "이상혁",
      rank: 4,
      click: 9997,
      me: true,
    },
    {
      name: "최영수",
      rank: 5,
      click: 9996,
    },
    {
      name: "최영수",
      rank: 5,
      click: 9996,
    },
    {
      name: "최영수",
      rank: 5,
      click: 9996,
    },
    {
      name: "최영수",
      rank: 5,
      click: 9996,
    },
    {
      name: "최영수",
      rank: 5,
      click: 9996,
    },
    {
      name: "최영수",
      rank: 5,
      click: 9996,
    },
    {
      name: "최영수",
      rank: 5,
      click: 9996,
    },
    {
      name: "최영수",
      rank: 5,
      click: 9996,
    },
    {
      name: "최영수",
      rank: 5,
      click: 9996,
    },
    {
      name: "최영수",
      rank: 5,
      click: 9996,
    },
    {
      name: "최영수",
      rank: 5,
      click: 9996,
    },
    {
      name: "최영수",
      rank: 5,
      click: 9996,
    },
    {
      name: "최영수",
      rank: 5,
      click: 9996,
    },
    {
      name: "최영수",
      rank: 5,
      click: 9996,
    },
    {
      name: "최영수",
      rank: 5,
      click: 9996,
    },
    {
      name: "최영수",
      rank: 5,
      click: 9996,
    },
    {
      name: "최영수",
      rank: 5,
      click: 9996,
    },
    {
      name: "최영수",
      rank: 5,
      click: 9996,
    },
    {
      name: "최영수",
      rank: 5,
      click: 9996,
    },
    {
      name: "최영수",
      rank: 5,
      click: 9996,
    },
    {
      name: "최영수",
      rank: 5,
      click: 9996,
    },
    {
      name: "최영수",
      rank: 5,
      click: 9996,
    },
    {
      name: "최영수",
      rank: 5,
      click: 9996,
    },
    {
      name: "최영수",
      rank: 5,
      click: 9996,
    },
    {
      name: "최영수",
      rank: 5,
      click: 9996,
    },
    {
      name: "최영수",
      rank: 5,
      click: 9996,
    },
    {
      name: "최영수",
      rank: 5,
      click: 9996,
    },
    {
      name: "최영수",
      rank: 5,
      click: 9996,
    },
    {
      name: "최영수",
      rank: 5,
      click: 9996,
    },
    {
      name: "최영수",
      rank: 5,
      click: 9996,
    },
    {
      name: "최영수",
      rank: 5,
      click: 9996,
    },
    {
      name: "최영수",
      rank: 5,
      click: 9996,
    },
    {
      name: "최영수",
      rank: 5,
      click: 9996,
    },
    {
      name: "최영수",
      rank: 5,
      click: 9996,
    },
    {
      name: "최영수",
      rank: 5,
      click: 9996,
    },
    {
      name: "최영수",
      rank: 5,
      click: 9996,
    },
    {
      name: "최영수",
      rank: 5,
      click: 9996,
    },
    {
      name: "최영수",
      rank: 5,
      click: 9996,
    },
    {
      name: "최영수",
      rank: 5,
      click: 9996,
    },
    {
      name: "최영수",
      rank: 5,
      click: 9996,
    },
    {
      name: "최영수",
      rank: 5,
      click: 9996,
    },
    {
      name: "최영수",
      rank: 5,
      click: 9996,
    },
    {
      name: "최영수",
      rank: 5,
      click: 9996,
    },
  ];

  const handleClick = () => {
    setReverse(!set);
  };

  return (
    <Body>
      <button onClick={handleClick}>배열 바꾸기</button>
      {set
        ? UserInfo.map((x) => (
            <RankingDiv
              key={x.name}
              name={x.name}
              rank={x.rank}
              click={x.click}
            />
          ))
        : UserInfo2.map((x) => (
            <RankingDiv
              key={x.name}
              name={x.name}
              rank={x.rank}
              click={x.click}
            />
          ))}
    </Body>
  );
}
