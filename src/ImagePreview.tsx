import React from 'react';

type ImagePreviewProps = {
  file: File | null
  width: string | number | undefined
  position: string | number | undefined
  margin: string | number | undefined
  top: string | number | undefined
  bottom: string | number | undefined
  left: string | number | undefined
  right: string | number | undefined
};

export const ImagePreview: React.FC<ImagePreviewProps> = ({ file, ...props }) => {
  const [url, setUrl] = React.useState<string>('');
  const isLoading = file && !url;

  React.useEffect(() => {
    if (!file) {
      return;
    }

    let reader: FileReader | null = new FileReader();
    reader.onloadend = () => {
      const res = reader!.result;
      if (res && typeof res === 'string') {
        setUrl(res);
      }
    };
    reader.readAsDataURL(file);

    return () => {
      reader = null;
    };
  }, [file]);

  return file ? (
    isLoading ? (
      <div />
    ) : (
      <img src={url} alt={file.name} {...props} />
    )
  ) : null;
};

