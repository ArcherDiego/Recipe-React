import { ModalStyle } from "./style"
import Conteiner from "./Conteiner"
import { useState } from "react"

const Modal = () => {

    const [modalVisible, setModalVisible] = useState(false)

    const verification = () => {
        setModalVisible(false);
    }

    return (
        <ModalStyle>
            <button onClick={ () => setModalVisible(true) }>Key to access the website</button>
            { modalVisible && <Conteiner onClose={ verification } />}
        </ModalStyle>
    )
}

export default Modal