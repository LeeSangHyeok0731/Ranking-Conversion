import styled from "styled-components";
import RankingDiv from "./components/ranking-divs";

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
  transition
`;

export default function Ranking() {
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

  return (
    <Body>
      {UserInfo.map((x) => {
        return (
          <RankingDiv
            key={x.name}
            name={x.name}
            rank={x.rank}
            click={x.click}
          />
        );
      })}
    </Body>
  );
}
