import { getResume } from '@/api/myPage/api';
import { rest } from '@/api/rest';
import SimpleTable from '@/components/Table/Table';

const MyPage = () => {
  const column = [
    { id: 'No.', header: 'No.', accessorKey: 'id' },
    { id: '프로젝트 명', header: '프로젝트 명', accessorKey: 'proejctName' },
    { id: '결제 일자', header: '결제 일자' },
    { id: '결제 금액', header: '결제 금액' },
  ];

  return <SimpleTable columns={column} data={[{ id: '1' }]} />;
  // return <Component />;
};

export default MyPage;
