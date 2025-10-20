import VideoComponent from "components/Video/VideoComponent";
import * as Styled from "./styles";
import Button from "components/Button/Button";
import PercentageComponent from "./components/Percentage";

const Movie = () => {
  return (
    <Styled.PageContainer>
      <Styled.MovieInfoContainer>
        <Styled.MovieHeaderAndActions>
          <Styled.TitlesColumn>
            <p>Bumblebee</p>
            <p>Título original: Bumblebee</p>
          </Styled.TitlesColumn>
          <Styled.ActionButtonsRow>
            <Button>Deletar</Button>
            <Button>Editar</Button>
          </Styled.ActionButtonsRow>
        </Styled.MovieHeaderAndActions>
        <Styled.AllInfosRow>
          <Styled.MovieCardImage></Styled.MovieCardImage>
          <Styled.CardsSection>
            <Styled.RatingAndSubtitle>
              <>
                <p>Todo herói tem um começo</p>
              </>
              <>
                <Button>Classificação indicativa</Button>
                <Button>Votos</Button>
                <PercentageComponent percentage={67} />
              </>
            </Styled.RatingAndSubtitle>
            <Styled.InfoCardsRow>
              <Styled.MainInfoSection>
                <Styled.SinapseAndGenreSection>
                  <Styled.InfoCard>
                    <p style={{ fontWeight: "700", fontSize: "16px" }}>
                      SINOPSE
                    </p>
                    <p>
                      “Bumblebee” é um filme que se passa em 1987 e conta a
                      história de um Autobot chamado Bumblebee que encontra
                      refúgio em um ferro-velho de uma pequena cidade praiana da
                      Califórnia. Charlie, uma adolescente prestes a completar
                      18 anos, encontra Bumblebee machucado e sem condições de
                      uso. Quando ela o revive, percebe que este não é qualquer
                      fusca amarelo1. O filme é uma mistura de animação e drama,
                      com um tom leve e divertido, e se destaca por sua
                      ambientação nos anos 80 e pela trilha sonora perfeita2.
                    </p>
                  </Styled.InfoCard>
                  <Styled.InfoCard>
                    <p style={{ fontWeight: "700", fontSize: "14px" }}>
                      Generos
                    </p>
                    <Styled.GenreTags>
                      <Button>AÇÃO</Button>
                      <Button>AVENTURA</Button>
                      <Button>FICÇÃO CIENTIFICA</Button>
                    </Styled.GenreTags>
                  </Styled.InfoCard>
                </Styled.SinapseAndGenreSection>
              </Styled.MainInfoSection>
              <Styled.GeneralInfoSection>
                <Styled.InfoCard>
                  <p>Lançamento</p>
                  <p>20/12/2018</p>
                </Styled.InfoCard>
                <Styled.InfoCard>
                  <p>Duração</p>
                  <p>1h 53m</p>
                </Styled.InfoCard>
                <Styled.InfoCard>
                  <p>SITUAÇÃO</p>
                  <p>Lançado</p>
                </Styled.InfoCard>
                <Styled.InfoCard>
                  <p>IDIOMA</p>
                  <p>Inglês</p>
                </Styled.InfoCard>
                <Styled.InfoCard>
                  <p>ORÇAMENTO</p>
                  <p>$135M</p>
                </Styled.InfoCard>
                <Styled.InfoCard>
                  <p>RECEITA</p>
                  <p>$467.99M</p>
                </Styled.InfoCard>
                <Styled.InfoCard>
                  <p>LUCRO</p>
                  <p>332.99M</p>
                </Styled.InfoCard>
              </Styled.GeneralInfoSection>
            </Styled.InfoCardsRow>
          </Styled.CardsSection>
        </Styled.AllInfosRow>
      </Styled.MovieInfoContainer>
      <Styled.VideoContainer>
        <p style={{ color: "white", fontWeight: "700", fontSize: "24px" }}>
          Trailer
        </p>
        <VideoComponent videoId="qe3l1rvJMlA" />
      </Styled.VideoContainer>
    </Styled.PageContainer>
  );
};

export default Movie;
