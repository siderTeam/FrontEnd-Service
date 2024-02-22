import Radio from "@/components/Radio/Radio";

const Page = () => {
  return (
    <div style={{ width: 300, height: 300 }}>
      <Radio text="??" />
      <Radio />
      <Radio disabled />
      <Radio />
      <Radio />

      <div>
        <Radio size="big" />
        <Radio size="big" />
        <Radio size="big" />
        <Radio size="big" />
        <Radio size="big" />
      </div>
    </div>
  );
};

export default Page;
