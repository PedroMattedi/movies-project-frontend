import VideoComponent from "components/Video/VideoComponent";
import * as Styled from "./styles";
import Button from "components/Button/Button";
import PercentageComponent from "./components/Percentage";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  getMovieById,
  deleteMovie,
  updateMovie,
} from "services/endpoints/movies";
import SliderModal from "components/SliderModal/SliderModal";

const Movie = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [isEditOpen, setIsEditOpen] = useState(false);

  async function fetchMovie() {
    try {
      const data = await getMovieById(id!);
      setMovie(data);
    } catch (error) {
      console.error(error);
      alert("Erro ao carregar informações do filme");
      navigate("/home");
    } finally {
      setLoading(false);
    }
  }

  async function handleDelete() {
    if (!window.confirm("Tem certeza que deseja deletar este filme?")) return;
    try {
      await deleteMovie(id!);
      alert("Filme deletado com sucesso!");
      navigate("/home");
    } catch (error) {
      console.error(error);
      alert("Erro ao deletar filme");
    }
  }

  const handleEdit = async (updatedData: any) => {
    try {
      await updateMovie(id!, updatedData);
      setIsEditOpen(false);
      await fetchMovie();
      alert("Filme atualizado com sucesso!");
    } catch (error) {
      console.error(error);
      alert("Erro ao atualizar filme");
    }
  };

  useEffect(() => {
    fetchMovie();
  }, [id]);

  if (loading) return <p style={{ color: "white" }}>Carregando...</p>;
  if (!movie) return null;

  const youtubeId = movie.trailerUrl?.includes("youtube.com/watch?v=")
    ? movie.trailerUrl.split("v=")[1]
    : movie.trailerUrl?.includes("youtu.be/")
    ? movie.trailerUrl.split("youtu.be/")[1]
    : "qe3l1rvJMlA";

  return (
    <Styled.PageContainer>
      <Styled.MovieInfoContainer
        style={{
          backgroundImage: `url(${movie.backgroundImageUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Styled.BackgroundOverlay />

        <Styled.MovieHeaderAndActions>
          <Styled.TitlesColumn>
            <Styled.TitleText>{movie.title}</Styled.TitleText>
            <Styled.SubtitleText>
              Título original: {movie.originalTitle || movie.title}
            </Styled.SubtitleText>
          </Styled.TitlesColumn>

          <Styled.ActionButtonsRow>
            <Button onClick={handleDelete}>Deletar</Button>
            <Button onClick={() => setIsEditOpen(true)}>Editar</Button>
          </Styled.ActionButtonsRow>
        </Styled.MovieHeaderAndActions>

        <Styled.AllInfosRow>
          <Styled.MovieCardImage
            style={{
              backgroundImage: `url(${movie.imageUrl})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />

          <Styled.CardsSection>
            <Styled.RatingAndSubtitle>
              <p>{movie.subtitle || "Todo herói tem um começo"}</p>
              <div
                style={{ display: "flex", gap: "8px", alignItems: "center" }}
              >
                <Button>{movie.classificacao || "Classificação livre"}</Button>
                <Button>Votos</Button>
                <PercentageComponent percentage={67} />
              </div>
            </Styled.RatingAndSubtitle>

            <Styled.InfoCardsRow>
              <Styled.MainInfoSection>
                <Styled.SinapseAndGenreSection>
                  <Styled.InfoCard>
                    <p style={{ fontWeight: "700", fontSize: "16px" }}>
                      SINOPSE
                    </p>
                    <p>{movie.description}</p>
                  </Styled.InfoCard>

                  <Styled.InfoCard>
                    <p style={{ fontWeight: "700", fontSize: "14px" }}>
                      GÊNEROS
                    </p>
                    <Styled.GenreTags>
                      {movie.genre?.split(",").map((g: string) => (
                        <Button key={g}>{g.trim().toUpperCase()}</Button>
                      ))}
                    </Styled.GenreTags>
                  </Styled.InfoCard>
                </Styled.SinapseAndGenreSection>
              </Styled.MainInfoSection>

              <Styled.GeneralInfoSection>
                <Styled.InfoCard>
                  <p>Lançamento</p>
                  <p>
                    {new Date(movie.releaseDate).toLocaleDateString("pt-BR")}
                  </p>
                </Styled.InfoCard>

                {movie.duration && (
                  <Styled.InfoCard>
                    <p>Duração</p>
                    <p>{movie.duration} min</p>
                  </Styled.InfoCard>
                )}

                {movie.budget && (
                  <Styled.InfoCard>
                    <p>Orçamento</p>
                    <p>${movie.budget.toLocaleString()}</p>
                  </Styled.InfoCard>
                )}
              </Styled.GeneralInfoSection>
            </Styled.InfoCardsRow>
          </Styled.CardsSection>
        </Styled.AllInfosRow>
      </Styled.MovieInfoContainer>

      <Styled.VideoContainer>
        <p style={{ color: "white", fontWeight: "700", fontSize: "24px" }}>
          Trailer
        </p>
        <VideoComponent videoId={youtubeId} />
      </Styled.VideoContainer>

      {isEditOpen && (
        <SliderModal
          isOpen={isEditOpen}
          onClose={() => setIsEditOpen(false)}
          onAdd={() => {}}
          initialData={movie}
          onSubmit={handleEdit}
        />
      )}
    </Styled.PageContainer>
  );
};

export default Movie;
