import React, { useImperativeHandle, Ref, useRef } from "react"
import { Layer, Stage, Line, StageProps } from "react-konva"
import * as R from "rambda";
import { Box } from "@mui/material";
import { Point } from "~/interfaces/Geom.interface";

const POINT_DISTANCE_FREEHAND = 30;

type KonvaGeneratePointsProps = {
    stageProps: StageProps;
};

// 公開したいメソッドの定義
interface Handler {
    deletePoints(): void;
}

// https://stackoverflow.com/questions/62132089/react-fc-with-forwardedref
export const KonvaGenerateLine: React.FC<KonvaGeneratePointsProps> = React.forwardRef((props, ref: Ref<Handler>) => {

    const inputRef = useRef({} as Handler);

    useImperativeHandle(ref, () => {
        return {
            deletePoints() {
                setPoints([]);
                setIsLockDrag(false);
            }
        };
    });

    const { stageProps } = props;

    const [points, setPoints] = React.useState<Point[]>([]);
    const [isLockDrag, setIsLockDrag] = React.useState(false);

    const pointsToFlat = (points: Point[]) => R.flatten<number>(points.map((d) => [d.x, d.y]));

    const getDistancePoints = (p1: Point, p2: Point) => {
        const a = p1.x - p2.x;
        const b = p1.y - p2.y;

        return Math.sqrt(a * a + b * b);
    };

    // 生成完了ハンドラ
    const onFinish = () => {
        if (points.length > 1) {
            setIsLockDrag(true);
        } else if (points.length = 1) {
            setPoints([]);
        }
    };

    const createLine = () => (
        <Stage
            width={stageProps.width}
            height={stageProps.height}
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
        <Box
            position={"absolute"}
            top={0}
            left={0}
            ref={inputRef}>
            {createLine()}
        </Box>
    );
});
