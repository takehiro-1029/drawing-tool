import React, { useRef } from "react"
import './App.css'
import { Button, Box } from "@mui/material";
import { KonvaGenerateLine } from "./components/Canvas/KonvaGenerateLine.component";
import { ImagePreview } from './ImagePreview';
import html2canvas from "html2canvas";
import { IMAGE_CANVAS_SIZE } from "./constants/image.constant";

function App() {

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

  const saveImagePNG = (uri: string) => {
    const downloadLink = document.createElement("a");
    if (typeof downloadLink.download === "string") {
      downloadLink.href = uri;
      downloadLink.download = "component.png";
      // Firefox では body の中にダウンロードリンクがないといけないので一時的に追加
      document.body.appendChild(downloadLink);
      // ダウンロードリンクが設定された a タグをクリック
      downloadLink.click();
      // Firefox 対策で追加したリンクを削除しておく
      document.body.removeChild(downloadLink);
    } else {
      window.open(uri);
    }
  }

  const onClickExport = () => {
    const target = document.getElementById("target-component");
    html2canvas(target!).then(canvas => {
      const targetImgUri = canvas.toDataURL("img/png");
      saveImagePNG(targetImgUri);
    })
  };

  return (
    <div className="App">
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
              id={"target-component"}
            >
              <ImagePreview file={file} />
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
    </div>
  )
}

export default App

