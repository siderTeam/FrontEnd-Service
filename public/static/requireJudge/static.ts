export const PROJECT_REQUIRE_JUDGE_OPTION = [
  {
    label: '전체',
    value: null,
  },
  {
    label: '요구사항 정의 중',
    value: 32,
  },
  {
    label: '대기',
    value: 33,
  },
  {
    label: '반려',
    value: 34,
  },
  {
    label: '승인',
    value: 35,
  },
];

/**
 * [포지션 코드]
 */
export const POSITION_CODE_ARRAY = [
  {
    id: 30,
    name: '디자인',
  },
  {
    id: 14,
    name: '프론트',
  },
  {
    id: 15,
    name: '백엔드',
  },
  {
    id: 16,
    name: '서버/인프라',
  },
  {
    id: 64,
    name: '기타',
  },
];

/**
 * [프로젝트 상태]
 */
export const PROJECT_STATUS_ARRAY = [
  {
    id: '19',
    name: '모집중',
  },
  {
    id: '20',
    name: '모집완료',
  },
  {
    id: '21',
    name: '요구사항 심사중',
  },
  {
    id: '22',
    name: '요구사항 반려',
  },
  {
    id: '23',
    name: '진행 대기',
  },
  {
    id: '24',
    name: '진행중',
  },
  {
    id: '25',
    name: '중도 종결',
  },
  {
    id: '26',
    name: '제출완료',
  },
  {
    id: '27',
    name: '심사중',
  },
  {
    id: '28',
    name: '심사완료',
  },
  {
    id: '41',
    name: '입금 기간 초과',
  },
];

/**
 * [프로젝트 요구사항 심사 진행 상태]
 */
export const PROJECT_REQUIRE_JUDGE_PROGRESS_STATUS_ARRAY = [
  {
    id: '32',
    name: '요구사항 정의 중',
  },
  {
    id: '33',
    name: '대기',
  },
  {
    id: '34',
    name: '반려',
  },
  {
    id: '35',
    name: '승인',
  },
];

/**
 * [프로젝트 가입 신청 승인 상태]
 */
export const PROJECT_REQUIRE_JOIN_STATUS_ARRAY = [
  {
    id: '37',
    name: '대기',
  },
  {
    id: '38',
    name: '반려',
  },
  {
    id: '39',
    name: '승인',
  },
  {
    id: '40',
    name: '취소',
  },
];

/**
 * [입금 상태]
 */
export const DEPOSIT_STATUS_ARRAY = [
  {
    id: '43',
    name: '대기',
  },
  {
    id: '44',
    name: '기간 초과',
  },
  {
    id: '45',
    name: '입금 확인',
  },
  {
    id: '46',
    name: '환급 대기',
  },
  {
    id: '47',
    name: '환급 완료',
  },
];

/**
 * [스킬 목록]
 */
export const SKILLS = [
  { id: 1, name: 'React', imageName: 'react' },
  { id: 2, name: 'TypeScript', imageName: 'typeScript' },
  { id: 3, name: 'JavaScript', imageName: 'js' },
  { id: 4, name: 'Vue', imageName: 'vue' },
  { id: 5, name: 'Next.js', imageName: 'nextjs' },
  { id: 6, name: 'Svelte', imageName: 'svelte' },
  { id: 7, name: 'Java', imageName: 'java' },
  { id: 8, name: 'Spring', imageName: 'spring' },
  { id: 9, name: 'Node.js', imageName: 'node_js' },
  { id: 10, name: 'Nest.js', imageName: 'nestjs' },
  { id: 11, name: 'Go', imageName: 'go' },
  { id: 12, name: 'Kotlin', imageName: 'jb_kotlin' },
  { id: 13, name: 'Express', imageName: 'express' },
  { id: 14, name: 'MySQL', imageName: 'mySQL' },
  { id: 15, name: 'MongoDB', imageName: 'mongoDB' },
  { id: 16, name: 'Python', imageName: 'python' },
  { id: 17, name: 'DJango', imageName: 'django' },
  { id: 18, name: 'PHP', imageName: 'php' },
  { id: 19, name: 'GraphQL', imageName: 'graphQL' },
  { id: 20, name: 'Firebase', imageName: 'firebase' },
  { id: 21, name: 'Flutter', imageName: 'flutter' },
  { id: 22, name: 'Swift', imageName: 'swift' },
  { id: 23, name: 'Unity', imageName: 'unity' },
  { id: 24, name: 'AWS', imageName: 'AWS' },
  { id: 25, name: 'Kubernetes', imageName: 'kubernetes' },
  { id: 26, name: 'Docker', imageName: 'docker' },
  { id: 27, name: 'Git', imageName: 'git' },
  { id: 28, name: 'Figma', imageName: 'figma' },
  { id: 29, name: 'Zeplin', imageName: 'zeplin' },
  { id: 30, name: 'Jest', imageName: 'jest' },
  { id: 31, name: 'C', imageName: 'c' },
  { id: 32, name: 'CSS', imageName: 'css_3' },
  { id: 33, name: 'HTML', imageName: 'html_5' },
  { id: 34, name: 'Bit Bucket', imageName: 'bitbucket' },
  { id: 35, name: 'JQuery', imageName: 'jquery' },
  { id: 36, name: 'C++', imageName: 'c++' },
  { id: 38, name: 'R', imageName: 'r_lang' },
  { id: 39, name: 'C#', imageName: 'c#' },
  { id: 40, name: 'Ruby', imageName: 'ruby' },
  { id: 42, name: 'Angular', imageName: 'angular' },
  { id: 43, name: 'Drupal', imageName: 'drupal' },
  { id: 44, name: 'Joomla', imageName: 'joomla' },
  { id: 45, name: 'Wordpress', imageName: 'wordpress' },
  { id: 46, name: 'Redux', imageName: 'redux' },
  { id: 47, name: 'Weebly', imageName: 'weebly' },
  { id: 48, name: 'Yii', imageName: 'yii 1' },
  { id: 49, name: 'Dreamweaver', imageName: 'adobe_dreamweaver' },
  { id: 50, name: 'Dribbble', imageName: 'dribbble' },
  { id: 51, name: 'Behance', imageName: 'behance' },
  { id: 52, name: 'Invision', imageName: 'invision' },
  { id: 53, name: 'Autodesk', imageName: 'autodesk' },
  { id: 54, name: 'Lightroom', imageName: 'adobe_lightroom' },
  { id: 55, name: 'Illustrator', imageName: 'adobe_illustrator' },
  { id: 56, name: 'After Effects', imageName: 'adobe_after_effects' },
  { id: 57, name: 'Photoshop', imageName: 'adobe_photoshop' },
  { id: 58, name: 'Indesign', imageName: 'adobe_indesign' },
  { id: 59, name: 'Xd', imageName: 'adobe_xd' },
  { id: 60, name: 'Sketch', imageName: 'sketch' },
  { id: 61, name: 'Framer', imageName: 'framer' },
];