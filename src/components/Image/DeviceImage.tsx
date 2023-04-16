import Icons from "../../assets/Icons"

const DeviceImage = ({device,width,height}: {device: string, width?: string, height?: string}) => {
    return(
        <>
            {
                device === "Laptop" ? (
                    <img src={Icons.Laptop} alt="Laptop" className={`${width ? `${width}` : "w-9"} ${height ? `${height}` : "h-9"}`} />
                  ) : device === "Mobile" ? (
                    <img src={Icons.Mobile} alt="Mobile" className={`${width ? `${width}` : "w-9"} ${height ? `${height}` : "h-9"}`} />
                  ) : device === "Audio Recorder" ? (
                    <img src={Icons.AudioRecorder} alt="AudioRecorder" className={`${width ? `${width}` : "w-9"} ${height ? `${height}` : "h-9"}`} />
                  ) : ""
            }
        </>
    )
}

export default DeviceImage