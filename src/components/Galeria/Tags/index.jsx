import styled from "styled-components";
import tags from "./tags.json";

const TagsContainer = styled.section`
    display: flex;
    align-items: center;
    gap: 64px;
    margin-top: 56px;
`

const BuscarEstilizado = styled.h3`
  font-size: 24px;
  margin: 0;
  color: #d9d9d9;
`;

const TagsEstilizadas = styled.button`
  font-size: 24px;
  color: #ffffff;
  background: rgba(217, 217, 217, 0.3);
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  padding: 12px;
  box-sizing: border-box;
  border: 2px solid transparent;
  &:hover {
    border-color: #c98cf1;
  }
`;

const BlocoTags = styled.div`
    display: flex;
    gap: 24px;
    justify-content: end;
`

const Tags = () => {
  return (
    <TagsContainer>
      <BuscarEstilizado>Busque por Tags:</BuscarEstilizado>
      <BlocoTags>
        {tags.map((tag) => (
          <TagsEstilizadas key={tag.id}>{tag.titulo}</TagsEstilizadas>
        ))}
      </BlocoTags>
    </TagsContainer>
  );
};

export default Tags;
