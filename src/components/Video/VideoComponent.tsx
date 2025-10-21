import YouTube from "react-youtube";
import * as Styled from "./styles";

interface VideoComponentProps {
  videoId: string;
}

const VideoComponent = ({ videoId }: VideoComponentProps) => {
  return (
    <Styled.VideoWrapper>
      {videoId && (
        <YouTube
          videoId={videoId}
          opts={{
            width: "100%",
            maxHeight: "100%",
            playerVars: { autoplay: 0, controls: 1 },
          }}
        />
      )}
    </Styled.VideoWrapper>
  );
};

export default VideoComponent;
