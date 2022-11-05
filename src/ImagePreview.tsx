import React from 'react';
import useImage from 'use-image';

type ImagePreviewProps = {
  file: File | null
  width: string | number | undefined
  position: string | number | undefined
  margin:string | number | undefined
  top:string | number | undefined
  bottom:string | number | undefined
  left:string | number | undefined
  right:string | number | undefined
};

type Ueei = {
  t: HTMLImageElement | undefined
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



export const getImageURL = (file: File| null) : ( string | undefined) => {

  if (!file) {
    return;
  }

  var url: string = '';
  let reader: FileReader| null = new FileReader();

  reader.onloadend = () => {
   const res = reader!.result;
   if (res && typeof res === 'string') {
      return res
    }
  };
  reader.readAsDataURL(file);

  // setTimeout(() => {
  // }, 1000);
  // const [a] = useImage('https://placehold.jp/150x150.png')
  // return a
};
