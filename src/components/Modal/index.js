import { ModalStyle } from "./style"
import Conteiner from "./Conteiner"
import { useState } from "react"

const Modal = () => {

    const [modalVisible, setModalVisible] = useState(false)

    return (
        <ModalStyle>
            <button onClick={ () => setModalVisible(true) }>Key to access the website</button>
            { modalVisible && <Conteiner />}
        </ModalStyle>
    )
}

export default Modal