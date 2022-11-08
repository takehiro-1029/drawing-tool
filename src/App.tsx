import React from "react"
import './App.css'
import { Layer, Circle, Stage, Image, Rect, Line } from "react-konva"
import { LineConfig } from "konva/lib/shapes/Line";
import * as R from "rambda";
import { Button, Box } from "@mui/material";
import useImage from 'use-image';
import { ImagePreview } from './ImagePreview';
import html2canvas from "html2canvas";

function App() {

  const POINT_DISTANCE_FREEHAND = 30;
  const WIDTH = 500;
  const HEIGHT = 500;
  type Point = { x: number; y: number };
  const [points, setPoints] = React.useState<Point[]>([]);

  const getDistancePoints = (p1: Point, p2: Point) => {
    const a = p1.x - p2.x;
    const b = p1.y - p2.y;

    return Math.sqrt(a * a + b * b);
  };

  const pointsToFlat = (points: Point[]) => R.flatten<number>(points.map((d) => [d.x, d.y]));
  const [isLockDrag, setIsLockDrag] = React.useState(false);

  // 生成完了ハンドラ
  const onFinish = () => {
    if (points.length > 1) {
      setIsLockDrag(true);
    } else if (points.length = 1) {
      setPoints([]);
    }
  };

  const onDelete = () => {
    setIsLockDrag(false);
    setPoints([]);
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

  const createLine = () => (
    <Stage
      width={WIDTH}
      height={HEIGHT}
      onMouseDown={(e) => {
        if (points.length > 1 && isLockDrag) {
          return;
        }
        const newPoint = e.target.getRelativePointerPosition();
        setPoints([newPoint]);
      }}
      onMouseMove={(e) => {
        const isStage = e.target === e.target.getStage();
        const lastPoint = R.last(points);

        if (isLockDrag || !isStage || !lastPoint) {
          return;
        }

        const newPoint = e.target.getRelativePointerPosition();
        if (getDistancePoints(newPoint, lastPoint) > POINT_DISTANCE_FREEHAND) {
          setPoints([...points, newPoint]);
        }
      }}
      onMouseUp={onFinish}>
      <Layer>
        <Line
          stroke={"#FF1DCE"}
          lineJoin={"bevel"}
          strokeWidth={5}
          points={pointsToFlat(points)} strokeScaleEnabled={false}></Line>
      </Layer>
    </Stage>
  );

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
              width={WIDTH}
              height={HEIGHT}
              text-align={"center"}
              id={"target-component"}
            >
              <ImagePreview file={file} />
              <Box
                position={"absolute"}
                top={0}
                left={0}>
                {createLine()}
              </Box>
            </Box>
            <Button variant="contained" disabled={points.length < 2} onClick={onDelete}>
              ライン削除
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}

export default App

