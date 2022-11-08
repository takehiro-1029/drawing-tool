import React from 'react';

type ImagePreviewProps = {
  file: File | null
};

export const ImagePreview: React.FC<ImagePreviewProps> = ({ file }) => {
  const [url, setUrl] = React.useState<string>('');
  const isLoading = file && !url;

  React.useEffect(() => {
    if (!file) {
      return;
    }

    let reader: FileReader | null = new FileReader();
    reader.onloadend = () => {
      if (reader != null) {
        const res = reader!.result;
        if (res && typeof res === 'string') {
          setUrl(res);
        }
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
      <img
        src={url}
        alt={file.name}
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          margin: "auto",
          width: 500,
        }} />
    )
  ) : null;
};

