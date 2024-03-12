/**
 * [숫자만 허용]
 */
export const numExp = /[^0-9]/g;

/**
 * [유저 아이디 (5~12자의 소문자, 숫자 사용)]
 */

export const userIdPattern = /^[a-zA-Z]{1}[a-zA-Z0-9]{5,14}$/;

/**
 * [비밀번호 (1020자의 영문 소문자, 숫자, 특수문자(!@#$^&*))]
 */

export const passwordPattern = /^(?=.*[a-z])(?=.*[0-9])(?=.*[~!@#$^&*]).{10,20}$/;

/**
 * [유저 이름 (띄어쓰기 불가, 한글만 입력 가능)]
 */

export const userNamePattern = /^[ㄱ-힣]+$/;

/**
 * [개인 폰 번호 (하이픈(-) 제외, 숫자만 입력 가능)]
 */

export const phoneNoPattern = /^[0-9]+$/;

/**
 * [이메일 유효성검사]
 */
export const emailRegEx = /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/i;

/**
 * [이메일 도메인 유효성검사]
 */
export const emailDomainRegEx = /^[a-zA-Z0-9.]+$/;