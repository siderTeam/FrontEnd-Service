"use client";

import styled from "@emotion/styled";
import styles from "./page.module.css";
import ProjectCard from "@/components/ProejctCard/ProejctCard";
import { getProejct } from "@/api/api";
import { useQuery } from "@tanstack/react-query";
import { rest } from "@/api/rest";

const Page = () => {
  const { data } = useQuery({
    queryKey: [rest.get.proejct],
    queryFn: getProejct,
  });

  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>사이드 프로젝트</h1>
      <FilterContainer>
        <div className="button_wrapper">
          <button>전체</button>
          <button>디자인 ㄱ?</button>
          <button>기획 ㄱ?</button>
          <button>개발 ㄱ?</button>
        </div>
        <input />
      </FilterContainer>

      <ProejctContainer>
        {data?.map((item) => (
          <ProjectCard key={item.id} />
        ))}
      </ProejctContainer>
    </div>
  );
};

export default Page;

const ProejctContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 18px;
`;

const FilterContainer = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 24px;
  .button_wrapper {
    display: flex;
    gap: 20px;
    flex: 1;
    button {
      background: white;
      outline: none;
      width: 160px;
      height: 48px;
      border-radius: 100px;
      border: 1px solid white;
    }
  }
`;
