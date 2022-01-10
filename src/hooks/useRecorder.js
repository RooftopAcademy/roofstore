import { useEffect, useState } from "react";

const useRecorder = () => {
  const [audioURL, setAudioURL] = useState("")
  const [isRecording, setIsRecording] = useState(false)
  const [recorder, setRecorder] = useState(null)

  useEffect(() => {
    // Obtención perezosa de la grabadora la primera vez que estamos grabando.
    if (recorder === null) {
      if (isRecording) {
        requestRecorder().then(setRecorder, console.error)
      }
      return
    }

    // Administrar el estado de la grabadora
    if (recorder != null) {
      if (isRecording) {
        recorder.start()
      } else {
        recorder.stop()
      }
    }

    // Obtener el audio cuando esté listo
    const handleData = e => setAudioURL(URL.createObjectURL(e.data))
    
    recorder.addEventListener("dataavailable", handleData)
    return () => recorder.removeEventListener("dataavailable", handleData)
  }, [recorder, isRecording])

  const startRecording = () => setIsRecording(true)

  const stopRecording = (e) => {
    e.preventDefault()
    setIsRecording(false)
  }

  return [audioURL, isRecording, startRecording, stopRecording]
}

async function requestRecorder() {
  const stream = await navigator.mediaDevices.getUserMedia({audio: true})
  return new MediaRecorder(stream)
}

export default useRecorder