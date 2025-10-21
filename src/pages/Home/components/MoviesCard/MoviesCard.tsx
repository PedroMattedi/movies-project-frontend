import * as Styled from "./styles";
import { useNavigate } from "react-router-dom";

interface MoviesCardProps {
  movie: {
    id: string;
    title: string;
    imageUrl?: string;
  };
}

const MoviesCard = ({ movie }: MoviesCardProps) => {
  const navigate = useNavigate();
  return (
    <Styled.CardContainer onClick={() => navigate(`/movie/${movie.id}`)}>
      <Styled.MovieImage
        src={movie.imageUrl || "/placeholder-movie.jpg"}
        alt={movie.title}
      />
      <Styled.MovieTitle>{movie.title}</Styled.MovieTitle>
    </Styled.CardContainer>
  );
};

export default MoviesCard;
