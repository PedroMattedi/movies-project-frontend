import Button from "components/Button/Button";
import MoviesCard from "./components/MoviesCard/MoviesCard";
import * as Styled from "./styles";
import InputComponent from "components/Input/Input";
import Pagination from "components/Pagination/Pagination";

const Home = () => {
  return (
    <Styled.HomeContainer>
      <Styled.FilterRow>
        <InputComponent
          placeholder="Pesquise por filmes"
          onChange={() => {}}
          value=""
          style={{ width: "488px" }}
        />
        <>
          <Button
            style={{
              backgroundColor: "#B744F714",
              width: "85px",
            }}
          >
            Filtros
          </Button>
          <Button style={{ width: "151px" }}>Adicionar Filme</Button>
        </>
      </Styled.FilterRow>

      <Styled.MoviesContainer>
        <MoviesCard></MoviesCard>
        <MoviesCard></MoviesCard>
        <MoviesCard></MoviesCard>
        <MoviesCard></MoviesCard>
        <MoviesCard></MoviesCard>
        <MoviesCard></MoviesCard>
        <MoviesCard></MoviesCard>
        <MoviesCard></MoviesCard>
      </Styled.MoviesContainer>
      <Styled.PaginationSection>
        <Pagination currentPage={1} onPageChange={() => {}} totalPages={10} />
      </Styled.PaginationSection>
    </Styled.HomeContainer>
  );
};

export default Home;
