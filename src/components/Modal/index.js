import { ModalStyle } from "./style"
import Conteiner from "./Conteiner"
import { useState } from "react"

const Modal = () => {

    const [modalVisible, setModalVisible] = useState(false)

    return (
        <ModalStyle>
            <button onClick={ () => setModalVisible(true) }>Put your key to fecth</button>
            { modalVisible && <Conteiner />}
        </ModalStyle>
    )
}

export default Modal