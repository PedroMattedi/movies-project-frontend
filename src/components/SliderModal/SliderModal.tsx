import Button from "components/Button/Button";
import InputComponent from "components/Input/Input";
import React, { useState } from "react";
import * as Styled from "./styles";
import { createMovie } from "services/endpoints/movies";
import { uploadImage } from "services/endpoints/upload";

interface SliderModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAdd?: () => void;
  onSubmit?: (data: any) => void;
  initialData?: any;
}

const SliderModal: React.FC<SliderModalProps> = ({
  isOpen,
  onClose,
  onAdd,
  onSubmit,
  initialData,
}) => {
  const [form, setForm] = useState({
    title: initialData?.title || "",
    originalTitle: initialData?.originalTitle || "",
    releaseDate: initialData?.releaseDate?.slice(0, 10) || "",
    description: initialData?.description || "",
    budget: initialData?.budget?.toString() || "",
    duration: initialData?.duration?.toString() || "",
    genre: initialData?.genre || "",
    imageUrl: initialData?.imageUrl || "",
    trailerUrl: initialData?.trailerUrl || "",
    classificacao: initialData?.classificacao || "",
    backgroundImageUrl: initialData?.backgroundImageUrl || "",
  });

  const [imageFile, setImageFile] = useState<File | null>(null);
  const [backgroundFile, setBackgroundFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    type: "image" | "background"
  ) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (type === "image") setImageFile(file);
    else setBackgroundFile(file);
  };

  const handleAdd = async () => {
    try {
      setLoading(true);

      let uploadedImageUrl = form.imageUrl;
      let uploadedBackgroundUrl = form.backgroundImageUrl;

      if (imageFile) {
        const { url } = await uploadImage(imageFile);
        uploadedImageUrl = url;
      }

      if (backgroundFile) {
        const { url } = await uploadImage(backgroundFile);
        uploadedBackgroundUrl = url;
      }

      const payload = {
        title: form.title.trim(),
        originalTitle: form.originalTitle.trim(),
        releaseDate: form.releaseDate,
        description: form.description.trim(),
        budget: form.budget ? parseFloat(form.budget) : undefined,
        duration: parseInt(form.duration) || 0,
        genre: form.genre.trim(),
        classificacao: form.classificacao.trim(),
        trailerUrl: form.trailerUrl.trim(),
        backgroundImageUrl: uploadedBackgroundUrl || undefined,
        imageUrl: uploadedImageUrl || undefined,
      };

      await createMovie(payload);
      alert("Filme adicionado com sucesso!");
      onAdd();
      onClose();
    } catch (error) {
      console.error(error);
      alert("Erro ao adicionar o filme");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Styled.Overlay>
      <Styled.Drawer>
        <Styled.Header>
          <Styled.Title>Adicionar Novo Filme</Styled.Title>
          <Styled.CloseButton onClick={onClose}>×</Styled.CloseButton>
        </Styled.Header>

        <Styled.Content>
          <InputComponent
            label="Título"
            name="title"
            value={form.title}
            onChange={handleChange}
          />
          <InputComponent
            label="Título Original"
            name="originalTitle"
            value={form.originalTitle}
            onChange={handleChange}
          />
          <InputComponent
            label="Data de Lançamento"
            name="releaseDate"
            type="date"
            value={form.releaseDate}
            onChange={handleChange}
          />
          <Styled.TextAreaWrapper>
            <Styled.LabelText>Descrição</Styled.LabelText>
            <Styled.TextArea
              name="description"
              value={form.description}
              onChange={handleChange}
              placeholder="Sinopse..."
            />
          </Styled.TextAreaWrapper>

          <Styled.InfoRow>
            <InputComponent
              label="Orçamento (US$)"
              name="budget"
              type="number"
              value={form.budget}
              onChange={handleChange}
            />
            <InputComponent
              label="Duração (min)"
              name="duration"
              type="number"
              value={form.duration}
              onChange={handleChange}
            />
          </Styled.InfoRow>

          <Styled.InfoRow>
            <InputComponent
              label="Gênero"
              name="genre"
              value={form.genre}
              onChange={handleChange}
              placeholder="Ação, Aventura..."
            />
            <InputComponent
              label="Classificação"
              name="classificacao"
              value={form.classificacao}
              onChange={handleChange}
              placeholder="Ex: 12 anos"
            />
          </Styled.InfoRow>

          <InputComponent
            label="URL do Trailer (YouTube)"
            name="trailerUrl"
            value={form.trailerUrl}
            onChange={handleChange}
            placeholder="https://www.youtube.com/watch?v=..."
          />

          <Styled.ImageSection>
            <Styled.LabelText>Imagem do Cartaz</Styled.LabelText>
            <Styled.FileInput
              type="file"
              accept="image/*"
              onChange={(e) => handleFileChange(e, "image")}
            />
            {imageFile && (
              <Styled.Preview
                src={URL.createObjectURL(imageFile)}
                alt="Prévia cartaz"
              />
            )}
          </Styled.ImageSection>

          <Styled.ImageSection>
            <Styled.LabelText>Imagem de Fundo</Styled.LabelText>
            <Styled.FileInput
              type="file"
              accept="image/*"
              onChange={(e) => handleFileChange(e, "background")}
            />
            {backgroundFile && (
              <Styled.Preview
                src={URL.createObjectURL(backgroundFile)}
                alt="Prévia fundo"
              />
            )}
          </Styled.ImageSection>
        </Styled.Content>

        <Styled.Footer>
          <Button onClick={onClose}>Cancelar</Button>
          <Button
            onClick={() => {
              if (onSubmit) onSubmit(form);
              else handleAdd();
            }}
            disabled={loading}
          >
            {loading
              ? "Salvando..."
              : onSubmit
              ? "Salvar Alterações"
              : "Adicionar Filme"}
          </Button>
        </Styled.Footer>
      </Styled.Drawer>
    </Styled.Overlay>
  );
};

export default SliderModal;
