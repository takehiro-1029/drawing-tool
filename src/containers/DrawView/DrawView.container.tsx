import React, { useRef } from "react"
import '~/App.css'
import { Button, Box } from "@mui/material";
import { IMAGE_CANVAS_SIZE } from "~/constants/image.constant";
import { KonvaGenerateLine } from "~/components/Canvas/KonvaGenerateLine.component";
import { FileImagePreview } from '~/components/Image/ImagePreview.component';
import { ExportImage } from "~/components/Image/ExportImage.component";

const DrawView: React.FC = () => {

  const IMAGE_EXPORT_ID = "export-target"

  const childRef = useRef();
  const onDelete = () => {
    // @ts-ignore
    childRef.current.deletePoints()
  };

  const [file, setFile] = React.useState<File | null>(null)

  const changeFileHandler = React.useCallback((evt: React.ChangeEvent<HTMLInputElement>) => {
    if (evt.currentTarget?.files && evt.currentTarget.files[0]) {
      setFile(evt.currentTarget.files[0]);
    }
  }, []);

  const resetHandler = React.useCallback(() => {
    const element = document.getElementById("inputFile") as HTMLInputElement;
    element.value = "";
    setFile(null);
  }, []);

  const onClickExport = () => {
    const target = document.getElementById(IMAGE_EXPORT_ID);
    ExportImage(target!)
  };

  return (
    <div>
      <input type="file" id="inputFile" onChange={changeFileHandler} />
      {file != undefined && (
        <div>
          <Button variant="contained" onClick={resetHandler}>
            画像削除
          </Button>
          <Button variant="contained" onClick={onClickExport}>
            PNG出力
          </Button>
          <Box
            position={"relative"}
            width={IMAGE_CANVAS_SIZE.width}
            height={IMAGE_CANVAS_SIZE.height}
            text-align={"center"}
            id={IMAGE_EXPORT_ID}
          >
            <FileImagePreview file={file} />
            <KonvaGenerateLine
              stageProps={{
                width: IMAGE_CANVAS_SIZE.width,
                height: IMAGE_CANVAS_SIZE.height
              }}
              // @ts-ignore
              ref={childRef}
            />
          </Box>
          <Button variant="contained" onClick={onDelete}>
            ライン削除
          </Button>
        </div>
      )}
    </div>
  )
}

export default DrawView;

