import * as Styled from "./styles";

interface CircularProgressProps {
  percentage: number;
}

const CircularProgress = ({ percentage }: CircularProgressProps) => {
  const radius = 44;
  const strokeWidth = 8;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <Styled.CircleContainer>
      <Styled.Svg viewBox="0 0 98 98">
        <circle
          cx="49"
          cy="49"
          r={radius}
          stroke="#3a3a3a"
          strokeWidth={strokeWidth}
          fill="transparent"
        />
        <circle
          cx="49"
          cy="49"
          r={radius}
          stroke="#ffd700"
          strokeWidth={strokeWidth}
          fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
        />
      </Styled.Svg>
      <Styled.PercentageText>{percentage}%</Styled.PercentageText>
    </Styled.CircleContainer>
  );
};

export default CircularProgress;
