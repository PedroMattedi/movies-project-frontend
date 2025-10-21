import styled from "styled-components";

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  background-color: #12111380;
  position: relative;
  z-index: 2;
  padding: 32px;
  gap: 32px;
`;

export const VideoContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  max-width: 1302px;
  margin: 0 auto;
  gap: 16px;

  @media (max-width: 768px) {
    max-width: 100%;
  }

  @media (max-width: 414px) {
    max-width: 100%;
    margin: 0;
  }
`;

export const MovieInfoContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
  color: white;
  padding: 32px;
  border-radius: 8px;
  overflow: hidden;
`;

export const BackgroundOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.75);
  backdrop-filter: blur(10px);
  z-index: 0;
`;

export const MovieHeaderAndActions = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TitlesColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const TitleText = styled.h1`
  font-size: 28px;
  font-weight: 700;
  margin: 0;
`;

export const SubtitleText = styled.p`
  font-size: 14px;
  opacity: 0.8;
`;

export const AllInfosRow = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 32px;
`;

export const MovieCardImage = styled.div`
  height: 542px;
  width: 374px;
  background-color: aliceblue;
  border-radius: 4px;
`;

export const CardsSection = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  height: 558px;
`;

export const RatingAndSubtitle = styled.div`
  height: 98px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const MainInfoSection = styled.div`
  display: flex;
  flex-direction: row;
  height: 404px;
  width: 100%;
  gap: 16px;
`;

export const SinapseAndGenreSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const InfoCard = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  gap: 8px;
  border-radius: 4px;
  background-color: #23222599;
  max-width: 416px;
`;

export const GenreTags = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  height: 31px;
`;

export const GeneralInfoSection = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  height: 247px;
  width: 100%;
  gap: 16px;
`;

export const InfoCardsRow = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ActionButtonsRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
`;
