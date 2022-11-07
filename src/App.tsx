import React from "react"
import './App.css'
import { Layer, Circle, Stage, Image, Rect, Line } from "react-konva"
import { LineConfig } from "konva/lib/shapes/Line";
import * as R from "rambda";
import { Button, Box } from "@mui/material";
import useImage from 'use-image';
import { ImagePreview } from './ImagePreview';

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

  return (
    <div className="App">
      <div>
        <input type="file" onChange={changeFileHandler} />
        {file != undefined && (
          <div>
            <Button variant="contained" onClick={resetHandler}>
              画像削除
            </Button>
            <Box
              position={"relative"}
              width={WIDTH}
              height={HEIGHT}
            // text-align={"center"}
            >
              <ImagePreview
                file={file}
                width={WIDTH}
                position={"absolute"}
                top={0}
                bottom={0}
                left={0}
                margin={"auto"}
                right={0} />
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

