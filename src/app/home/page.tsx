import Card from '@/component/Card/Card'
import PositionSquare from '@/component/PositionSquare/PositionSquare'

const data = [
  {
    id: 1,
    title: "프로젝트 1",
    startDate: "2024-02-01",
    endDate: "2024-02-20",
    deposit: "10만원",
    positions: ["디자이너", "기획자", "프론트엔드", "백엔드"],
  },
  {
    id: 2,
    title: "프로젝트 2",
    startDate: "2024-03-01",
    endDate: "2024-03-15",
    deposit: "15만원",
    positions: ["디자이너", "백엔드"],
  },
];

const page = () => {
  return (
    <>
      {data.map((project) => (
        <Card
          key={project.id}
          title={project.title}
          startDate={project.startDate}
          endDate={project.endDate}
          deposit={project.deposit}
        >
          {project.positions.map((position, index) => (
            <PositionSquare key={index} value={position} />
          ))}
        </Card>
      ))}
    </>
  );
}

export default page;