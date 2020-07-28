import * as S from './styles';

const Main = ({
  title = 'NextJs Skeleton',
  description = 'NextJs, Typescript, ReactJs e Styled Components',
}) => (
  <S.Wrapper>
    <S.Logo
      src="/img/logo.svg"
      alt={`Imagem de um átomo e ${title} escrito ao lado`}
    />
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
  </S.Wrapper>
);

export default Main;
