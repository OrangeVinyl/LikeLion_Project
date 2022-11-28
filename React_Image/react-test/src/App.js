import { useState } from 'react'

function Mypage() {
  const [imageSrc, setImageSrc] = useState('')

  const encodeFileTobase64 = (fileBlob) => {
    const reader = new FileReader()
    reader.readAsDataURL(fileBlob)
    return new Promise(
      (resolve) =>
        (reader.onload = () => {
          setImageSrc(reader.result)
          resolve()
        })
    )
  }

  return (
    <main className="container">
      <h2>이미지 미리보기</h2>
      <input
        type="file"
        onChange={(e) => {
          encodeFileTobase64(e.target.files[0])
        }}
      />
      <div className="preview">
        {imageSrc && <img src={imageSrc} alt="preview-img" />}
      </div>
    </main>
  )
}

export default Mypage