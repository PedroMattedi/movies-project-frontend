import Button from "components/Button/Button";
import MoviesCard from "./components/MoviesCard/MoviesCard";
import * as Styled from "./styles";
import InputComponent from "components/Input/Input";
import Pagination from "components/Pagination/Pagination";
import FilterModal from "components/FilterModal/FilterModal";
import SliderModal from "components/SliderModal/SliderModal";
import { useEffect, useState } from "react";
import { getMovies, type Movie } from "services/endpoints/movies";

const Home = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
  const [filters, setFilters] = useState({});

  useEffect(() => {
    async function fetchMovies() {
      try {
        setLoading(true);
        const response = await getMovies(search, currentPage, 10, filters);
        setMovies(response.data);
        setTotalPages(response.meta.totalPages);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
    fetchMovies();
  }, [search, currentPage, filters]);

  return (
    <Styled.HomeContainer>
      <Styled.FilterRow>
        <InputComponent
          placeholder="Pesquise por filmes"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{ width: "488px" }}
        />
        <>
          <Button
            style={{
              backgroundColor: "#B744F714",
              width: "85px",
            }}
            onClick={() => setIsFilterModalOpen(true)}
          >
            Filtros
          </Button>
          <Button
            style={{ width: "151px" }}
            onClick={() => setIsAddModalOpen(true)}
          >
            Adicionar Filme
          </Button>
        </>
      </Styled.FilterRow>

      <Styled.MoviesContainer>
        {loading ? (
          <p>Carregando...</p>
        ) : movies.length === 0 ? (
          <p>Nenhum filme encontrado</p>
        ) : (
          movies.map((movie) => <MoviesCard key={movie.id} movie={movie} />)
        )}
      </Styled.MoviesContainer>

      <Styled.PaginationSection>
        <Pagination
          currentPage={currentPage}
          onPageChange={(page) => setCurrentPage(page)}
          totalPages={totalPages}
        />
      </Styled.PaginationSection>

      <FilterModal
        isOpen={isFilterModalOpen}
        onClose={() => setIsFilterModalOpen(false)}
        onApply={(newFilters) => setFilters(newFilters)}
      />
      <SliderModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onAdd={() => {
          setIsAddModalOpen(false);
          setCurrentPage(1);
        }}
      />
    </Styled.HomeContainer>
  );
};

export default Home;
