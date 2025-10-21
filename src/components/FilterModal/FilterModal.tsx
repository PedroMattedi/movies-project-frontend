import React, { useState } from "react";
import * as Styled from "./styles";
import InputComponent from "components/Input/Input";
import Button from "components/Button/Button";

interface FilterModalProps {
  isOpen: boolean;
  onClose: () => void;
  onApply: (filters: {
    genre?: string;
    minDuration?: number;
    maxDuration?: number;
    releaseDateFrom?: string;
    releaseDateTo?: string;
  }) => void;
}

const FilterModal: React.FC<FilterModalProps> = ({
  isOpen,
  onClose,
  onApply,
}) => {
  const [filters, setFilters] = useState({
    genre: "",
    minDuration: "",
    maxDuration: "",
    releaseDateFrom: "",
    releaseDateTo: "",
  });

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const handleApply = () => {
    const parsedFilters = {
      genre: filters.genre || undefined,
      minDuration: filters.minDuration
        ? Number(filters.minDuration)
        : undefined,
      maxDuration: filters.maxDuration
        ? Number(filters.maxDuration)
        : undefined,
      releaseDateFrom: filters.releaseDateFrom || undefined,
      releaseDateTo: filters.releaseDateTo || undefined,
    };
    onApply(parsedFilters);
    onClose();
  };

  return (
    <Styled.Overlay>
      <Styled.ModalContainer>
        <Styled.Header>
          <Styled.Title>Filtros</Styled.Title>
          <Styled.CloseButton onClick={onClose}>×</Styled.CloseButton>
        </Styled.Header>

        <Styled.Content>
          <InputComponent
            label="Gênero"
            name="genre"
            value={filters.genre}
            onChange={handleChange}
          />
          <InputComponent
            label="Duração mínima (min)"
            name="minDuration"
            type="number"
            value={filters.minDuration}
            onChange={handleChange}
          />
          <InputComponent
            label="Duração máxima (min)"
            name="maxDuration"
            type="number"
            value={filters.maxDuration}
            onChange={handleChange}
          />
          <InputComponent
            label="Lançamento de"
            name="releaseDateFrom"
            type="date"
            value={filters.releaseDateFrom}
            onChange={handleChange}
          />
          <InputComponent
            label="Até"
            name="releaseDateTo"
            type="date"
            value={filters.releaseDateTo}
            onChange={handleChange}
          />
        </Styled.Content>

        <Styled.Actions>
          <Button onClick={onClose}>Cancelar</Button>
          <Button onClick={handleApply}>Aplicar</Button>
        </Styled.Actions>
      </Styled.ModalContainer>
    </Styled.Overlay>
  );
};

export default FilterModal;
