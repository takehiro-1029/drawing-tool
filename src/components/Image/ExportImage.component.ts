import html2canvas from "html2canvas";

export const ExportImage = (target: HTMLElement) => {
    html2canvas(target).then(canvas => {
        const targetImgUri = canvas.toDataURL("img/png");
        generateImage(targetImgUri);
    })
};

const generateImage = (uri: string) => {
    const downloadLink = document.createElement("a");
    if (typeof downloadLink.download === "string") {
        downloadLink.href = uri;
        downloadLink.download = "drawing.png";
        // Firefox では body の中にダウンロードリンクがないといけないので一時的に追加
        document.body.appendChild(downloadLink);
        // ダウンロードリンクが設定された a タグをクリック
        downloadLink.click();
        // Firefox 対策で追加したリンクを削除しておく
        document.body.removeChild(downloadLink);
    } else {
        window.open(uri);
    }
};